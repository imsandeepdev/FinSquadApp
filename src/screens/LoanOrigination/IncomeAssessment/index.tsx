import React, { useMemo } from "react";
import { View, Text } from "react-native";

import { AppTextInput } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import type { LoanOriginationData } from "..";
import {
  MAX_FOIR,
  POLICY_ANNUAL_RATE,
  computeEligiblePrincipal,
  computeFOIR,
  formatCurrency,
} from "../utils";

interface Props {
  data: LoanOriginationData;
  updateData: (key: string, value: string) => void;
}

const IncomeAssessment: React.FC<Props> = ({ data, updateData }) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const income = Number(data.monthlyIncome) || 0;
  const existingEMI = Number(data.existingMonthlyEMI) || 0;
  const expense = Number(data.monthlyExpense) || 0;

  const currentFOIR = useMemo(
    () => computeFOIR(existingEMI, 0, income),
    [existingEMI, income],
  );

  const maxEMIHeadroom = Math.max(0, income * MAX_FOIR - existingEMI);

  const eligibleAmount = useMemo(
    () => computeEligiblePrincipal(maxEMIHeadroom, POLICY_ANNUAL_RATE, 12),
    [maxEMIHeadroom],
  );

  const disposableIncome = Math.max(0, income - existingEMI - expense);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>HOUSEHOLD INCOME</Text>
      <Text style={styles.sectionSubtitle}>
        {data.customerName} • {data.centreName}
      </Text>

      <AppTextInput
        title="Monthly Household Income (₹)"
        placeholder="Enter monthly income"
        keyboardType="numeric"
        value={data.monthlyIncome}
        onChangeText={text => updateData("monthlyIncome", text.replace(/[^0-9]/g, ""))}
      />

      <AppTextInput
        title="Existing Monthly EMI / Other Lenders (₹)"
        placeholder="0 if none"
        keyboardType="numeric"
        value={data.existingMonthlyEMI}
        onChangeText={text => updateData("existingMonthlyEMI", text.replace(/[^0-9]/g, ""))}
      />

      <AppTextInput
        title="Monthly Household Expense (₹)"
        placeholder="Food, rent, utilities etc."
        keyboardType="numeric"
        value={data.monthlyExpense}
        onChangeText={text => updateData("monthlyExpense", text.replace(/[^0-9]/g, ""))}
      />

      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Assessment Summary</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryKey}>Current FOIR</Text>
          <Text
            style={[
              styles.summaryValue,
              { color: currentFOIR > MAX_FOIR ? themeColor.errorColor : themeColor.successColor },
            ]}
          >
            {Math.round(currentFOIR * 100)}%
          </Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryKey}>Disposable Income / month</Text>
          <Text style={styles.summaryValue}>{formatCurrency(disposableIncome)}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.summaryRow}>
          <Text style={styles.summaryKeyBold}>Eligible Loan Amount</Text>
          <Text style={styles.eligibleValue}>{formatCurrency(eligibleAmount)}</Text>
        </View>
        <Text style={styles.eligibleNote}>
          Based on {MAX_FOIR * 100}% max FOIR policy, {POLICY_ANNUAL_RATE}% p.a., 12-month baseline tenure.
        </Text>
      </View>
    </View>
  );
};

export default IncomeAssessment;
