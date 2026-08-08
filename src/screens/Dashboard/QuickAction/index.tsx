import React from "react";
import {
  View,
  Text,
  Pressable,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../utils/provider/themeProvider";
import { useRole, UserRole } from "../../../utils/provider/roleProvider";
import { getStyles } from "./styles";
import { NAVIGATE_NAME } from "../../../utils/const";
import { responsiveSize } from "../../../res";

const ALL_ROLES: UserRole[] = ["FIELD_OFFICER", "CREDIT_OFFICER", "BRANCH_MANAGER"];

const actions = [
  {
    icon: "person-add", // Customer onboarding
    title: "COB",
    subtitle: "Customer on Board",
    color: "#2563EB",
    navigate: NAVIGATE_NAME.COB_LIST_SCREEN,
    roles: ["FIELD_OFFICER"] as UserRole[],
  },
  {
    icon: "document-text", // Loan proposal document
    title: "Loan Proposal",
    subtitle: "Create New Proposal",
    color: "#16A34A",
    navigate: NAVIGATE_NAME.LOAN_ORIGINATION_SCREEN,
    roles: ["FIELD_OFFICER"] as UserRole[],
  },
  {
    icon: "flash", // Express / Quick loan
    title: "Express Loan",
    subtitle: "Quick Loan Disbursement",
    color: "#7C3AED",
    navigate: NAVIGATE_NAME.LOAN_TYPE_SELECTION_SCREEN,
    roles: ["FIELD_OFFICER"] as UserRole[],
  },
  {
    icon: "calendar-clear", // Meetings
    title: "Meetings",
    subtitle: "Schedule and Manage Meetings",
    color: "#F59E0B",
    // No dedicated Meetings screen yet — Dashboard shows a "coming soon"
    // notice for tiles without a navigate target instead of guessing one.
    navigate: undefined,
    roles: ALL_ROLES,
  },
  {
    icon: "cash", // Collections & Payments
    title: "Collection",
    subtitle: "Manage Collections and Payments",
    color: "#EC4899",
    navigate: NAVIGATE_NAME.REPAYMENT_SCREEN,
    roles: ["FIELD_OFFICER"] as UserRole[],
  },
  {
    icon: "bar-chart", // Reports & Analytics
    title: "Reports",
    subtitle: "View Reports and Analytics",
    color: "#0EA5E9",
    // "Report" is a bottom-tab route (not a root-stack screen) — Dashboard
    // lives inside the same tab navigator, so this switches tabs.
    navigate: "Report",
    roles: ALL_ROLES,
  },
  {
    icon: "shield-checkmark", // GRT / FI approval queue
    title: "Approval Queue",
    subtitle: "Review Pending GRT & FI Cases",
    color: "#0D9488",
    navigate: NAVIGATE_NAME.APPROVAL_QUEUE_SCREEN,
    roles: ["CREDIT_OFFICER"] as UserRole[],
  },
  {
    icon: "checkmark-done", // Loan approval / sanction
    title: "Loan Approval",
    subtitle: "Review Sanctioned Loan Offers",
    color: "#16A34A",
    navigate: NAVIGATE_NAME.LOAN_APPROVAL_SCREEN,
    roles: ["BRANCH_MANAGER"] as UserRole[],
  },
  {
    icon: "wallet", // Pre-disbursement setup
    title: "Pre-Disbursement",
    subtitle: "Verify & Confirm Disbursement",
    color: "#7C3AED",
    navigate: NAVIGATE_NAME.PRE_DISBURSEMENT_SCREEN,
    roles: ["BRANCH_MANAGER"] as UserRole[],
  },
  {
    icon: "sync", // Repayment / EMI
    title: "Repayment",
    subtitle: "Track & Pay EMI Installments",
    color: "#EA580C",
    navigate: NAVIGATE_NAME.REPAYMENT_SCREEN,
    roles: ["FIELD_OFFICER"] as UserRole[],
  },
];

interface QuickActionType {
  onPress?: (item:any)=> void
}

const QuickActions = ({onPress}:QuickActionType) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  const { role } = useRole();

  const visibleActions = actions.filter(
    (item) => !role || item.roles.includes(role)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Quick Actions
      </Text>
      <View style={styles.grid}>
        {visibleActions.map((item, index) => (
          <Pressable
             onPress={() => onPress?.(item)}
            key={index}
            style={({pressed})=>[
              styles.card,
              {opacity: pressed ? 0.5 : 1}
            ]}
          >

            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: item.color + "20",
                },
              ]}
            >
              <Ionicons
                name={item.icon}
                size={responsiveSize(26)}
                color={item.color}
              />
            </View>

            <Text style={styles.title}>
              {item.title}
            </Text>

          </Pressable>
        ))}

      </View>

    </View>
  );
};

export default QuickActions;
