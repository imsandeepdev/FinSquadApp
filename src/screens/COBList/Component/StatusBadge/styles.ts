import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../../res";
import { ThemeColorType } from "../../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: responsiveSize(10),
      paddingVertical: responsiveSize(5),
      borderRadius: responsiveSize(30),
    },

    dot: {
      width: responsiveSize(7),
      height: responsiveSize(7),
      borderRadius: responsiveSize(4),
      marginRight: responsiveSize(5),
    },

    text: {
      fontWeight: "600",
      fontSize: responsiveSize(12),
    },
  });

export default getStyles;
