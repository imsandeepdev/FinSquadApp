/**
 * Pure calculation helpers for the Loan Origination flow.
 * No backend yet — these are the same formulas a real credit-policy engine
 * would use (reducing-balance EMI, FOIR-based eligibility), just running
 * on-device against mocked inputs.
 */

export const POLICY_ANNUAL_RATE = 24; // % p.a., typical microfinance reducing-balance rate
export const MAX_FOIR = 0.5; // RBI-aligned max Fixed Obligation to Income Ratio for qualifying borrowers

/** Reducing-balance monthly EMI for a given principal/rate/tenure. */
export const computeMonthlyEMI = (
  principal: number,
  annualRatePercent: number,
  tenureMonths: number,
): number => {
  if (!principal || !tenureMonths) return 0;
  const r = annualRatePercent / 12 / 100;
  if (r === 0) return principal / tenureMonths;
  const factor = Math.pow(1 + r, tenureMonths);
  return (principal * r * factor) / (factor - 1);
};

/** Max principal supportable by a given monthly EMI headroom (inverse of computeMonthlyEMI). */
export const computeEligiblePrincipal = (
  maxEMI: number,
  annualRatePercent: number,
  tenureMonths: number,
): number => {
  if (maxEMI <= 0 || !tenureMonths) return 0;
  const r = annualRatePercent / 12 / 100;
  if (r === 0) return maxEMI * tenureMonths;
  const factor = Math.pow(1 + r, tenureMonths);
  return (maxEMI * (factor - 1)) / (r * factor);
};

export const computeFOIR = (
  existingMonthlyEMI: number,
  proposedEMI: number,
  monthlyIncome: number,
): number => {
  if (!monthlyIncome) return 1;
  return (existingMonthlyEMI + proposedEMI) / monthlyIncome;
};

export type RiskBand = "LOW" | "MEDIUM" | "HIGH";

export interface RiskInsight {
  title: string;
  value: string;
  subtitle: string;
}

export interface AIRiskAssessment {
  score: number;
  band: RiskBand;
  recommendation: string;
  explanation: string;
  insights: RiskInsight[];
}

interface AssessmentInput {
  monthlyIncome: number;
  existingMonthlyEMI: number;
  proposedEMI: number;
  requestedAmount: number;
  eligibleAmount: number;
  centreHealthScore: number;
  tenureMonths: number;
}

/**
 * Mocked "AI" credit risk score. Deterministic rule-based blend of
 * repayment capacity, requested-vs-eligible ratio, and centre repayment
 * health — framed as an AI insight card, same presentation pattern as the
 * existing AI Wealth Coach screen. Advisory only, no autonomous decisions.
 */
export const computeAIRiskAssessment = (
  input: AssessmentInput,
): AIRiskAssessment => {
  const {
    monthlyIncome,
    existingMonthlyEMI,
    proposedEMI,
    requestedAmount,
    eligibleAmount,
    centreHealthScore,
    tenureMonths,
  } = input;

  const foirAfterLoan = computeFOIR(existingMonthlyEMI, proposedEMI, monthlyIncome);
  const eligibilityRatio = eligibleAmount > 0 ? requestedAmount / eligibleAmount : 1;

  let score = 100;

  // Repayment capacity penalty
  if (foirAfterLoan > MAX_FOIR) {
    score -= Math.min(45, (foirAfterLoan - MAX_FOIR) * 150);
  } else {
    score -= Math.max(0, (MAX_FOIR - foirAfterLoan) * -10); // small bonus for headroom (no-op guard)
  }

  // Requested vs eligible penalty
  if (eligibilityRatio > 1) {
    score -= Math.min(35, (eligibilityRatio - 1) * 60);
  }

  // Centre repayment health contributes up to +/-15
  score += (centreHealthScore - 70) * 0.3;

  // Long tenure on a large ask carries slightly more risk
  if (tenureMonths > 18 && eligibilityRatio > 0.8) {
    score -= 5;
  }

  score = Math.max(5, Math.min(98, Math.round(score)));

  const band: RiskBand = score >= 75 ? "LOW" : score >= 50 ? "MEDIUM" : "HIGH";

  const recommendation =
    band === "LOW"
      ? "Recommended for Approval"
      : band === "MEDIUM"
      ? "Manual Review Suggested"
      : "Not Recommended — High Risk";

  const explanation =
    band === "LOW"
      ? `Repayment capacity is healthy at ${(foirAfterLoan * 100).toFixed(0)}% FOIR, well within the ${MAX_FOIR * 100}% policy limit, and the centre has a strong repayment track record. This proposal fits standard credit policy.`
      : band === "MEDIUM"
      ? `FOIR after this loan is ${(foirAfterLoan * 100).toFixed(0)}% against a ${MAX_FOIR * 100}% policy limit, and/or the requested amount is close to the household's eligible limit. Recommend a manual review before sanction.`
      : `FOIR after this loan would be ${(foirAfterLoan * 100).toFixed(0)}%, exceeding the ${MAX_FOIR * 100}% policy limit, and/or the requested amount significantly exceeds the eligible limit. High chance of repayment stress — not recommended without restructuring the amount or tenure.`;

  const insights: RiskInsight[] = [
    {
      title: "Repayment Capacity",
      value: `${Math.round(foirAfterLoan * 100)}% FOIR`,
      subtitle:
        foirAfterLoan <= MAX_FOIR
          ? `Within ${MAX_FOIR * 100}% policy limit`
          : `Over ${MAX_FOIR * 100}% policy limit`,
    },
    {
      title: "Loan vs Eligibility",
      value: `${Math.round(eligibilityRatio * 100)}%`,
      subtitle: "of max eligible amount",
    },
    {
      title: "Centre Repayment Health",
      value: `${centreHealthScore}/100`,
      subtitle: "Village/centre track record",
    },
  ];

  return { score, band, recommendation, explanation, insights };
};

export const formatCurrency = (value: number): string => {
  if (!isFinite(value)) return "₹0";
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
};
