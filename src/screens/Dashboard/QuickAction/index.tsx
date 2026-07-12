import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { NAVIGATE_NAME } from "../../../utils/const";

const actions = [
  {
    icon: "person-add", // Customer onboarding
    title: "COB",
    subtitle: "Customer on Board",
    color: "#2563EB",
    navigate: NAVIGATE_NAME.COB_LIST_SCREEN
  },
  {
    icon: "document-text", // Loan proposal document
    title: "Loan Proposal",
    subtitle: "Create New Proposal",
    color: "#16A34A",
    navigate: NAVIGATE_NAME.COB_LIST_SCREEN
  },
  {
    icon: "flash", // Express / Quick loan
    title: "Express Loan",
    subtitle: "Quick Loan Disbursement",
    color: "#7C3AED",
    navigate: NAVIGATE_NAME.COB_LIST_SCREEN
  },
  {
    icon: "calendar-clear", // Meetings
    title: "Meetings",
    subtitle: "Schedule and Manage Meetings",
    color: "#F59E0B",
    navigate: NAVIGATE_NAME.COB_LIST_SCREEN
  },
  {
    icon: "cash", // Collections & Payments
    title: "Collection",
    subtitle: "Manage Collections and Payments",
    color: "#EC4899",
    navigate: NAVIGATE_NAME.COB_LIST_SCREEN
  },
  {
    icon: "bar-chart", // Reports & Analytics
    title: "Reports",
    subtitle: "View Reports and Analytics",
    color: "#0EA5E9",
    navigate: NAVIGATE_NAME.COB_LIST_SCREEN
  },
];

interface QuickActionType {
  onPress?: (item:any)=> void
}

const QuickActions = ({onPress}:QuickActionType) => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Quick Actions
      </Text>
      <View style={styles.grid}>
        {actions.map((item, index) => (
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
                size={26}
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
