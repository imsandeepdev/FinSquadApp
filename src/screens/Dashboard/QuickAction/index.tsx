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

const actions = [
  {
    icon: "qr-code",
    title: "Scan QR",
    color: "#2563EB",
  },
  {
    icon: "people",
    title: "Clients",
    color: "#16A34A",
  },
  {
    icon: "wallet",
    title: "Portfolio",
    color: "#7C3AED",
  },
  {
    icon: "calendar",
    title: "Meetings",
    color: "#F59E0B",
  },
  {
    icon: "sparkles",
    title: "AI Coach",
    color: "#EC4899",
  },
  {
    icon: "stats-chart",
    title: "Reports",
    color: "#0EA5E9",
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
            onPress={onPress}
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
