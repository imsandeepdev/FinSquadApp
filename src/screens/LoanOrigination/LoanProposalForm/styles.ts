import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../../res/colors/theme.types";
import { responsiveSize } from "../../../res";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: responsiveSize(16),
    },

    sectionTitle: {
      fontSize: responsiveSize(13),
      fontWeight: "700",
      letterSpacing: 1,
      color: themeColor.secondaryText,
      marginTop: responsiveSize(10),
    },

    sectionSubtitle: {
      fontSize: responsiveSize(13),
      color: themeColor.primaryLightText,
      marginTop: responsiveSize(4),
      marginBottom: responsiveSize(14),
    },

    label: {
      fontSize: responsiveSize(13),
      fontWeight: "600",
      color: themeColor.primaryText,
      marginTop: responsiveSize(12),
      marginBottom: responsiveSize(8),
    },

    chipRow: {
      flexDirection: "row",
    },

    chipRowWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
    },

    chip: {
      paddingVertical: responsiveSize(8),
      paddingHorizontal: responsiveSize(16),
      borderRadius: responsiveSize(20),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      backgroundColor: themeColor.cardColor,
      marginRight: responsiveSize(10),
    },

    purposeChip: {
      paddingVertical: responsiveSize(8),
      paddingHorizontal: responsiveSize(14),
      borderRadius: responsiveSize(20),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      backgroundColor: themeColor.cardColor,
      marginRight: responsiveSize(8),
      marginBottom: responsiveSize(8),
    },

    chipActive: {
      backgroundColor: themeColor.appColor,
      borderColor: themeColor.appColor,
    },

    chipText: {
      fontSize: responsiveSize(13),
      color: themeColor.primaryText,
      fontWeight: "600",
    },

    chipTextActive: {
      color: themeColor.white,
    },

    summaryCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      padding: responsiveSize(18),
      marginTop: responsiveSize(18),
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
      fontSize: responsiveSize(14),
    },

    summaryValue: {
      fontWeight: "700",
      fontSize: responsiveSize(14),
      color: themeColor.primaryText,
    },

    warningBanner: {
      flexDirection: "row",
      alignItems: "flex-start",
      backgroundColor: themeColor.transparent_SecAppColor,
      borderRadius: responsiveSize(14),
      padding: responsiveSize(14),
      marginTop: responsiveSize(14),
      marginBottom: responsiveSize(20),
    },

    warningText: {
      flex: 1,
      marginLeft: responsiveSize(8),
      color: themeColor.errorColor,
      fontSize: responsiveSize(12),
      lineHeight: responsiveSize(17),
    },
  });

export default getStyles;
