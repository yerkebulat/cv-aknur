import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://yerkebulat.github.io"),
  title: "Aknur Zhakanova - Resume",
  description:
    "Resume of Aknur Zhakanova, geology student at Nazarbayev University",
  robots: "index, follow",
  icons: {
    icon: [
      { url: `${basePath}/icon.png`, type: "image/png", sizes: "32x32" },
      { url: `${basePath}/favicon.ico`, sizes: "any" },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
