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

    summaryCard: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      padding: responsiveSize(18),
      marginTop: responsiveSize(10),
      marginBottom: responsiveSize(20),
      borderWidth: 0.5,
      borderColor: themeColor.borderColor,
    },

    summaryLabel: {
      fontSize: responsiveSize(13),
      fontWeight: "700",
      color: themeColor.secondaryText,
      marginBottom: responsiveSize(10),
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

    summaryKeyBold: {
      color: themeColor.primaryText,
      fontSize: responsiveSize(15),
      fontWeight: "700",
    },

    summaryValue: {
      fontWeight: "700",
      fontSize: responsiveSize(14),
      color: themeColor.primaryText,
    },

    divider: {
      height: 0.5,
      backgroundColor: themeColor.borderColor,
      marginVertical: responsiveSize(10),
    },

    eligibleValue: {
      fontWeight: "800",
      fontSize: responsiveSize(20),
      color: themeColor.appColor,
    },

    eligibleNote: {
      fontSize: responsiveSize(11),
      color: themeColor.secondaryLightText,
      marginTop: responsiveSize(6),
    },
  });

export default getStyles;
