import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../res";
import { ThemeColorType } from "../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    scrollContent: {
      paddingHorizontal: responsiveSize(15),
      paddingTop: responsiveSize(14),
      paddingBottom: responsiveSize(40),
    },

    headerRow: {
      marginBottom: responsiveSize(14),
    },

    screenTitle: {
      fontSize: appSize.font_Large,
      fontWeight: "800",
      color: themeColor.appTextColor,
    },

    screenSubtitle: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
      marginTop: responsiveSize(3),
    },

    periodRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: responsiveSize(16),
    },

    periodChip: {
      paddingHorizontal: responsiveSize(14),
      paddingVertical: responsiveSize(7),
      borderRadius: responsiveSize(20),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      backgroundColor: themeColor.cardColor,
      marginRight: responsiveSize(8),
      marginBottom: responsiveSize(8),
    },

    periodChipActive: {
      backgroundColor: themeColor.appColor,
      borderColor: themeColor.appColor,
    },

    periodChipText: {
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.appTextColor,
    },

    periodChipTextActive: {
      color: themeColor.white,
    },

    kpiGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: responsiveSize(6),
    },

    kpiCard: {
      width: "48.5%",
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(14),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(12),
      marginBottom: responsiveSize(10),
    },

    kpiIconWrap: {
      width: responsiveSize(32),
      height: responsiveSize(32),
      borderRadius: responsiveSize(16),
      alignItems: "center",
      justifyContent: "center",
      marginBottom: responsiveSize(8),
    },

    kpiValue: {
      fontSize: appSize.font_Medium,
      fontWeight: "800",
      color: themeColor.appTextColor,
    },

    kpiLabel: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(16),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(15),
      marginBottom: responsiveSize(16),
    },

    cardTitleRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: responsiveSize(12),
    },

    cardTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    cardTitleSub: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    trendBadge: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: responsiveSize(8),
      paddingVertical: responsiveSize(4),
      borderRadius: responsiveSize(20),
    },

    trendBadgeText: {
      fontSize: responsiveSize(11),
      fontWeight: "700",
      marginLeft: responsiveSize(3),
    },

    chartWrap: {
      alignItems: "flex-start",
      paddingTop: responsiveSize(18),
    },

    chartTopLabel: {
      fontSize: responsiveSize(9.5),
      fontWeight: "700",
      color: themeColor.placeHolder,
      marginBottom: responsiveSize(4),
    },

    chartAxisLabel: {
      fontSize: responsiveSize(10.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(4),
    },

    categoryRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: responsiveSize(11),
    },

    categoryDivider: {
      height: 1,
      backgroundColor: themeColor.borderColor,
    },

    categoryIconWrap: {
      width: responsiveSize(36),
      height: responsiveSize(36),
      borderRadius: responsiveSize(10),
      backgroundColor: themeColor.secLightAppColor,
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    categoryTextWrap: {
      flex: 1,
      minWidth: 0,
      marginRight: responsiveSize(8),
    },

    categoryTitle: {
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    categorySubtitle: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    downloadAction: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: responsiveSize(10),
      paddingVertical: responsiveSize(6),
      borderRadius: responsiveSize(20),
      borderWidth: 1,
      borderColor: themeColor.appColor,
    },

    downloadActionText: {
      fontSize: responsiveSize(11),
      fontWeight: "700",
      color: themeColor.appColor,
      marginLeft: responsiveSize(4),
    },
  });

export default getStyles;
