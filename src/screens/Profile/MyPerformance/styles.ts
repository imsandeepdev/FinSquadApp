import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

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

    heroCard: {
      borderRadius: responsiveSize(18),
      padding: responsiveSize(16),
      marginBottom: responsiveSize(16),
      overflow: "hidden",
    },

    heroTopRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },

    heroTierWrap: {
      flex: 1,
      flexShrink: 1,
      minWidth: 0,
      marginRight: responsiveSize(10),
    },

    heroTierLabel: {
      fontSize: appSize.font_Large,
      fontWeight: "800",
      color: themeColor.white,
      flexShrink: 1,
    },

    heroTierSub: {
      fontSize: appSize.font_Small,
      color: "#D6E4FF",
      marginTop: responsiveSize(3),
      flexShrink: 1,
    },

    heroLevelChip: {
      flexShrink: 0,
      backgroundColor: "rgba(255,255,255,.18)",
      paddingHorizontal: responsiveSize(10),
      paddingVertical: responsiveSize(5),
      borderRadius: responsiveSize(20),
    },

    heroLevelChipText: {
      color: themeColor.white,
      fontWeight: "700",
      fontSize: responsiveSize(11),
    },

    progressLabelRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: responsiveSize(18),
      marginBottom: responsiveSize(6),
    },

    progressLabelText: {
      color: "#D6E4FF",
      fontSize: responsiveSize(11),
      flexShrink: 1,
    },

    progressLabelTextRight: {
      flex: 1,
      textAlign: "right",
      marginLeft: responsiveSize(8),
    },

    progressTrack: {
      height: responsiveSize(8),
      borderRadius: responsiveSize(4),
      backgroundColor: "rgba(255,255,255,.2)",
      overflow: "hidden",
    },

    progressFill: {
      height: "100%",
      borderRadius: responsiveSize(4),
      backgroundColor: themeColor.white,
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

    kpiTrendRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(6),
    },

    kpiTrendText: {
      fontSize: responsiveSize(10.5),
      fontWeight: "600",
      marginLeft: responsiveSize(3),
    },

    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(16),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(15),
      marginBottom: responsiveSize(16),
    },

    cardTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginBottom: responsiveSize(2),
    },

    cardTitleSub: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginBottom: responsiveSize(8),
    },

    chartWrap: {
      width: "100%",
      paddingTop: responsiveSize(14),
    },

    chartAxisLabel: {
      fontSize: responsiveSize(10.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(4),
    },

    tooltip: {
      backgroundColor: themeColor.black,
      borderRadius: responsiveSize(8),
      paddingHorizontal: responsiveSize(8),
      paddingVertical: responsiveSize(6),
    },

    tooltipText: {
      color: themeColor.white,
      fontWeight: "700",
      fontSize: responsiveSize(10.5),
    },

    achievementRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: responsiveSize(10),
    },

    achievementDivider: {
      height: 1,
      backgroundColor: themeColor.borderColor,
    },

    achievementIconWrap: {
      width: responsiveSize(38),
      height: responsiveSize(38),
      borderRadius: responsiveSize(12),
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    achievementTextWrap: {
      flex: 1,
    },

    achievementTitle: {
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    achievementTitleLocked: {
      color: themeColor.placeHolder,
    },

    achievementSubtitle: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    achievementLockedBadge: {
      fontSize: responsiveSize(10),
      fontWeight: "700",
      color: themeColor.placeHolder,
    },
  });

export default getStyles;
