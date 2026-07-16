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

    statusCard: {
      backgroundColor: themeColor.appLightColor,

      borderRadius: responsiveSize(16),

      padding: responsiveSize(16),

      flexDirection: "row",

      alignItems: "center",

      marginBottom: responsiveSize(20),

      borderWidth: 1,

      borderColor: themeColor.borderColor,
    },

    statusTextWrap: {
      flex: 1,
    },

    statusCircle: {
      width: responsiveSize(14),
      height: responsiveSize(14),
      borderRadius: responsiveSize(7),
      backgroundColor: themeColor.infoColor,
      marginRight: responsiveSize(12),
    },

    statusTitle: {
      fontSize: responsiveSize(16),
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    statusSub: {
      marginTop: responsiveSize(4),
      fontSize: responsiveSize(13),
      color: themeColor.secondaryLightText,
    },

    pending: {
      color: themeColor.infoColor,
      fontWeight: "700",
      fontSize: responsiveSize(14),
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
