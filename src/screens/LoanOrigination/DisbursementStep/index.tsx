import React, { useMemo, useState } from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { AppButton } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import type { LoanOriginationData } from "..";
import { POLICY_ANNUAL_RATE, computeMonthlyEMI, formatCurrency } from "../utils";

interface Props {
  data: LoanOriginationData;
  onDone: () => void;
}

const BAND_LABEL: Record<string, string> = {
  LOW: "Low Risk",
  MEDIUM: "Medium Risk",
  HIGH: "High Risk",
};

const DisbursementStep: React.FC<Props> = ({ data, onDone }) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const [status, setStatus] = useState<"idle" | "processing" | "done">("idle");

  const requestedAmount = Number(data.requestedAmount) || 0;
  const tenureMonths = Number(data.tenureMonths) || 12;
  const emi = useMemo(
    () => computeMonthlyEMI(requestedAmount, POLICY_ANNUAL_RATE, tenureMonths),
    [requestedAmount, tenureMonths],
  );

  const disbursementId = useMemo(
    () => `DSB${Math.floor(100000 + Math.random() * 900000)}`,
    [],
  );

  const bandColor =
    data.aiRiskBand === "LOW"
      ? themeColor.successColor
      : data.aiRiskBand === "MEDIUM"
      ? themeColor.infoColor
      : themeColor.errorColor;

  const handleDisburse = () => {
    setStatus("processing");
    setTimeout(() => setStatus("done"), 1400);
  };

  if (status === "done") {
    return (
      <View style={styles.container}>
        <View style={styles.successIconWrap}>
          <Ionicons name="checkmark-circle" size={64} color={themeColor.successColor} />
        </View>

        <Text style={styles.successTitle}>Loan Disbursed</Text>
        <Text style={styles.successSubtitle}>
          {formatCurrency(requestedAmount)} has been disbursed to {data.customerName}.
        </Text>

        <View style={styles.receiptCard}>
          <ReceiptRow label="Disbursement ID" value={disbursementId} styles={styles} />
          <ReceiptRow label="Customer" value={data.customerName} styles={styles} />
          <ReceiptRow label="Centre" value={data.centreName} styles={styles} />
          <ReceiptRow label="Amount" value={formatCurrency(requestedAmount)} styles={styles} />
          <ReceiptRow label="Tenure" value={`${tenureMonths} months`} styles={styles} />
          <ReceiptRow label="Monthly EMI" value={formatCurrency(emi)} styles={styles} />
          <ReceiptRow label="Date" value={new Date().toLocaleDateString("en-IN")} styles={styles} />
        </View>

        <AppButton title="Done" onPress={onDone} containerStyle={styles.doneButton} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>DISBURSEMENT SUMMARY</Text>

      <View style={styles.summaryCard}>
        <ReceiptRow label="Customer" value={data.customerName} styles={styles} />
        <ReceiptRow label="Centre" value={data.centreName} styles={styles} />
        <ReceiptRow label="Purpose" value={data.purpose || "—"} styles={styles} />
        <ReceiptRow label="Requested Amount" value={formatCurrency(requestedAmount)} styles={styles} />
        <ReceiptRow label="Tenure" value={`${tenureMonths} months`} styles={styles} />
        <ReceiptRow label="Monthly EMI" value={formatCurrency(emi)} styles={styles} />

        <View style={styles.divider} />

        <View style={styles.riskRow}>
          <Text style={styles.summaryKey}>AI Risk Assessment</Text>
          <View style={[styles.riskChip, { backgroundColor: bandColor }]}>
            <Text style={styles.riskChipText}>
              {BAND_LABEL[data.aiRiskBand] || "Not assessed"}
            </Text>
          </View>
        </View>
      </View>

      {data.aiRiskBand === "HIGH" && (
        <View style={styles.warningBanner}>
          <Ionicons name="warning" size={18} color={themeColor.errorColor} />
          <Text style={styles.warningText}>
            AI flagged this proposal as high risk. Disbursing proceeds under manual
            credit-officer override.
          </Text>
        </View>
      )}

      <AppButton
        title={status === "processing" ? "Processing…" : "Disburse Now"}
        onPress={handleDisburse}
        disabled={status === "processing"}
        containerStyle={[styles.disburseButton, { opacity: status === "processing" ? 0.6 : 1 }]}
      />
    </View>
  );
};

const ReceiptRow = ({
  label,
  value,
  styles,
}: {
  label: string;
  value: string;
  styles: ReturnType<typeof getStyles>;
}) => (
  <View style={styles.summaryRow}>
    <Text style={styles.summaryKey}>{label}</Text>
    <Text style={styles.summaryValue}>{value}</Text>
  </View>
);

export default DisbursementStep;
