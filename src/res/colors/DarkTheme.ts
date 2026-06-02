export const DarkTheme = {
  mode: "dark",

  themeColor: {
    // BASE
    white: "#FFFFFF",
    black: "#0B0F14", // softer black for UI depth

    // SURFACES
    background: "#000000",
    cardColor: "#1C1C1E",
    surface: "#121212", // NEW (important for layered UI)

    lightBlack: "#1F2937",
    lightWhite: "#2C2C2E",

    modelBackground: "rgba(0,0,0,0.7)",
    overlay: "rgba(0,0,0,0.5)", // NEW

    barStyle: "light-content",

    // STATUS COLORS (FIXED)
    errorColor: "#FF453A",
    successColor: "#16A34A",
    infoColor: "#3B82F6",

    // BRAND COLORS (UNCHANGED)
    appLightColor: "#40E0D0",
    appColor: "#1A7F8E",
    secAppColor: "#0F2F33",
    secLightAppColor: "#16474D",

    // TEXT COLORS (IMPROVED HIERARCHY)
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

    // BORDER (FIXED for dark UI)
    borderColor: "#2C2C2E",

    // TRANSPARENT
    transparent_SecAppColor: "rgba(26,127,142,0.12)",

    // NEW (IMPORTANT FOR FINTECH UI)
    disabled: "#374151",
    shadow: "rgba(0,0,0,0.4)",
  },
} as const;