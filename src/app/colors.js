// Colour tokens. `lightTheme` and `darkTheme` share the same keys, and the
// active one is exposed to styled-components as `theme.colors`.

export const palette = {
  white: "#ffffff",
  black: "#000000",
  orange: "#ed7014",
};

export const lightTheme = {
  // Text
  textPrimary: "#111111",
  textSecondary: "#666666",
  textMuted: "#999999",
  foreground: palette.black, // icon strokes

  // Surfaces
  background: "#f4f5f5", // page background
  surface: palette.white, // main content card
  surfaceTranslucent: "rgba(222, 223, 225, 0.7)",
  border: "#dedfe1", // borders, dividers, subtle fills

  // Buttons
  buttonPrimary: "#303236",
  buttonPrimaryHover: palette.black,

  // Accent (availability badge, highlights)
  accent: "#088046",
  accentTranslucent: "rgba(8, 128, 70, 0.7)",
  accentSubtle: "#09e37d29",

  // Status tags
  successBg: "#d1e7dd",
  successText: "#0a3622",
  successBorder: "#a3cfbb",
  dangerBg: "#f8d7da",
  dangerText: "#58151c",
  dangerBorder: "#f1aeb5",
  warningBg: "#fff3cd",
  warningText: "#664d03",
  warningBorder: "#ffe69c",
  infoBg: "#cff4fc",
  infoText: "#055160",
  infoBorder: "#9eeaf9",
};

export const darkTheme = {
  // Text
  textPrimary: palette.white,
  textSecondary: "#ffffff99",
  textMuted: "#ffffff99",
  foreground: palette.white,

  // Surfaces
  background: "#141414",
  surface: "#1a1a1a",
  surfaceTranslucent: "rgba(53, 53, 53, 0.7)",
  border: "#353535",

  // Buttons
  buttonPrimary: "#353535",
  buttonPrimaryHover: "rgba(53, 53, 53, 0.7)",

  // Accent
  accent: "#1cc971",
  accentTranslucent: "rgba(28, 201, 113, 0.7)",
  accentSubtle: "#0f8a5136",

  // Status tags
  successBg: "#051b11",
  successText: "#75b798",
  successBorder: "#0f5132",
  dangerBg: "#2c0e0b",
  dangerText: "#ea868f",
  dangerBorder: "#842029",
  warningBg: "#332701",
  warningText: "#ffda6a",
  warningBorder: "#997404",
  infoBg: "#032830",
  infoText: "#6edff6",
  infoBorder: "#087990",
};
