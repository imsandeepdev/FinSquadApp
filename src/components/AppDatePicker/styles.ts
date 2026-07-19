import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
import { appSize, responsiveSize } from "../../res";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    topView: {
      borderRadius: responsiveSize(5),
      marginTop: responsiveSize(12),
    },

    headerTitle: {
      fontSize: appSize.font_Medium,
      fontWeight: "500",
      color: themeColor.primaryLightText,
      marginBottom: responsiveSize(4),
    },

    mainView: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: themeColor.appLightColor,
      height: responsiveSize(48),
      borderRadius: responsiveSize(4),
      borderWidth: 1,
      borderColor: themeColor.placeHolder,
      paddingHorizontal: responsiveSize(8),
    },

    leftIconView: {
      width: responsiveSize(30),
      alignItems: "center",
    },

    valueText: {
      flex: 1,
      fontSize: appSize.font_Medium,
      letterSpacing: 1,
      fontWeight: "500",
      color: themeColor.primaryLightText,
      marginHorizontal: responsiveSize(8),
    },

    placeholderText: {
      color: themeColor.placeHolder,
      fontWeight: "400",
    },

    chevron: {
      marginRight: responsiveSize(4),
    },

    errorText: {
      marginTop: responsiveSize(4),
      color: themeColor.errorColor,
      fontSize: responsiveSize(12),
    },
  });

export default getStyles;
