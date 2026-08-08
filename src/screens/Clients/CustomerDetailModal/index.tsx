import React from "react";
import { Modal, View, Text, Pressable, Alert, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { Customer } from "../../COBList/types";
import { Centre } from "../../CentreManagement/types";
import Avatar from "../../COBList/Component/Avatar";
import StatusBadge from "../../COBList/Component/StatusBadge";

export interface CustomerDetailModalProps {
  visible: boolean;
  onClose: () => void;
  customer: Customer | null;
  centre?: Centre;
}

const CustomerDetailModal: React.FC<CustomerDetailModalProps> = ({
  visible,
  onClose,
  customer,
  centre,
}) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  const isVisible = visible && !!customer;

  const handleCall = () => {
    if (!customer) return;
    Linking.openURL(`tel:${customer.mobile}`);
  };

  const handleMockAction = (label: string) => {
    Alert.alert(label, "This will be available soon.");
  };

  const healthColor = (score: number) =>
    score >= 80 ? themeColor.successColor : score >= 60 ? themeColor.infoColor : themeColor.errorColor;

  return (
    <Modal visible={isVisible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} />

      <View style={styles.sheet}>
        <View style={styles.grabber} />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Client Details</Text>
          <Pressable onPress={onClose} hitSlop={10}>
            <Ionicons name="close" size={22} color={themeColor.primaryText} />
          </Pressable>
        </View>

        {!!customer && (
          <>
            <View style={styles.profileRow}>
              <Avatar name={customer.name} />

              <View style={styles.profileInfo}>
                <Text style={styles.profileName} numberOfLines={1}>
                  {customer.name}
                </Text>
                <Text style={styles.profileCode}>
                  {customer.code}
                </Text>
              </View>

              <StatusBadge status={customer.status} />
            </View>

            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Mobile</Text>
                <Text style={styles.infoValue}>{customer.mobile}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Village</Text>
                <Text style={styles.infoValue}>{customer.village}</Text>
              </View>
              {customer.monthlyIncome != null && (
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Monthly Income</Text>
                  <Text style={styles.infoValue}>₹{customer.monthlyIncome.toLocaleString("en-IN")}</Text>
                </View>
              )}
              {customer.existingMonthlyEMI != null && (
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Existing EMI</Text>
                  <Text style={styles.infoValue}>₹{customer.existingMonthlyEMI.toLocaleString("en-IN")}</Text>
                </View>
              )}
            </View>

            {!!centre && (
              <>
                <Text style={styles.sectionTitle}>Linked Centre</Text>
                <View style={styles.centreMiniCard}>
                  <Text style={styles.centreMiniName}>{centre.name}</Text>

                  <View style={styles.centreMiniRow}>
                    <Ionicons name="calendar-outline" size={13} color={themeColor.primaryText} />
                    <Text style={styles.centreMiniText}>
                      Meets every {centre.meetingDay} · {centre.memberCount}/{centre.targetMemberCount} members
                    </Text>
                  </View>

                  <View style={styles.centreMiniRow}>
                    <Ionicons name="pulse-outline" size={13} color={healthColor(centre.repaymentHealthScore)} />
                    <Text style={[styles.centreMiniText, { color: healthColor(centre.repaymentHealthScore) }]}>
                      Repayment health: {centre.repaymentHealthScore}/100
                    </Text>
                  </View>
                </View>
              </>
            )}

            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.actionsRow}>
              <Pressable
                style={[styles.actionButton, styles.actionButtonPrimary]}
                onPress={handleCall}
              >
                <Ionicons name="call-outline" size={16} color={themeColor.appColor} />
                <Text style={[styles.actionButtonText, styles.actionButtonTextPrimary]}>Call</Text>
              </Pressable>

              <Pressable
                style={styles.actionButton}
                onPress={() => handleMockAction("Record Collection")}
              >
                <Ionicons name="cash-outline" size={16} color={themeColor.primaryText} />
                <Text style={styles.actionButtonText}>Record Collection</Text>
              </Pressable>

              <Pressable
                style={styles.actionButton}
                onPress={() => handleMockAction("Send Reminder")}
              >
                <Ionicons name="notifications-outline" size={16} color={themeColor.primaryText} />
                <Text style={styles.actionButtonText}>Send Reminder</Text>
              </Pressable>

              <Pressable
                style={styles.actionButton}
                onPress={() => handleMockAction("Schedule Visit")}
              >
                <Ionicons name="calendar-outline" size={16} color={themeColor.primaryText} />
                <Text style={styles.actionButtonText}>Schedule Visit</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </Modal>
  );
};

export default CustomerDetailModal;
