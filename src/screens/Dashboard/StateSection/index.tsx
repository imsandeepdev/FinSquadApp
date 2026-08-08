import React from "react";

import {
  View,
  Text,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { responsiveSize } from "../../../res";

const data = [
  {
    icon: "time-outline",          // Due today
    title: "Today's Due",
    value: "128",
    color: "#2563EB",
  },
  {
    icon: "wallet-outline",        // Money collected today
    title: "Today's Collection",
    value: "₹8.5L",
    color: "#16A34A",
  },
  {
    icon: "document-text-outline", // Total due accounts/cases
    title: "Total Today's Due",
    value: "12",
    color: "#F59E0B",
  },
  {
    icon: "cash-outline",          // Total amount collected
    title: "Total Today's Collection",
    value: "82%",
    color: "#7C3AED",
  },
];

const StatsSection = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (

    <View style={styles.container}>
      <Text style={styles.heading}>
        {'Today\'s Performance'}
      </Text>

      <View style={styles.row}>
        {
          data.map((item, index) => {
            return (
              <View
                key={index}
                style={styles.card}
              >
                <View style={styles.cardInner}>
                  <View
                    style={[
                      styles.iconBox,
                      {
                        backgroundColor: item.color + "20"
                      }
                    ]}
                  >
                    <Ionicons
                      name={item.icon}
                      size={responsiveSize(24)}
                      color={item.color}
                    />
                  </View>

                  <View style={styles.infoWrap}>
                    <Text style={styles.value}>
                      {item.value}
                    </Text>
                    <Text style={styles.title} numberOfLines={2}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default StatsSection;
