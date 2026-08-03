import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../res";
import { ThemeColorType } from "../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    scrollContent: {
      paddingHorizontal: responsiveSize(18),
      paddingTop: responsiveSize(14),
      paddingBottom: responsiveSize(30),
    },

    nextEmiCard: {
      backgroundColor: themeColor.appColor,
      borderRadius: responsiveSize(18),
      padding: responsiveSize(18),
      marginBottom: responsiveSize(16),
    },

    nextEmiLabelRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: responsiveSize(10),
    },

    nextEmiLabel: {
      fontSize: appSize.font_Small,
      color: themeColor.white,
      opacity: 0.85,
    },

    nextEmiInstallment: {
      fontSize: responsiveSize(11),
      color: themeColor.white,
      opacity: 0.85,
    },

    nextEmiAmount: {
      fontSize: responsiveSize(30),
      fontWeight: "800",
      color: themeColor.white,
      marginBottom: responsiveSize(4),
    },

    nextEmiDueRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(4),
    },

    nextEmiDueText: {
      fontSize: appSize.font_Small,
      color: themeColor.white,
      marginLeft: responsiveSize(6),
      opacity: 0.9,
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
      marginBottom: responsiveSize(10),
    },

    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: responsiveSize(6),
    },

    rowLabel: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
    },

    rowValue: {
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.appTextColor,
    },

    progressTrack: {
      height: responsiveSize(8),
      borderRadius: responsiveSize(4),
      backgroundColor: themeColor.secLightAppColor,
      overflow: "hidden",
      marginTop: responsiveSize(8),
    },

    progressFill: {
      height: "100%",
      borderRadius: responsiveSize(4),
      backgroundColor: themeColor.appColor,
    },

    progressCaption: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(6),
    },

    scheduleRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: responsiveSize(9),
    },

    scheduleDivider: {
      height: 1,
      backgroundColor: themeColor.borderColor,
    },

    scheduleIdText: {
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
      width: responsiveSize(34),
    },

    scheduleMonthText: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
      flex: 1,
    },

    scheduleAmountText: {
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.appTextColor,
      marginRight: responsiveSize(10),
    },

    scheduleStatusBadge: {
      paddingHorizontal: responsiveSize(10),
      paddingVertical: responsiveSize(4),
      borderRadius: responsiveSize(20),
    },

    scheduleStatusText: {
      fontSize: responsiveSize(11),
      fontWeight: "700",
    },

    methodRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: responsiveSize(10),
    },

    methodIconWrap: {
      width: responsiveSize(34),
      height: responsiveSize(34),
      borderRadius: responsiveSize(10),
      backgroundColor: themeColor.secLightAppColor,
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    methodLabel: {
      flex: 1,
      fontSize: appSize.font_Small,
      fontWeight: "600",
      color: themeColor.appTextColor,
    },

    radioOuter: {
      width: responsiveSize(20),
      height: responsiveSize(20),
      borderRadius: responsiveSize(10),
      borderWidth: 1.5,
      borderColor: themeColor.appColor,
      alignItems: "center",
      justifyContent: "center",
    },

    radioInner: {
      width: responsiveSize(10),
      height: responsiveSize(10),
      borderRadius: responsiveSize(5),
      backgroundColor: themeColor.appColor,
    },

    payButton: {
      marginHorizontal: 0,
      marginTop: responsiveSize(6),
    },
  });

export default getStyles;
