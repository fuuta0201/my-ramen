import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramen Finder",
  description: "好みのジャンルからおすすめのラーメン店を探せるアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
