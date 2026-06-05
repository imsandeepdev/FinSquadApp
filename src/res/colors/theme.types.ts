
export type ThemeColorType = {
  white: string;
  black: string;
  lightBlack: string;
  lightWhite: string;
  modelBackground: string;
  barStyle: 'dark-content' | 'light-content';

  // success / error / info
  errorColor: string;
  successColor: string;
  infoColor: string;

  // app theme
  appLightColor: string;
  appColor: string;
  secAppColor: string;
  secLightAppColor: string;

  // text colors
  primaryText: string;
  primaryLightText: string;
  secondaryText: string;
  secondaryLightText: string;
  errorText: string;
  infoText: string;
  appTextColor: string;
  appLightTextColor: string;
  secAppText: string;
  secLightAppText: string;
  placeHolder: string;
  borderColor: string;

  // extra
  background: string;
  cardColor: string;

  transparent_SecAppColor: string;

};

export type ThemeMode = 'light' | 'dark';

export type AppThemeTypes = {
  themeMode: ThemeMode;
  themeColor: ThemeColorType;
};
