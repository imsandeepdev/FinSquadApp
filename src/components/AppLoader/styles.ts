import {StyleSheet} from 'react-native';
import {AppColor, appSize, responsiveSize} from '../../res';
import { ThemeColorType } from '../../res/colors/theme.types';

export const getStyles = (AppColor: ThemeColorType) =>
  StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: AppColor.modelBackground,
    justifyContent: 'center',
  },
  alartView: {
    marginVertical: responsiveSize(5),
    minHeight: responsiveSize(90),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: responsiveSize(15),
  },
  modalView: {
    backgroundColor: AppColor.lightWhite,
    marginHorizontal: responsiveSize(20),
    borderRadius: responsiveSize(8),
    borderWidth: 2,
    borderColor: AppColor.placeHolder,
  },
  texInputView: {
    marginHorizontal: responsiveSize(8),
    height: responsiveSize(50),
    width: responsiveSize(50),
    borderRadius: responsiveSize(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: AppColor.appColor,
  },
  textInputStyle: {
    textAlign: 'center',
    fontSize: responsiveSize(14),
    height: responsiveSize(50),
    width: responsiveSize(50),
    borderRadius: responsiveSize(8),
    color: AppColor.appColor,
    paddingVertical: responsiveSize(2),
  },
  otpTitle: {
    fontSize: appSize.font_Regular,
    color: AppColor.secAppColor,
    textAlign: 'center',
  },
  topTitleStyle: {
    fontSize: responsiveSize(12),
    color: AppColor.primaryText,
    textAlign: 'center',
  },
  headingView: {
    backgroundColor: AppColor.appColor,
    padding: responsiveSize(8),
    paddingVertical: responsiveSize(12),
    borderTopLeftRadius: responsiveSize(6),
    borderTopRightRadius: responsiveSize(6),
  },
  headingText: {
    fontSize: responsiveSize(14),
    color: AppColor.primaryText,
  },
  bodyMainView: {
    padding: responsiveSize(8),
    paddingVertical: responsiveSize(10),
  },
});

