import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      paddingVertical: responsiveSize(10),
      paddingHorizontal: responsiveSize(18),
    },

    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: responsiveSize(12),
    },

    title: {
      fontSize: appSize.font_Large,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    badge: {
      backgroundColor: themeColor.secLightAppColor,
      paddingHorizontal: responsiveSize(12),
      paddingVertical: responsiveSize(5),
      borderRadius: responsiveSize(20),
    },

    badgeText: {
      color: themeColor.successColor,
      fontWeight: "600",
      fontSize: responsiveSize(12),
    },

    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      paddingVertical: responsiveSize(10),
      paddingHorizontal: responsiveSize(15),

      shadowColor: themeColor.black,
      shadowOpacity: 0.05,
      shadowRadius: 10,
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(4),
      },

      elevation: 3,
      borderWidth: 1,
      borderColor: themeColor.borderColor,
    },

    sectionLabel: {
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.placeHolder,
      marginBottom: responsiveSize(8),
      marginTop: responsiveSize(4),
    },

    summaryBox: {
      backgroundColor: themeColor.secLightAppColor,
      borderRadius: responsiveSize(12),
      padding: responsiveSize(12),
      marginBottom: responsiveSize(14),
    },

    summaryRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: responsiveSize(4),
    },

    summaryLabel: {
      fontSize: appSize.font_Small,
      color: themeColor.appTextColor,
    },

    summaryValue: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.successColor,
    },

    summaryNote: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(4),
    },
  });

export default getStyles;
