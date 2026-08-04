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

const GRTApproval: React.FC<Props> = ({
  data,
  updateData,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const { isBranchManager } = useRole();

  const status: string = data.grtApprovalStatus || "Pending";

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
          GRT Approval
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
            ? "Awaiting Branch Manager approval"
            : `GRT ${status.toLowerCase()} by Branch Manager`}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          GRT Summary
        </Text>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Group Name</Text>
          <Text style={styles.rowValue}>{data.grtGroupName || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Group Members</Text>
          <Text style={styles.rowValue}>{data.grtMemberCount || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>GRT Score</Text>
          <Text style={styles.rowValue}>{data.grtScore || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>GRT Result</Text>
          <Text style={styles.rowValue}>{data.grtResult || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Centre Name</Text>
          <Text style={styles.rowValue}>{data.cfCentreName || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowLabel}>Centre Code</Text>
          <Text style={styles.rowValue}>{data.cfCentreCode || "-"}</Text>
        </View>
      </View>

      {isBranchManager ? (
        <View style={styles.actionRow}>
          <AppButton
            title="Approve GRT"
            containerStyle={styles.approveButton}
            onPress={() => updateData("grtApprovalStatus", "Approved")}
          />

          <AppButton
            title="Reject"
            containerStyle={styles.rejectButton}
            titleTextStyle={styles.rejectButtonText}
            onPress={() => updateData("grtApprovalStatus", "Rejected")}
          />
        </View>
      ) : (
        <Text style={styles.roleNote}>
          Only a Branch Manager can approve or reject this GRT. You can continue
          — this will be reviewed separately.
        </Text>
      )}

    </View>
  );
};

export default GRTApproval;
