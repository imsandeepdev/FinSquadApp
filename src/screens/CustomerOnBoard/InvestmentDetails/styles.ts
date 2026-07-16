import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      padding: responsiveSize(20),
    },

    title: {
      fontSize: responsiveSize(20),
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginBottom: responsiveSize(15),
    },

    summaryCard: {
      backgroundColor: themeColor.appLightColor,

      borderRadius: responsiveSize(18),

      padding: responsiveSize(16),

      marginBottom: responsiveSize(20),

      borderWidth: 1,

      borderColor: themeColor.borderColor,
    },

    summaryTitle: {
      fontSize: responsiveSize(17),

      fontWeight: "700",

      color: themeColor.appTextColor,
    },

    summaryText: {
      marginTop: responsiveSize(8),

      fontSize: responsiveSize(14),

      color: themeColor.secondaryLightText,

      lineHeight: responsiveSize(22),
    },

    card: {
      backgroundColor: themeColor.cardColor,

      borderRadius: responsiveSize(18),

      padding: responsiveSize(16),

      shadowColor: themeColor.black,

      shadowOpacity: 0.05,

      shadowRadius: 10,

      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(4),
      },

      elevation: 3,
    },
  });

export default getStyles;
