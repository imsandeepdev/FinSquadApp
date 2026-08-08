import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../../res";
import { ThemeColorType } from "../../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      margin: responsiveSize(16),
      backgroundColor: themeColor.appLightColor,
      borderRadius: responsiveSize(12),
      padding: responsiveSize(4),
      borderWidth: 0.5,
      borderColor: themeColor.appColor,
    },

    tab: {
      flex: 1,
      paddingVertical: responsiveSize(12),
      borderRadius: responsiveSize(10),
      alignItems: "center",
    },

    text: {
      fontWeight: "600",
      fontSize: responsiveSize(14),
    },
  });

export default getStyles;
