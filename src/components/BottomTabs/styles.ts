import { StyleSheet } from "react-native";
import { ThemeColorType } from "../../res/colors/theme.types";

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#081120',
  },

  tabBar: {
    position: 'absolute',
    left: 15,
    right: 15,
    bottom: 0,
    height: 75,
    backgroundColor: '#132238',
    // borderRadius: 1,
    borderTopWidth: 1,
    borderColor: AppColor.appColor,
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    paddingTop:10,
  },

  aiContainer: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  aiButton: {
    width: 65,
    height: 65,
    borderRadius: 36,
    backgroundColor: AppColor.lightWhite,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
    shadowColor: AppColor.secAppColor,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderWidth:2,
    borderColor: AppColor.secAppColor
  },
});