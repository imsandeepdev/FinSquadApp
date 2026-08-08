import React, { useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { AppTextInput } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import type { LoanOriginationData } from "..";
import {
  MAX_FOIR,
  POLICY_ANNUAL_RATE,
  computeEligiblePrincipal,
  computeFOIR,
  computeMonthlyEMI,
  formatCurrency,
} from "../utils";

interface Props {
  data: LoanOriginationData;
  updateData: (key: string, value: string) => void;
}

const TENURE_OPTIONS = ["6", "12", "18", "24"];
const PURPOSE_OPTIONS = [
  "Business Expansion",
  "Agriculture",
  "Livestock",
  "Home Improvement",
  "Education",
];

const LoanProposalForm: React.FC<Props> = ({ data, updateData }) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const income = Number(data.monthlyIncome) || 0;
  const existingEMI = Number(data.existingMonthlyEMI) || 0;
  const requestedAmount = Number(data.requestedAmount) || 0;
  const tenureMonths = Number(data.tenureMonths) || 12;

  const proposedEMI = useMemo(
    () => computeMonthlyEMI(requestedAmount, POLICY_ANNUAL_RATE, tenureMonths),
    [requestedAmount, tenureMonths],
  );

  const foirAfterLoan = useMemo(
    () => computeFOIR(existingEMI, proposedEMI, income),
    [existingEMI, proposedEMI, income],
  );

  const maxEMIHeadroom = Math.max(0, income * MAX_FOIR - existingEMI);

  const eligibleAmount = useMemo(
    () => computeEligiblePrincipal(maxEMIHeadroom, POLICY_ANNUAL_RATE, tenureMonths),
    [maxEMIHeadroom, tenureMonths],
  );

  const overLimit = requestedAmount > eligibleAmount && requestedAmount > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>LOAN PROPOSAL</Text>
      <Text style={styles.sectionSubtitle}>
        Eligible up to {formatCurrency(eligibleAmount)} at this tenure.
      </Text>

      <AppTextInput
        title="Requested Loan Amount (₹)"
        placeholder="Enter amount"
        keyboardType="numeric"
        value={data.requestedAmount}
        onChangeText={text => updateData("requestedAmount", text.replace(/[^0-9]/g, ""))}
      />

      <Text style={styles.label}>Tenure (months)</Text>
      <View style={styles.chipRow}>
        {TENURE_OPTIONS.map(t => {
          const active = data.tenureMonths === t;
          return (
            <Pressable
              key={t}
              onPress={() => updateData("tenureMonths", t)}
              style={[styles.chip, active && styles.chipActive]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>{t}m</Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={styles.label}>Purpose</Text>
      <View style={styles.chipRowWrap}>
        {PURPOSE_OPTIONS.map(p => {
          const active = data.purpose === p;
          return (
            <Pressable
              key={p}
              onPress={() => updateData("purpose", p)}
              style={[styles.purposeChip, active && styles.chipActive]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>{p}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryKey}>Proposed EMI</Text>
          <Text style={styles.summaryValue}>{formatCurrency(proposedEMI)}/mo</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryKey}>FOIR after this loan</Text>
          <Text
            style={[
              styles.summaryValue,
              { color: foirAfterLoan > MAX_FOIR ? themeColor.errorColor : themeColor.successColor },
            ]}
          >
            {Math.round(foirAfterLoan * 100)}%
          </Text>
        </View>
      </View>

      {overLimit && (
        <View style={styles.warningBanner}>
          <Ionicons name="warning" size={18} color={themeColor.errorColor} />
          <Text style={styles.warningText}>
            Requested amount exceeds the eligible limit for this tenure. The AI Risk Review
            in the next step will flag this.
          </Text>
        </View>
      )}
    </View>
  );
};

export default LoanProposalForm;
