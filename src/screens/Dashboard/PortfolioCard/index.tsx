import React from "react";
import {
  View,
  Text,
} from "react-native";

import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "../../../utils/provider/themeProvider";
import { getStyles } from "./styles";
import { responsiveSize } from "../../../res";

const PortfolioCard = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);

  return (
    <LinearGradient
      colors={[
        "#ffffff",
        "#F8FBFF",
      ]}
      style={styles.container}
    >
      <View style={styles.topRow}>
        <Text style={styles.title}>
          Portfolio Managed
        </Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>
            +8.2%
          </Text>
        </View>
      </View>

      <Text style={styles.amount}>
        ₹12.4 Cr
      </Text>

      <Text style={styles.subtitle}>
        Total Assets Under Management
      </Text>

      {/* Fake Graph */}

      <View style={styles.graphContainer}>

        <View style={[styles.bar,{height:responsiveSize(25)}]}/>

        <View style={[styles.bar,{height:responsiveSize(45)}]}/>

        <View style={[styles.bar,{height:responsiveSize(35)}]}/>

        <View style={[styles.bar,{height:responsiveSize(60)}]}/>

        <View style={[styles.bar,{height:responsiveSize(55)}]}/>

        <View style={[styles.bar,{height:responsiveSize(80)}]}/>

        <View style={[styles.bar,{height:responsiveSize(70)}]}/>

      </View>

      <View style={styles.bottomRow}>

        <View>

          <Text style={styles.label}>
            Today's Growth
          </Text>

          <Text style={styles.green}>
            +₹2.8 Lakh
          </Text>

        </View>

        <View>

          <Text style={styles.label}>
            Target
          </Text>

          <Text style={styles.blue}>
            82%
          </Text>

        </View>

      </View>

    </LinearGradient>
  );
};

export default PortfolioCard;
