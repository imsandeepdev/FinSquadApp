import { ThemeColorType } from "./theme.types";

export const LightTheme = {
  mode: "light",

  themeColor: {
    white: "#FFFFFF",
    black: "#111827",

    // surfaces
    lightBlack: "#6B7280", // secondary text role
    lightWhite: "#F3F4F6", // surface / input / soft background

    background: "#F9FAFB",
    cardColor: "#FFFFFF",
    surface: "#F3F4F6", // NEW - layered surface, one step above background

    modelBackground: "rgba(0,0,0,0.35)",
    overlay: "rgba(0,0,0,0.35)", // NEW
    barStyle: "dark-content",

    // status colors
    errorColor: "#EF4444",
    successColor: "#16A34A",
    infoColor: "#3B82F6",

     // app theme
    // appLightColor: "#EEF2FF",     // Soft, premium light indigo tint
    // appColor: "#6366F1",          // Your original Indigo
// appLightColor: "#FFEDD5", // Soft light orange
// appColor: "#EA580C",      // Deep premium orange

appLightColor: "#FFF7ED", // Soft, premium light orange tint
appColor: "#F97316",      // Primary orange

    secAppColor: "#A855F7",       // Your original Purple
    secLightAppColor: "#F3E8FF",  // Soft, clean light purple tint

    // text system (clean hierarchy)
    primaryText: "#1F2937",
    primaryLightText: "#4B5563",
    secondaryText: "#F3F4F6",
    secondaryLightText: "#D1D5DB",

    errorText: "#DC2626",
    infoText: "#2563EB",

    // Kept neutral (not the brand indigo) — this token is used as the
    // app's general-purpose text color across ~75 screens/components
    // (titles, labels, values, inputs). Using the accent hue here made
    // every heading/label read like a link. Brand emphasis should come
    // from `appColor` / `secAppColor` directly, not from this token.
    appTextColor: "#1F2937",
    appLightTextColor: "#EEF2FF",

    secAppText: "#A855F7",
    secLightAppText: "#F3E8FF",

    // #9CA3AF (Tailwind gray-400) was ~2.4:1 contrast on white/light
    // backgrounds — fails WCAG AA and reads as "invisible" text.
    // gray-500 clears 4.5:1 while staying visually secondary.
    placeHolder: "#6B7280",

    // borders
    borderColor: "#E5E7EB",

    // overlay
    transparent_SecAppColor: "rgba(26,127,142,0.08)",

    // NEW (parity with DarkTheme)
    disabled: "#D1D5DB",
    shadow: "rgba(0,0,0,0.08)",
  } satisfies ThemeColorType,
} as const;