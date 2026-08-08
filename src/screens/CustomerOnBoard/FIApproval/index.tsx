import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppButton } from "../../../components";
import { useTheme } from "../../../utils/provider/themeProvider";
import { useRole } from "../../../utils/provider/roleProvider";
import { getStyles } from "./styles";

interface Props {
  data: any;
  updateData: (key: string, value: string) => void;
}

const FIApproval: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const { isCreditOfficer } = useRole();

  const status: string = data.fiApprovalStatus || "Pending";

  const statusColor =
    status === "Approved"
      ? themeColor.successColor
      : status === "Rejected"
      ? themeColor.errorColor
      : themeColor.infoColor;

  const statusIcon =
    status === "Approved"
      ? "checkmark-circle"
      : status === "Rejected"
      ? "close-circle"
      : "time-outline";

  return (
    <View style={styles.container}>

      <View style={styles.headerRow}>
        <Text style={styles.title}>
          FI Approval
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            Mandatory
          </Text>
        </View>
      </View>

      <View style={[styles.statusBanner, { backgroundColor: statusColor + "20" }]}>
        <Ionicons name={statusIcon} size={20} color={statusColor} />
        <Text style={[styles.statusBannerText, { color: statusColor }]}>
          {status === "Pending"
            ? "Awaiting Credit Officer approval"
            : `FI verification ${status.toLowerCase()} by Credit Officer`}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          FI Verification Summary
        </Text>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Applicant Name</Text>
          <Text style={styles.rowValue}>{data.hvApplicantName || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Verified By</Text>
          <Text style={styles.rowValue}>{data.hvVerifiedBy || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>House Type</Text>
          <Text style={styles.rowValue}>{data.hvHouseType || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Ownership Proof</Text>
          <Text style={styles.rowValue}>{data.hvOwnershipProofType || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Address Matches</Text>
          <Text style={styles.rowValue}>{data.hvAddressMatches || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>GPS Captured</Text>
          <Text style={styles.rowValue}>{data.hvGpsCaptured || "-"}</Text>
        </View>
      </View>

      {isCreditOfficer ? (
        <View style={styles.actionRow}>
          <AppButton
            title="Approve FI"
            containerStyle={styles.approveButton}
            onPress={() => updateData("fiApprovalStatus", "Approved")}
          />

          <AppButton
            title="Reject"
            containerStyle={styles.rejectButton}
            titleTextStyle={styles.rejectButtonText}
            onPress={() => updateData("fiApprovalStatus", "Rejected")}
          />
        </View>
      ) : (
        <Text style={styles.roleNote}>
          Only a Credit Officer can approve or reject this FI verification. You
          can continue — this will be reviewed separately.
        </Text>
      )}

    </View>
  );
};

export default FIApproval;
