import { StyleSheet } from "react-native";
import { appSize, responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      paddingVertical: responsiveSize(10),
      paddingHorizontal: responsiveSize(18),
    },

    headerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: responsiveSize(12),
    },

    title: {
      fontSize: appSize.font_Large,
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

    card: {
      backgroundColor: themeColor.cardColor,
      borderRadius: responsiveSize(18),
      paddingVertical: responsiveSize(10),
      paddingHorizontal: responsiveSize(15),

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
