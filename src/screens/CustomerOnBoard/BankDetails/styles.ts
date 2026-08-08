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

    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      paddingHorizontal: responsiveSize(15),
      paddingVertical: responsiveSize(10),

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
