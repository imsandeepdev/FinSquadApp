import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import type { LoanOriginationData } from "..";
import { centres } from "../../CentreManagement/const";
import {
  AIRiskAssessment,
  POLICY_ANNUAL_RATE,
  computeAIRiskAssessment,
  computeEligiblePrincipal,
  computeMonthlyEMI,
  MAX_FOIR,
} from "../utils";

interface Props {
  data: LoanOriginationData;
  updateData: (key: string, value: string) => void;
}

const BAND_COLOR = (band: string, themeColor: any) =>
  band === "LOW"
    ? themeColor.successColor
    : band === "MEDIUM"
    ? themeColor.infoColor
    : themeColor.errorColor;

const AIRiskReview: React.FC<Props> = ({ data, updateData }) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [analyzing, setAnalyzing] = useState(true);
  const [result, setResult] = useState<AIRiskAssessment | null>(null);

  useEffect(() => {
    setAnalyzing(true);

    const income = Number(data.monthlyIncome) || 0;
    const existingEMI = Number(data.existingMonthlyEMI) || 0;
    const requestedAmount = Number(data.requestedAmount) || 0;
    const tenureMonths = Number(data.tenureMonths) || 12;
    const centre = centres.find(c => c.code === data.centreCode);
    const centreHealthScore = centre?.repaymentHealthScore ?? 65;

    const proposedEMI = computeMonthlyEMI(requestedAmount, POLICY_ANNUAL_RATE, tenureMonths);
    const maxEMIHeadroom = Math.max(0, income * MAX_FOIR - existingEMI);
    const eligibleAmount = computeEligiblePrincipal(maxEMIHeadroom, POLICY_ANNUAL_RATE, tenureMonths);

    const timer = setTimeout(() => {
      const assessment = computeAIRiskAssessment({
        monthlyIncome: income,
        existingMonthlyEMI: existingEMI,
        proposedEMI,
        requestedAmount,
        eligibleAmount,
        centreHealthScore,
        tenureMonths,
      });

      setResult(assessment);
      setAnalyzing(false);

      updateData("aiRiskScore", String(assessment.score));
      updateData("aiRiskBand", assessment.band);
      updateData("aiRecommendation", assessment.recommendation);
    }, 1200);

    return () => clearTimeout(timer);
    // Re-run only when the inputs that feed the assessment change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    data.monthlyIncome,
    data.existingMonthlyEMI,
    data.requestedAmount,
    data.tenureMonths,
    data.centreCode,
  ]);

  if (analyzing || !result) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={themeColor.appColor} />
        <Text style={styles.loadingTitle}>AI is analyzing this proposal…</Text>
        <Text style={styles.loadingSubtitle}>
          Checking repayment capacity, eligibility, and centre history
        </Text>
      </View>
    );
  }

  const bandColor = BAND_COLOR(result.band, themeColor);

  return (
    <View style={styles.container}>
      <View style={styles.aiTag}>
        <Ionicons name="sparkles" size={14} color={themeColor.appColor} />
        <Text style={styles.aiTagText}>AI Credit Risk Insight</Text>
      </View>

      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>AI Risk Score</Text>
        <Text style={[styles.scoreText, { color: bandColor }]}>
          {result.score}
          <Text style={styles.scoreTotal}>/100</Text>
        </Text>

        <View style={styles.progressBg}>
          <View
            style={[styles.progressFill, { width: `${result.score}%`, backgroundColor: bandColor }]}
          />
        </View>

        <View style={[styles.bandBadge, { backgroundColor: bandColor }]}>
          <Text style={styles.bandBadgeText}>{result.recommendation}</Text>
        </View>
      </View>

      <View style={styles.recommendationCard}>
        <Text style={styles.sectionTitle}>AI Explanation</Text>
        <Text style={styles.recommendationText}>{result.explanation}</Text>
      </View>

      <Text style={styles.sectionTitle}>Smart Insights</Text>
      <View style={styles.insightWrapper}>
        {result.insights.map(item => (
          <View key={item.title} style={styles.insightCard}>
            <Text style={styles.insightTitle}>{item.title}</Text>
            <Text style={styles.insightValue}>{item.value}</Text>
            <Text style={styles.insightSubtitle}>{item.subtitle}</Text>
          </View>
        ))}
      </View>

      <View style={styles.disclaimer}>
        <Ionicons name="information-circle-outline" size={16} color={themeColor.secondaryLightText} />
        <Text style={styles.disclaimerText}>
          AI insight is advisory only. Final sanction always requires human credit-officer approval.
        </Text>
      </View>
    </View>
  );
};

export default AIRiskReview;
