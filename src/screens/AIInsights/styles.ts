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
      alignItems: "center",
      marginBottom: responsiveSize(12),
    },

    cardTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginLeft: responsiveSize(6),
    },

    actionRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      paddingVertical: responsiveSize(10),
    },

    actionDivider: {
      height: 1,
      backgroundColor: themeColor.borderColor,
    },

    actionIconWrap: {
      width: responsiveSize(34),
      height: responsiveSize(34),
      borderRadius: responsiveSize(10),
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    actionTextWrap: {
      flex: 1,
      minWidth: 0,
    },

    actionTitleRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    actionTitle: {
      flex: 1,
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginRight: responsiveSize(8),
    },

    actionDescription: {
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(3),
      lineHeight: responsiveSize(16),
    },

    priorityBadge: {
      paddingHorizontal: responsiveSize(8),
      paddingVertical: responsiveSize(3),
      borderRadius: responsiveSize(10),
    },

    priorityBadgeText: {
      fontSize: responsiveSize(10),
      fontWeight: "800",
    },

    visitRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: responsiveSize(10),
    },

    visitNumberCircle: {
      width: responsiveSize(26),
      height: responsiveSize(26),
      borderRadius: responsiveSize(13),
      backgroundColor: themeColor.secLightAppColor,
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    visitNumberText: {
      fontSize: responsiveSize(12),
      fontWeight: "800",
      color: themeColor.appColor,
    },

    visitTextWrap: {
      flex: 1,
      minWidth: 0,
      marginRight: responsiveSize(8),
    },

    visitName: {
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    visitSubtitle: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    visitDistanceChip: {
      paddingHorizontal: responsiveSize(8),
      paddingVertical: responsiveSize(4),
      borderRadius: responsiveSize(10),
      backgroundColor: themeColor.background,
      borderWidth: 1,
      borderColor: themeColor.borderColor,
    },

    visitDistanceText: {
      fontSize: responsiveSize(10.5),
      fontWeight: "600",
      color: themeColor.secondaryLightText,
    },

    promptChipRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: responsiveSize(10),
    },

    promptChip: {
      paddingHorizontal: responsiveSize(12),
      paddingVertical: responsiveSize(7),
      borderRadius: responsiveSize(20),
      borderWidth: 1,
      borderColor: themeColor.appColor,
      marginRight: responsiveSize(8),
      marginBottom: responsiveSize(8),
    },

    promptChipText: {
      fontSize: responsiveSize(11.5),
      fontWeight: "600",
      color: themeColor.appColor,
    },

    askButton: {
      marginHorizontal: 0,
      marginTop: responsiveSize(4),
    },

    assistantStatusRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(14),
    },

    assistantStatusText: {
      marginLeft: responsiveSize(8),
      fontSize: responsiveSize(12.5),
      color: themeColor.secondaryLightText,
    },

    assistantResponseCard: {
      flexDirection: "row",
      marginTop: responsiveSize(14),
      padding: responsiveSize(12),
      borderRadius: responsiveSize(12),
      backgroundColor: themeColor.background,
      borderWidth: 1,
      borderColor: themeColor.borderColor,
    },

    assistantAvatar: {
      width: responsiveSize(28),
      height: responsiveSize(28),
      borderRadius: responsiveSize(14),
      backgroundColor: themeColor.appColor,
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(10),
    },

    assistantAvatarText: {
      fontSize: responsiveSize(11),
      fontWeight: "800",
      color: themeColor.white,
    },

    assistantResponseText: {
      flex: 1,
      fontSize: responsiveSize(12.5),
      color: themeColor.primaryText,
      lineHeight: responsiveSize(18),
    },
  });

export default getStyles;
