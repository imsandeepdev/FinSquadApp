import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../../res";
import { ThemeColorType } from "../../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: themeColor.cardColor,
      paddingTop: responsiveSize(10),
      paddingBottom: responsiveSize(18),
      borderTopWidth: 0.5,
      borderColor: themeColor.borderColor,
      elevation: 10,
    },

    item: {
      flex: 1,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },

    iconContainer: {
      width: responsiveSize(30),
      height: responsiveSize(30),
      borderRadius: responsiveSize(20),
      justifyContent: "center",
      alignItems: "center",
    },

    summaryTextWrap: {
      marginLeft: responsiveSize(10),
    },

    value: {
      marginTop: responsiveSize(6),
      fontSize: responsiveSize(12),
      fontWeight: "700",
      color: themeColor.primaryText,
      textAlign: "center",
    },

    title: {
      marginTop: responsiveSize(2),
      fontSize: responsiveSize(10),
      color: themeColor.secAppText,
    },

    divider: {
      borderWidth: 0.5,
      height: responsiveSize(40),
      borderColor: themeColor.borderColor,
    },
  });

export default getStyles;
