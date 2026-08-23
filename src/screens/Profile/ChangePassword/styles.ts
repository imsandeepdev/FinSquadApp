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

    infoBanner: {
      flexDirection: "row",
      alignItems: "flex-start",
      backgroundColor: themeColor.secLightAppColor,
      borderRadius: responsiveSize(14),
      padding: responsiveSize(12),
      marginBottom: responsiveSize(16),
    },

    infoBannerText: {
      flex: 1,
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
      marginLeft: responsiveSize(8),
      lineHeight: responsiveSize(16),
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
      marginBottom: responsiveSize(4),
    },

    ruleRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: responsiveSize(6),
    },

    ruleText: {
      fontSize: responsiveSize(11.5),
      color: themeColor.placeHolder,
      marginLeft: responsiveSize(6),
    },

    ruleTextMet: {
      color: themeColor.successColor,
      fontWeight: "600",
    },

    saveButton: {
      marginHorizontal: 0,
      marginTop: responsiveSize(4),
    },
  });

export default getStyles;
