import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { Abel, Inter } from "next/font/google";

export const abel = Abel({ weight: ["400"], subsets: ["latin"] });
export const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
