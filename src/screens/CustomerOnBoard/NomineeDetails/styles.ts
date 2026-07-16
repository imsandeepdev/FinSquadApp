import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      padding: responsiveSize(20),
    },

    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: responsiveSize(12),
    },

    title: {
      fontSize: responsiveSize(20),
      fontWeight: "700",
      color: themeColor.appTextColor,
    },

    badge: {
      backgroundColor: themeColor.secLightAppColor,
      paddingHorizontal: responsiveSize(12),
      paddingVertical: responsiveSize(5),
      borderRadius: responsiveSize(20),
    },

    badgeText: {
      color: themeColor.successColor,
      fontWeight: "600",
      fontSize: responsiveSize(12),
    },

    badgeOptional: {
      backgroundColor: themeColor.appLightColor,
      paddingHorizontal: responsiveSize(12),
      paddingVertical: responsiveSize(5),
      borderRadius: responsiveSize(20),
    },

    badgeTextOptional: {
      color: themeColor.infoColor,
      fontWeight: "600",
      fontSize: responsiveSize(12),
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

    space: {
      height: responsiveSize(25),
    },

    addButton: {
      height: responsiveSize(48),
      borderRadius: responsiveSize(12),
      backgroundColor: themeColor.appLightColor,

      borderWidth: 1,
      borderColor: themeColor.appTextColor,
      borderStyle: "dashed",

      justifyContent: "center",
      alignItems: "center",

      marginBottom: responsiveSize(15),
    },

    addText: {
      color: themeColor.appTextColor,
      fontWeight: "700",
      fontSize: responsiveSize(16),
    },
  });

export default getStyles;
