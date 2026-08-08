import { StyleSheet } from "react-native";
import { AppColor, appSize, responsiveSize } from "../../res";
import { ThemeColorType } from "../../res/colors/theme.types";


export const getStyles = (AppColor: ThemeColorType) =>

StyleSheet.create({
  topView: {
    borderRadius: responsiveSize(5),
    marginTop: responsiveSize(12),
  },
  mainView: {
    backgroundColor: AppColor.appLightColor,
    height: responsiveSize(48),
    borderRadius: responsiveSize(4),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColor.placeHolder,
  },
  showTitle_MainView: {
    backgroundColor: AppColor.appLightColor,
    height: responsiveSize(45),
    borderRadius: responsiveSize(4),
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderColor: AppColor.placeHolder,
  },
  bodyView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderColor: AppColor.placeHolder,

  },
  showTitle_bodyView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    
  },
  showTitle_flexView: {
    flex: 1,
    justifyContent:"center",
  },
  showTitleText: {
    fontSize: appSize.font_Medium,
    letterSpacing: 1,
    color: AppColor.appTextColor,
    marginHorizontal: responsiveSize(8),
  },
  leftIconView: {
    width: responsiveSize(30),
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: AppColor.placeHolder,
  },
  rightIconView: {
    width: responsiveSize(30),
    alignItems: 'center',
    // borderLeftWidth: 1,
    // borderColor: AppColor.placeHolder,
  },
  leftIcon: {
    height: responsiveSize(22),
    width: responsiveSize(22),
  },
  flexView: {
    flex: 1,
  },
  textInput: {
    height: '100%',
    fontSize: appSize.font_Medium,
    letterSpacing: 1,
    fontWeight: '500',
    color: AppColor.primaryLightText,
    marginHorizontal: responsiveSize(8),
  },
  absoluteView: {
    position: 'absolute',
    top: responsiveSize(-10),
    left: responsiveSize(5),
  },
  headerMainView: {
    height: responsiveSize(18),
    backgroundColor: AppColor.primaryLightText,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveSize(5),
    borderRadius: responsiveSize(4),
    // borderWidth:1,
    // borderColor:R.colors.appColor
  },
  headerTitle: {
    fontSize: appSize.font_Medium,
    fontWeight: '500',
    color: AppColor.primaryLightText,
    marginBottom: responsiveSize(4),
  },
  rightButton: {
    paddingHorizontal: responsiveSize(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    marginTop: responsiveSize(4),
    color: AppColor.errorColor,
    fontSize: responsiveSize(12),
  },
});