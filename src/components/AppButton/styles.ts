import {StyleSheet} from 'react-native';
import {AppColor, responsiveSize} from '../../res';
import { ThemeColorType } from '../../res/colors/theme.types';

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({
  mainContainer: {
    borderRadius: responsiveSize(8),
    backgroundColor: AppColor.appColor,
    marginHorizontal: responsiveSize(20),
  },
  titleText: {
    fontSize: responsiveSize(16),
    color: AppColor.white,
    fontWeight: '600',
    textAlign:'center'
  },
  pressableContainer: {
    height: responsiveSize(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressedStyle: {
    opacity: 0.5,
  },
});
