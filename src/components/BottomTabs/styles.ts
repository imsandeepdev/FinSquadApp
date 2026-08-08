import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";
import { responsiveSize } from "../../res";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColor.background,
  },

  tabBar: {
    position: 'absolute',
    left: responsiveSize(15),
    right: responsiveSize(15),
    bottom: 0,
    height: responsiveSize(75),
    backgroundColor: AppColor.cardColor,
    // borderRadius: 1,
    borderTopWidth: 1,
    borderColor: AppColor.appColor,
    elevation: 15,
    shadowColor: AppColor.black,
    shadowOffset: {
      width: responsiveSize(0),
      height: responsiveSize(10),
    },
    shadowOpacity: 0.15,
    shadowRadius: responsiveSize(12),
    paddingTop: responsiveSize(10),
  },

  aiContainer: {
    top: responsiveSize(-15),
    justifyContent: 'center',
    alignItems: 'center',
  },

  aiButton: {
    width: responsiveSize(65),
    height: responsiveSize(65),
    borderRadius: responsiveSize(36),
    backgroundColor: AppColor.lightWhite,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
    shadowColor: AppColor.secAppColor,
    shadowOffset: {
      width: responsiveSize(0),
      height: responsiveSize(8),
    },
    shadowOpacity: 0.4,
    shadowRadius: responsiveSize(10),
    borderWidth: responsiveSize(2),
    borderColor: AppColor.secAppColor
  },
});