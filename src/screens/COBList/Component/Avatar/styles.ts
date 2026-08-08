import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../../res";
import { ThemeColorType } from "../../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      width: responsiveSize(52),
      height: responsiveSize(52),
      borderRadius: responsiveSize(26),
      justifyContent: "center",
      alignItems: "center",
    },

    text: {
      fontSize: responsiveSize(18),
      fontWeight: "700",
    },
  });

export default getStyles;
