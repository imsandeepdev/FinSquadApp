import { useTheme } from '../utils/provider/themeProvider';
import {AppColor} from './colors/appColor';
import { ThemeColorType } from './colors/theme.types';

import {responsiveSize,appSize} from './responsiveSize/index';
import { useThemedStyles } from './colors/useThemeStyles';
export {AppColor, responsiveSize, useThemedStyles, appSize};
export { SPACING, RADIUS, FONT_SIZE, isTablet, SCREEN } from './tokens';

export const useThemeColor = (): ThemeColorType => {
  const { theme } = useTheme();
  return theme.themeColor;
};