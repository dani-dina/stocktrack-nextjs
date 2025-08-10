import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../../components/Navigation";
import BackgroundGradient from "../../svgs/BackgroundGradient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navigation/>
        <BackgroundGradient />
        {children}
      </body>
    </html>
  );
}
