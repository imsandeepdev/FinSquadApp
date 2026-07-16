import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      padding: responsiveSize(20),
    },

    title: {
      fontSize: responsiveSize(20),
      fontWeight: "700",
      color: themeColor.appTextColor,
      marginBottom: responsiveSize(15),
    },

    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      padding: responsiveSize(16),

      shadowColor: themeColor.black,
      shadowOpacity: 0.05,
      shadowRadius: 10,
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(4),
      },

      elevation: 3,
    },

    switchRow: {
      marginTop: responsiveSize(20),

      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    switchTitle: {
      fontSize: responsiveSize(16),
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    switchSub: {
      marginTop: responsiveSize(4),
      fontSize: responsiveSize(13),
      color: themeColor.secondaryLightText,
    },
  });

export default getStyles;
