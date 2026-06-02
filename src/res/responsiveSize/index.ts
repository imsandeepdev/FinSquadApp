import {PixelRatio, Dimensions} from 'react-native';

const WidthScale = 390;
const HeightScale = 844;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export function Normalize(size: number, based = 'width') {
  let widthScale = WidthScale;
  let heightScale = HeightScale;
  // Condition for mobile landscape orientation
  if (screenWidth > screenHeight) {
    widthScale = HeightScale;
    heightScale = WidthScale;
  }
  const widthBaseScale = screenWidth / widthScale;
  const heightBaseScale = screenHeight / heightScale;
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

type ResponsiveBasedOn = 'height' | 'width' | 'undefined';
export const responsiveSize = (size: number, based?: ResponsiveBasedOn) => {
  return Normalize(size, based);
};


export const appSize = {
  // FIXED FONT SIZE
  font_ultraSmall: responsiveSize(8),
  font_extraSmall: responsiveSize(10),
  font_Small: responsiveSize(12),
  font_Medium: responsiveSize(14),
  font_Regular: responsiveSize(16),
  font_Large: responsiveSize(18),
  font_extraLarge: responsiveSize(20),
  font_ultraLarge: responsiveSize(22),
  font_XLarge: responsiveSize(24),
  font_XXLarge: responsiveSize(26),
  font_XXXLarge: responsiveSize(28),
  font_Size30: responsiveSize(30),

  // FIXED ICON SIZE
  icon_ultraSmall: responsiveSize(8),
  icon_extraSmall: responsiveSize(10),
  icon_Small: responsiveSize(12),
  icon_Medium: responsiveSize(14),
  icon_Regular: responsiveSize(16),
  icon_Large: responsiveSize(18),
  icon_extraLarge: responsiveSize(20),
  icon_ultraLarge: responsiveSize(22),
  icon_XLarge: responsiveSize(24),
  icon_XXLarge: responsiveSize(26),
  icon_XXXLarge: responsiveSize(28),

  // FIXED RES SIZE
  res_Size2: responsiveSize(2),
  res_Size4: responsiveSize(4),
  res_Size5: responsiveSize(5),
  res_Size6: responsiveSize(6),
  res_Size8: responsiveSize(8),
  res_Size10: responsiveSize(10),
  res_Size12: responsiveSize(12),
  res_Size14: responsiveSize(14),
  res_Size16: responsiveSize(16),
  res_Size18: responsiveSize(18),
  res_Size20: responsiveSize(20),
  res_Size22: responsiveSize(22),
  res_Size24: responsiveSize(24),
  res_Size26: responsiveSize(26),
  res_Size28: responsiveSize(28),
  res_Size30: responsiveSize(30),
  res_Size35: responsiveSize(35),
  res_Size40: responsiveSize(40),
  res_Size45: responsiveSize(45),
  res_Size50: responsiveSize(50),

  res_Margin5: responsiveSize(5),
  res_Margin10: responsiveSize(10),
  res_Margin15: responsiveSize(15),
  res_Margin20: responsiveSize(20),
  res_Margin25: responsiveSize(25),
  res_Margin30: responsiveSize(30),
  res_Margin35: responsiveSize(35),
  res_Margin40: responsiveSize(40),



}