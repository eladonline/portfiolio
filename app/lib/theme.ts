import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

export const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    breakpoints: {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xl2: number;
      };
    };
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xl2: 1536,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
