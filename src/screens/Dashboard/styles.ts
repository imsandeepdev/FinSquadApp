import { StyleSheet,  Dimensions } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
const {width} = Dimensions.get('window');

const CARD_WIDTH = (width - 36) / 2;
export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({
  container: {
    backgroundColor: AppColor.appLightColor,
    flexGrow:1,
  },

});