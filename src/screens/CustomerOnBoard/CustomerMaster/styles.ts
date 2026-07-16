import { StyleSheet } from "react-native";
import { responsiveSize } from "../../../res";
import { ThemeColorType } from "../../../res/colors/theme.types";

export const getStyles = (themeColor: ThemeColorType) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: responsiveSize(20),
      paddingTop: responsiveSize(15),
    },

    sectionTitle: {
      fontSize: responsiveSize(18),
      fontWeight: "700",
      color: themeColor.secondaryLightText,
      marginBottom: responsiveSize(15),
    },
  });

export default getStyles;
