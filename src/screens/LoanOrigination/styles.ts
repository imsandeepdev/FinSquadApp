import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
import { appSize, responsiveSize } from "../../res";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    header: {
      padding: responsiveSize(10),
      backgroundColor: themeColor.background,
    },

    stepRow: {
      alignItems: "flex-end",
    },

    stepText: {
      color: themeColor.primaryText,
      fontWeight: "700",
      fontSize: appSize.font_Medium,
    },

    title: {
      textAlign: "center",
      marginTop: responsiveSize(10),
      fontSize: appSize.font_Large,
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    scrollContent: {
      paddingBottom: responsiveSize(120),
    },

    bottomContainer: {
      position: "absolute",
      bottom: responsiveSize(0),
      left: responsiveSize(0),
      right: responsiveSize(0),
      backgroundColor: themeColor.background,
    },

    bottomViewContainer: {
      backgroundColor: themeColor.white,
      borderTopLeftRadius: responsiveSize(20),
      borderTopRightRadius: responsiveSize(20),
      paddingHorizontal: responsiveSize(15),
      paddingVertical: responsiveSize(12),
      paddingBottom: responsiveSize(25),

      flexDirection: "row",

      shadowColor: themeColor.black,
      shadowOffset: {
        width: responsiveSize(0),
        height: responsiveSize(-3),
      },
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 12,
    },

    backButton: {
      width: responsiveSize(80),
      height: responsiveSize(45),
      borderRadius: responsiveSize(10),
      backgroundColor: themeColor.appLightTextColor,
      borderWidth: 0.5,
      borderColor: themeColor.appColor,
      justifyContent: "center",
      alignItems: "center",
      marginRight: responsiveSize(10),
    },

    backText: {
      fontSize: appSize.font_Medium,
      fontWeight: "600",
      color: themeColor.appColor,
    },

    nextButton: {
      flex: 1,
      height: responsiveSize(45),
      borderRadius: responsiveSize(10),
      backgroundColor: themeColor.appColor,
      justifyContent: "center",
      alignItems: "center",
    },

    nextText: {
      color: themeColor.appLightTextColor,
      fontWeight: "700",
      fontSize: appSize.font_Medium,
    },
  });

export default getStyles;
