import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { responsiveSize } from "../../../res";

const AIInsightCard = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.aiIcon}>
          <Ionicons
            name="sparkles"
            size={responsiveSize(24)}
            color={themeColor.white}
          />
        </View>

        <View style={styles.flexOne}>
          <Text style={styles.title}>
            AI Assistant
          </Text>

          <Text style={styles.subtitle}>
            Smart Daily Insights
          </Text>
        </View>

        <View style={styles.live}>
          <Text style={styles.liveText}>
            LIVE
          </Text>
        </View>

      </View>

      <View style={styles.item}>

        <Ionicons
          name="person"
          size={responsiveSize(20)}
          color={themeColor.infoColor}
        />

        <Text style={styles.text}>
          3 HNI clients require follow-up.
        </Text>

      </View>

      <View style={styles.item}>

        <Ionicons
          name="cash"
          size={responsiveSize(20)}
          color={themeColor.successColor}
        />

        <Text style={styles.text}>
          Potential revenue ₹1.8 Lakh.
        </Text>

      </View>

      <View style={styles.item}>

        <Ionicons
          name="trending-up"
          size={responsiveSize(20)}
          color="#F59E0B"
        />

        <Text style={styles.text}>
          SIP conversion probability 82%.
        </Text>

      </View>

      <View style={styles.progressSection}>

        <View style={styles.progressTop}>

          <Text style={styles.progressTitle}>
            Daily Productivity
          </Text>

          <Text style={styles.percent}>
            82%
          </Text>

        </View>

        <View style={styles.progressBackground}>

          <View style={styles.progressFill}/>

        </View>

      </View>

      <TouchableOpacity>

        <LinearGradient
          colors={[
            "#2563EB",
            "#3B82F6",
          ]}
          style={styles.button}
        >

          <Ionicons
            name="analytics"
            size={responsiveSize(18)}
            color={themeColor.white}
          />

          <Text style={styles.buttonText}>
            View AI Report
          </Text>

        </LinearGradient>

      </TouchableOpacity>

    </View>
  );
};

export default AIInsightCard;
