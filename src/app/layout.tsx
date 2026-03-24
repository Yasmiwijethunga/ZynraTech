import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";

const geistSans = {
  variable: "--font-geist-sans",
};

const geistMono = {
  variable: "--font-geist-mono",
};

export const metadata: Metadata = {
  title: "ZynraTech — Engineering the Future of Tech",
  description:
    "Architecting high-performance digital neural interfaces and scalable software ecosystems for the next generation of global industry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}