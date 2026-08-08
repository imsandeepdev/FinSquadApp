import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
import { appSize, responsiveSize } from "../../res";

export const getStyles = (AppColor: ThemeColorType) =>

StyleSheet.create({
  container: {
    marginTop: appSize.res_Margin15,
    flexDirection: "row",
  },

  item: {
    flex: 1,
    height: responsiveSize(6),
    borderRadius: responsiveSize(20),
    marginHorizontal: responsiveSize(4),
  },
});