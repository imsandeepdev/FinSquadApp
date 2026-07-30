import React, { useEffect } from "react";
import {
  View,
  Text,
} from "react-native";
import { AppTextInput, AppDropdown, AppDocumentUpload } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const OCCUPATION_TYPE_OPTIONS = [
  "Salaried",
  "Self-Employed / Business",
  "Daily Wage",
  "Agriculture",
  "Other",
];

const toNumber = (value: string) => {
  const n = parseFloat(value);
  return isNaN(n) ? 0 : n;
};

const IncomeAssessment: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const monthlyIncome = toNumber(data.iaMonthlyIncome);
  const otherIncome = toNumber(data.iaOtherIncomeSources);
  const monthlyExpenses = toNumber(data.iaMonthlyExpenses);
  const existingEmi = toNumber(data.existingEmi);

  const totalHouseholdIncome = monthlyIncome + otherIncome;
  const netDisposableIncome = totalHouseholdIncome - monthlyExpenses - existingEmi;
  const loanEligibility = netDisposableIncome > 0 ? netDisposableIncome * 10 : 0;

  // Keep the auto-calculated fields in sync with customerData so they are
  // available on the Review & Submit screen too.
  useEffect(() => {
    updateData("iaTotalHouseholdIncome", String(totalHouseholdIncome));
    updateData("iaNetDisposableIncome", String(netDisposableIncome));
    updateData("iaLoanEligibility", String(Math.max(0, loanEligibility)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthlyIncome, otherIncome, monthlyExpenses, existingEmi]);

  return (
    <View style={styles.container}>

      <View style={styles.headerRow}>
        <Text style={styles.title}>
          Income Assessment
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            Mandatory
          </Text>
        </View>
      </View>

      <View style={styles.card}>

        <Text style={styles.sectionLabel}>
          Household Income
        </Text>

        <AppDropdown
          title="Occupation Type"
          placeholder="Select occupation type"
          value={data.iaOccupationType}
          options={OCCUPATION_TYPE_OPTIONS}
          onSelect={(value) => updateData("iaOccupationType", value)}
        />

        <AppTextInput
          title="Business / Employer Name"
          placeholder="Enter business or employer name"
          value={data.iaEmployerName}
          onChangeText={(text) => updateData("iaEmployerName", text)}
        />

        <AppTextInput
          title="Monthly Income"
          placeholder="Enter monthly income"
          keyboardType="numeric"
          value={data.iaMonthlyIncome}
          onChangeText={(text) => updateData("iaMonthlyIncome", text)}
        />

        <AppTextInput
          title="Monthly Household Expenses"
          placeholder="Enter monthly expenses"
          keyboardType="numeric"
          value={data.iaMonthlyExpenses}
          onChangeText={(text) => updateData("iaMonthlyExpenses", text)}
        />

        <AppTextInput
          title="Other Income Sources"
          placeholder="Enter other monthly income, if any"
          keyboardType="numeric"
          value={data.iaOtherIncomeSources}
          onChangeText={(text) => updateData("iaOtherIncomeSources", text)}
        />

        <AppTextInput
          title="No. of Earning Members"
          placeholder="Enter number of earning members"
          keyboardType="numeric"
          maxLength={2}
          value={data.iaEarningMembers}
          onChangeText={(text) => updateData("iaEarningMembers", text)}
        />

        <View style={styles.summaryBox}>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Household Income</Text>
            <Text style={styles.summaryValue}>₹ {totalHouseholdIncome.toLocaleString("en-IN")}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Existing Loan EMI Outgo</Text>
            <Text style={styles.summaryValue}>₹ {existingEmi.toLocaleString("en-IN")}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Net Disposable Income</Text>
            <Text style={styles.summaryValue}>₹ {netDisposableIncome.toLocaleString("en-IN")}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Loan Eligibility (Auto-calc)</Text>
            <Text style={styles.summaryValue}>₹ {Math.max(0, loanEligibility).toLocaleString("en-IN")}</Text>
          </View>

          <Text style={styles.summaryNote}>
            Indicative estimate based on income and expenses entered above. Existing EMI is
            carried over from the Loan Requirement step.
          </Text>

        </View>

        <AppDocumentUpload
          title="Upload Income Proof"
          imageUri={data.iaIncomeProofUri}
          onImageSelected={(uri) => updateData("iaIncomeProofUri", uri)}
          onImageRemoved={() => updateData("iaIncomeProofUri", "")}
        />

        <AppDocumentUpload
          title="Upload Bank Statement"
          imageUri={data.iaBankStatementUri}
          onImageSelected={(uri) => updateData("iaBankStatementUri", uri)}
          onImageRemoved={() => updateData("iaBankStatementUri", "")}
        />

      </View>

    </View>
  );
};

export default IncomeAssessment;
