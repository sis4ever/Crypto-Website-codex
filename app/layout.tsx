import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CryptoX",
  description: "Zero-budget EVM crypto analytics terminal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
