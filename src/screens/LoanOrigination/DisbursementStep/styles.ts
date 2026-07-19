import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: responsiveSize(16),
      alignItems: "stretch",
    },

    sectionTitle: {
      fontSize: responsiveSize(13),
      fontWeight: "700",
      letterSpacing: 1,
      color: themeColor.secondaryText,
      marginTop: responsiveSize(10),
      marginBottom: responsiveSize(14),
    },

    summaryCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      padding: responsiveSize(18),
      marginBottom: responsiveSize(16),
      borderWidth: 0.5,
      borderColor: themeColor.borderColor,
    },

    summaryRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: responsiveSize(6),
    },

    summaryKey: {
      color: themeColor.primaryLightText,
      fontSize: responsiveSize(13),
    },

    summaryValue: {
      fontWeight: "700",
      fontSize: responsiveSize(13),
      color: themeColor.primaryText,
    },

    divider: {
      height: 0.5,
      backgroundColor: themeColor.borderColor,
      marginVertical: responsiveSize(10),
    },

    riskRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    riskChip: {
      paddingHorizontal: responsiveSize(12),
      paddingVertical: responsiveSize(6),
      borderRadius: responsiveSize(16),
    },

    riskChipText: {
      color: themeColor.white,
      fontWeight: "700",
      fontSize: responsiveSize(12),
    },

    warningBanner: {
      flexDirection: "row",
      alignItems: "flex-start",
      backgroundColor: themeColor.transparent_SecAppColor,
      borderRadius: responsiveSize(14),
      padding: responsiveSize(14),
      marginBottom: responsiveSize(16),
    },

    warningText: {
      flex: 1,
      marginLeft: responsiveSize(8),
      color: themeColor.errorColor,
      fontSize: responsiveSize(12),
      lineHeight: responsiveSize(17),
    },

    disburseButton: {
      marginHorizontal: 0,
      marginTop: responsiveSize(10),
    },

    successIconWrap: {
      alignItems: "center",
      marginTop: responsiveSize(30),
      marginBottom: responsiveSize(14),
    },

    successTitle: {
      textAlign: "center",
      fontSize: responsiveSize(20),
      fontWeight: "800",
      color: themeColor.primaryText,
    },

    successSubtitle: {
      textAlign: "center",
      fontSize: responsiveSize(13),
      color: themeColor.secondaryLightText,
      marginTop: responsiveSize(6),
      marginBottom: responsiveSize(20),
    },

    receiptCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      padding: responsiveSize(18),
      marginBottom: responsiveSize(20),
      borderWidth: 0.5,
      borderColor: themeColor.borderColor,
    },

    doneButton: {
      marginHorizontal: 0,
    },
  });

export default getStyles;
