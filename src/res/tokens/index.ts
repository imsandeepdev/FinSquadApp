import { Dimensions } from 'react-native';
import { responsiveSize } from '../responsiveSize';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/**
 * Device / layout config for the mobile app.
 * Use `isTablet` to branch layout (e.g. columns, max content width)
 * instead of hardcoding breakpoints per screen.
 */
export const isTablet = Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) >= 600;

export const SCREEN = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
};

/**
 * Spacing scale (margins/padding/gaps). Prefer these over raw numbers
 * so spacing stays consistent and responsive across device sizes.
 */
export const SPACING = {
  xs: responsiveSize(4),
  sm: responsiveSize(8),
  md: responsiveSize(12),
  lg: responsiveSize(16),
  xl: responsiveSize(20),
  xxl: responsiveSize(24),
  xxxl: responsiveSize(32),
};

/**
 * Border radius scale.
 */
export const RADIUS = {
  sm: responsiveSize(6),
  md: responsiveSize(10),
  lg: responsiveSize(16),
  xl: responsiveSize(20),
  full: 999,
};

/**
 * Font size scale. Prefer these (or `appSize.font_*`) over raw fontSize numbers.
 */
export const FONT_SIZE = {
  xs: responsiveSize(10),
  sm: responsiveSize(12),
  md: responsiveSize(14),
  lg: responsiveSize(16),
  xl: responsiveSize(18),
  xxl: responsiveSize(22),
  xxxl: responsiveSize(28),
};
