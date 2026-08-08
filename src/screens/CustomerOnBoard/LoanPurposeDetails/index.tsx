import React from "react";
import {
  View,
  Text,
} from "react-native";
import { AppTextInput, AppDropdown } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";

interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const LOAN_PURPOSE_OPTIONS = [
  "Business Expansion",
  "Agriculture",
  "Working Capital",
  "Education",
  "Medical Emergency",
  "Home Improvement",
  "Debt Consolidation",
  "Other",
];

const REPAYMENT_FREQUENCY_OPTIONS = ["Weekly", "Bi-Weekly", "Monthly"];

const YES_NO_OPTIONS = ["Yes", "No"];

const LoanPurposeDetails: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Loan Requirement
      </Text>

      {/* Summary */}

      <View style={styles.summaryCard}>

        <Text style={styles.summaryTitle}>
          Loan Purpose & Repayment Capacity
        </Text>

        <Text style={styles.summaryText}>
          Helps assess the right loan amount and
          repayment schedule for this customer.
        </Text>

      </View>

      <View style={styles.card}>

        <AppDropdown
          title="Loan Purpose"
          placeholder="Select loan purpose"
          value={data.loanPurpose}
          options={LOAN_PURPOSE_OPTIONS}
          onSelect={(value) => updateData("loanPurpose", value)}
        />

        <AppTextInput
          title="Indicative Loan Amount Required"
          placeholder="₹ Enter amount"
          keyboardType="numeric"
          value={data.loanAmountRequired}
          onChangeText={(text) =>
            updateData("loanAmountRequired", text)
          }
        />

        <AppDropdown
          title="Preferred Repayment Frequency"
          placeholder="Select frequency"
          value={data.repaymentFrequency}
          options={REPAYMENT_FREQUENCY_OPTIONS}
          onSelect={(value) => updateData("repaymentFrequency", value)}
        />

        <AppDropdown
          title="Existing Loans / Liabilities"
          placeholder="Select"
          value={data.existingLoans}
          options={YES_NO_OPTIONS}
          onSelect={(value) => updateData("existingLoans", value)}
        />

        <AppTextInput
          title="Existing Monthly EMI"
          placeholder="₹ Enter 0 if none"
          keyboardType="numeric"
          value={data.existingEmi}
          onChangeText={(text) =>
            updateData("existingEmi", text)
          }
        />

        <AppTextInput
          title="Monthly Household Expenses"
          placeholder="₹ Enter amount"
          keyboardType="numeric"
          value={data.householdExpenses}
          onChangeText={(text) =>
            updateData("householdExpenses", text)
          }
        />

        <AppTextInput
          title="Number of Dependents"
          placeholder="Enter number"
          keyboardType="numeric"
          value={data.dependents}
          onChangeText={(text) =>
            updateData("dependents", text)
          }
        />

        <AppTextInput
          title="Other Income Source (Optional)"
          placeholder="e.g. Spouse income, rental income"
          value={data.otherIncomeSource}
          onChangeText={(text) =>
            updateData("otherIncomeSource", text)
          }
        />

      </View>

    </View>
  );
};

export default LoanPurposeDetails;
