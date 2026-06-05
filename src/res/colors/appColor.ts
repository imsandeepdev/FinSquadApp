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
  // appLightColor: "#40E0D0",
  // appColor: "#1A7F8E",
  // secAppColor: "#1F2937",
  // secLightAppColor: "#374151",

  appLightColor: "#EEF2FF",     // Soft, premium light indigo tint
  appColor: "#6366F1",          // Your original Indigo

  secAppColor: "#A855F7",       // Your original Purple
  secLightAppColor: "#F3E8FF",  

  // TEXT COLORS (FIXED HIERARCHY)
  primaryText: "#1F2937",
  primaryLightText: " #4B5563",
  secondaryText: "#F3F4F6",
  secondaryLightText: "#D1D5DB",


  errorText: "#FF453A",
  infoText: "#60A5FA",

  appTextColor: "#6366F1",
  appLightTextColor: "#EEF2FF",

  secAppText: "#A855F7",
  secLightAppText: "#F3E8FF",

  placeHolder: "#6B7280",
  borderColor: "#2C2C2E",

  // BACKGROUND SYSTEM
  background: "#000000",
  cardColor: "#1C1C1E",

  transparent_SecAppColor: "rgba(26,127,142,0.12)",
} satisfies ThemeColorType;