import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    scrollContent: {
      padding: responsiveSize(20),
      paddingBottom: responsiveSize(40),
    },

    title: {
      fontSize: responsiveSize(24),
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginBottom: responsiveSize(20),
    },

    card: {
      backgroundColor: themeColor.cardColor,

      borderRadius: responsiveSize(18),

      padding: responsiveSize(16),

      marginBottom: responsiveSize(16),

      shadowColor: themeColor.black,

      shadowOpacity: 0.05,

      shadowRadius: 8,

      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(4),
      },

      elevation: 2,
    },

    cardTitle: {
      fontSize: responsiveSize(18),

      fontWeight: "700",

      color: themeColor.appTextColor,

      marginBottom: responsiveSize(15),
    },

    row: {
      flexDirection: "row",

      justifyContent: "space-between",

      marginBottom: responsiveSize(10),
    },

    label: {
      fontSize: responsiveSize(15),

      color: themeColor.secondaryLightText,

      flex: 1,
    },

    value: {
      flex: 1,

      textAlign: "right",

      color: themeColor.primaryText,

      fontWeight: "600",
    },

    emptyCardText: {
      color: themeColor.secondaryLightText,
      fontSize: responsiveSize(14),
      fontStyle: "italic",
    },

    declaration: {
      backgroundColor: themeColor.appLightColor,

      borderRadius: responsiveSize(18),

      padding: responsiveSize(16),

      marginTop: responsiveSize(10),

      borderWidth: 1,
      borderColor: themeColor.borderColor,
    },

    declarationTitle: {
      fontSize: responsiveSize(18),

      fontWeight: "700",

      color: themeColor.appTextColor,
    },

    declarationText: {
      marginTop: responsiveSize(10),

      lineHeight: responsiveSize(22),

      color: themeColor.secondaryLightText,

      fontSize: responsiveSize(14),
    },

    declarationCheckRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginTop: responsiveSize(14),
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
      marginTop: responsiveSize(1),
    },

    checkboxBoxChecked: {
      backgroundColor: themeColor.appColor,
    },

    declarationAcceptLabel: {
      flex: 1,
      fontSize: responsiveSize(14),
      fontWeight: "600",
      color: themeColor.appTextColor,
    },

    declarationRequiredNote: {
      marginTop: responsiveSize(8),
      fontSize: responsiveSize(12),
      color: themeColor.errorColor,
    },
  });

export default getStyles;
