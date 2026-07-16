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

const SmartTaskCard = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.left}>

          <View style={styles.iconBox}>
            <Ionicons
              name="sparkles"
              size={responsiveSize(20)}
              color={themeColor.white}
            />
          </View>
          <View>

            <Text style={styles.title}>
              AI Smart Tasks
            </Text>

            <Text style={styles.subtitle}>
              Priority for Today
            </Text>

          </View>

        </View>

        <View style={styles.priority}>

          <Text style={styles.priorityText}>
            HIGH
          </Text>

        </View>

      </View>

      {/* Meeting */}

      <View style={styles.taskCard}>

        <Ionicons
          name="people"
          size={responsiveSize(18)}
          color={themeColor.infoColor}
        />

        <View style={styles.content}>

          <Text style={styles.taskTitle}>
            HNI Client Meeting
          </Text>

          <Text style={styles.taskSub}>
            Rahul Sharma • 11:30 AM
          </Text>

        </View>

      </View>

      {/* SIP */}

      <View style={styles.taskCard}>

        <Ionicons
          name="cash"
          size={responsiveSize(18)}
          color={themeColor.successColor}
        />

        <View style={styles.content}>

          <Text style={styles.taskTitle}>
            SIP Follow-up
          </Text>

          <Text style={styles.taskSub}>
            3 Pending Customers
          </Text>

        </View>

      </View>

      {/* Progress */}

      <View style={styles.progressTop}>

        <Text style={styles.progressLabel}>
          Daily Target
        </Text>

        <Text style={styles.progressValue}>
          76%
        </Text>

      </View>

      <View style={styles.progressBg}>
        <View style={styles.progressFill}/>
      </View>

      {/* AI Recommendation */}

      <LinearGradient
        colors={[
          "#7C3AED",
          "#2563EB",
        ]}
        style={styles.aiCard}
      >

        <Ionicons
          name="bulb"
          size={responsiveSize(22)}
          color={themeColor.white}
        />

        <View style={styles.aiContent}>

          <Text style={styles.aiTitle}>
            AI Recommendation
          </Text>

          <Text style={styles.aiText}>
            Focus on SIP renewal clients today.
            Expected conversion rate 85%.
          </Text>

        </View>

      </LinearGradient>

      {/* Button */}

      <TouchableOpacity>

        <LinearGradient

          colors={[
            "#2563EB",
            "#1849D6",
          ]}

          style={styles.button}

        >

          <Text style={styles.buttonText}>
            View My Tasks
          </Text>

        </LinearGradient>

      </TouchableOpacity>

    </View>
  );
};

export default SmartTaskCard;
