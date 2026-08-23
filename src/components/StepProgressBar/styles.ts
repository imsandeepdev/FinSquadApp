import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
import { responsiveSize } from "../../res";

export const getStyles = (_themeColor: ThemeColorType) =>

StyleSheet.create({
  container: {
    marginTop: responsiveSize(8),
    flexDirection: "row",
  },

  item: {
    flex: 1,
    height: responsiveSize(6),
    borderRadius: responsiveSize(20),
    marginHorizontal: responsiveSize(4),
  },
});