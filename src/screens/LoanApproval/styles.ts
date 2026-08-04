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

    loanIdRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: responsiveSize(14),
    },

    loanIdText: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
      fontWeight: "600",
    },

    statusBadge: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.secLightAppColor,
      paddingHorizontal: responsiveSize(12),
      paddingVertical: responsiveSize(5),
      borderRadius: responsiveSize(20),
    },

    statusBadgeText: {
      color: themeColor.successColor,
      fontWeight: "700",
      fontSize: responsiveSize(12),
      marginLeft: responsiveSize(5),
    },

    amountHero: {
      alignItems: "center",
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      borderWidth: 1,
      borderColor: themeColor.borderColor,
      paddingVertical: responsiveSize(22),
      marginBottom: responsiveSize(16),
    },

    amountHeroLabel: {
      fontSize: appSize.font_Small,
      color: themeColor.placeHolder,
      marginBottom: responsiveSize(6),
    },

    amountHeroValue: {
      fontSize: responsiveSize(30),
      fontWeight: "800",
      color: themeColor.appTextColor,
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

    rowDivider: {
      height: 1,
      backgroundColor: themeColor.borderColor,
      marginVertical: responsiveSize(4),
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

    rowValueHighlight: {
      fontSize: appSize.font_Medium,
      fontWeight: "800",
      color: themeColor.successColor,
    },

    rowLabelHighlight: {
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    docRow: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: responsiveSize(10),
    },

    docIconWrap: {
      width: responsiveSize(38),
      height: responsiveSize(38),
      borderRadius: responsiveSize(10),
      backgroundColor: themeColor.secLightAppColor,
      alignItems: "center",
      justifyContent: "center",
      marginRight: responsiveSize(12),
    },

    docTextWrap: {
      flex: 1,
    },

    docTitle: {
      fontSize: appSize.font_Small,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    docSubtitle: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(2),
    },

    docAction: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: responsiveSize(10),
      paddingVertical: responsiveSize(6),
      borderRadius: responsiveSize(20),
      borderWidth: 1,
      borderColor: themeColor.appColor,
    },

    docActionText: {
      fontSize: responsiveSize(11),
      fontWeight: "700",
      color: themeColor.appColor,
      marginLeft: responsiveSize(4),
    },

    buttonsWrap: {
      marginTop: responsiveSize(4),
    },

    acceptButton: {
      marginHorizontal: 0,
    },

    declineButton: {
      backgroundColor: themeColor.cardColor,
      borderWidth: 1,
      borderColor: themeColor.errorColor,
      marginHorizontal: 0,
      marginTop: responsiveSize(12),
    },

    declineButtonText: {
      color: themeColor.errorColor,
    },

    disabledButton: {
      opacity: 0.5,
    },

    roleNote: {
      fontSize: responsiveSize(11),
      color: themeColor.placeHolder,
      marginTop: responsiveSize(10),
      textAlign: "center",
    },
  });

export default getStyles;
