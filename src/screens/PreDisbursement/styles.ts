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

    progressCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(16),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      padding: responsiveSize(15),
      marginBottom: responsiveSize(16),
    },

    progressHeaderRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: responsiveSize(10),
    },

    progressLabel: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
    },

    progressLoanId: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
    },

    progressPercentText: {
      fontSize: appSize.font_Medium,
      fontWeight: "800",
      color: themeColor.appColor,
    },

    progressTrack: {
      height: responsiveSize(8),
      borderRadius: responsiveSize(4),
      backgroundColor: themeColor.secLightAppColor,
      overflow: "hidden",
    },

    progressFill: {
      height: "100%",
      borderRadius: responsiveSize(4),
      backgroundColor: themeColor.appColor,
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

    checkRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      paddingVertical: responsiveSize(8),
    },

    checkIconWrap: {
      width: responsiveSize(30),
      height: responsiveSize(30),
      borderRadius: responsiveSize(15),
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    checkTextWrap: {
      flex: 1,
    },

    checkTitle: {
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    checkSubtitle: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    checkStatusBadge: {
      paddingHorizontal: responsiveSize(10),
      paddingVertical: responsiveSize(4),
      borderRadius: responsiveSize(20),
      alignSelf: "flex-start",
    },

    checkStatusText: {
      fontSize: responsiveSize(11),
      fontWeight: "700",
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

    consentRow: {
      flexDirection: "row",
      alignItems: "flex-start",
    },

    checkboxBox: {
      width: responsiveSize(22),
      height: responsiveSize(22),
      borderRadius: responsiveSize(5),
      borderWidth: 1.5,
      borderColor: themeColor.appColor,
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(10),
      marginTop: responsiveSize(2),
    },

    checkboxBoxChecked: {
      backgroundColor: themeColor.appColor,
    },

    consentText: {
      flex: 1,
      fontSize: appSize.font_Small,
      color: themeColor.appTextColor,
      lineHeight: responsiveSize(19),
    },

    confirmButton: {
      marginHorizontal: 0,
      marginTop: responsiveSize(6),
    },
  });

export default getStyles;
