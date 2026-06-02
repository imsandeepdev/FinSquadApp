import { ThemeColorType } from "./theme.types";

export const AppColor = {
  white: "#FFFFFF",
  black: "#0B0F14",

  lightBlack: "#1F2937",
  lightWhite: "#2C2C2E",

  modelBackground: "rgba(0,0,0,0.7)",
  barStyle: "light-content",

  // STATUS COLORS (FIXED)
  errorColor: "#FF453A",
  successColor: "#16A34A",
  infoColor: "#3B82F6",

  // APP THEME
  appLightColor: "#40E0D0",
  appColor: "#1A7F8E",
  secAppColor: "#1F2937",
  secLightAppColor: "#374151",

  // TEXT COLORS (FIXED HIERARCHY)
  primaryText: "#F3F4F6",
  primaryLightText: "#D1D5DB",
  secondaryText: "#9CA3AF",

  errorText: "#FF453A",
  infoText: "#60A5FA",

  appTextColor: "#40E0D0",
  appLightTextColor: "#1A7F8E",

  secAppText: "#E5E7EB",
  secLightAppText: "#9CA3AF",

  placeHolder: "#6B7280",
  borderColor: "#2C2C2E",

  // BACKGROUND SYSTEM
  background: "#000000",
  cardColor: "#1C1C1E",

  transparent_SecAppColor: "rgba(26,127,142,0.12)",
} satisfies ThemeColorType;