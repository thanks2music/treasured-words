import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.sass";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WE ARE ALL ONE",
  description:
    "With the theme of ‘giving my best in this very moment,’ I, Yoshiyuki Ito, am making a fresh start.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
