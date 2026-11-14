"use client";

import { useSelector } from "react-redux";
import { selectUi } from "@/app/redux/uiSlice";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme, palette } from "@/app/colors";

export function ThemeProvider({ children }) {
  const { theme } = useSelector(selectUi);

  const styledTheme = {
    colors: theme === "dark" ? darkTheme : lightTheme,
    palette,
  };

  return (
    <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
  );
}
