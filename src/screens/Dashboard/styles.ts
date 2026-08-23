import { StyleSheet,  Dimensions } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
import { responsiveSize } from "../../res";
const {width} = Dimensions.get('window');

const CARD_WIDTH = (width - 36) / 2;
export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({

  scrollView: {
    flex: 1,
  },

  container: {
    backgroundColor: AppColor.appLightColor,
    flexGrow:1,
     paddingBottom: responsiveSize(80),
  },

  aiSectionWrapper: {
    paddingHorizontal: responsiveSize(16),
    paddingVertical: responsiveSize(5),
  },

  quickActionsWrapper: {
    paddingHorizontal: responsiveSize(16),
    paddingVertical: responsiveSize(10),
  },

});