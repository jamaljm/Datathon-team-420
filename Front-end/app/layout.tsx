import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import {
  Roboto,
  Sora,
  Poppins,
  Rubik,
  Inter,
  Urbanist,
} from "next/font/google";

const robotoFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const urbanistFont = Urbanist({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

const soraFont = Sora({
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-sora",
  subsets: ["latin"],
});

const poppinsFont = Poppins({
  weight: ["200", "400", "500", "600", "800"],
  display: "swap",
  variable: "--font-poppins",
  subsets: ["latin"],
});

const rubikFont = Rubik({
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-rubik",
  subsets: ["latin"],
});

const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Beacon AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = `${interFont.variable} ${robotoFont.variable} ${soraFont.variable} ${poppinsFont.variable} ${rubikFont.variable} ${urbanistFont.variable}`;

  return (
    <html lang="en" className={fontVariables}>
      <body>
        <Providers>{children}</Providers>{" "}
      </body>
    </html>
  );
}
