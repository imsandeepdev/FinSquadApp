import {Platform, StyleSheet} from 'react-native';
import { responsiveSize } from '../../res';
import { ThemeColorType } from '../../res/colors/theme.types';
const isDarkMode = true;

export const getStyles = (AppColor: ThemeColorType) =>
  StyleSheet.create({
  statusBar: {
    flex: 0,
    backgroundColor: AppColor.appColor,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  root: {
    flex: 1,
  },
  bottomBarIos: {
    flex: 0,
    backgroundColor: isDarkMode ? AppColor.secAppColor : AppColor.white,
  },
  loader: {
    flex: 1,
    backgroundColor: AppColor.modelBackground,
    position: 'absolute',
    top: responsiveSize(0),
    left: responsiveSize(0),
    right: responsiveSize(0),
    bottom: responsiveSize(0),
  },
  headViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
   bottomBar: {
    backgroundColor: 'transparent',
  },

  androidBottomBar: {
    height: responsiveSize(48), // standard Android nav bar height
    paddingBottom: Number(Platform.Version) >= 29 ? responsiveSize(16) : responsiveSize(0), // gesture navigation
  },
});

export default getStyles;
