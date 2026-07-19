import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      padding: responsiveSize(18),
    },

    title: {
      fontSize: appSize.font_Large,
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginBottom: responsiveSize(10),
    },

    summaryCard: {
      backgroundColor: themeColor.appLightColor,
      borderRadius: responsiveSize(18),
      padding: responsiveSize(15),
      marginBottom: responsiveSize(10),
      borderWidth: 1,

      borderColor: themeColor.borderColor,
    },

    summaryTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    summaryText: {
      marginTop: responsiveSize(5),
      fontSize: appSize.font_Small,
      color: themeColor.primaryText,
      lineHeight: responsiveSize(22),
    },

    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      padding: responsiveSize(15),
      shadowColor: themeColor.black,
      shadowOpacity: 0.05,
      shadowRadius: 10,
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(4),
      },
      elevation: 3,
      borderWidth: 1,
      borderColor: themeColor.borderColor,
    },
  });

export default getStyles;
