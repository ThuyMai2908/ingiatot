import { Exo, Fahkwang, Manrope } from "next/font/google";

export const header = Fahkwang({
  subsets: ["latin"],
  variable: "--font-header",
  weight: ["400"],
});

export const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400"],
});
