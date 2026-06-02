import {Platform, StyleSheet} from 'react-native';
import {AppColor} from '../../res';
const isDarkMode = true;

const Styles = StyleSheet.create({
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
   bottomBar: {
    backgroundColor: 'transparent',
  },

  androidBottomBar: {
    height: 48, // standard Android nav bar height
    paddingBottom: Number(Platform.Version) >= 29 ? 16 : 0, // gesture navigation
  },
});

export {Styles};
