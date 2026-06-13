import { StyleSheet } from 'react-native';
import { AppColor, appSize, responsiveSize } from '../../res';
import { ThemeColorType } from '../../res/colors/theme.types';

export const getStyles = (AppColor: ThemeColorType) =>
StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: responsiveSize(50),
    alignItems: 'center',
    paddingHorizontal: responsiveSize(10),
    borderBottomWidth: 1,
    borderColor: AppColor.secAppColor,
    backgroundColor: AppColor.appColor,
    marginBottom:responsiveSize(8)
  },

  leftButton: {
    height: responsiveSize(36),
    width: responsiveSize(36),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveSize(10),
    borderWidth:1,
    borderColor: AppColor.secLightAppColor,
  },

  leftIcon: {
    height: responsiveSize(20),
    width: responsiveSize(20),
  },

  titleContainer: {
    flex: 1,
    marginHorizontal: responsiveSize(8),
    alignItems: 'center',
    flexDirection: 'row',
  },

  titleText: {
    fontWeight:"700",
    color: AppColor.appLightColor,
    fontSize: appSize.font_Regular,
  },
});

