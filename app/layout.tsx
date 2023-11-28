import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";

import "./globals.css";

const alegreya_sans = Alegreya_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Portfolio | Durwankur Naik",
  description: "Portfolio website made using NextJS 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="body">
        <div className={alegreya_sans.className}>{children}</div>
      </body>
    </html>
  );
}
