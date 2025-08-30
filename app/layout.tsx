import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/shared/Container";
import { Providers } from "./providers";
import Hero from "@/components/landing/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - Office Furniture Store",
  description: "Stay productive and get more work done!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Container size="full" className="relative z-50">
            <Navbar />
            <Hero />
          </Container>
          <Container size="xl" className="min-h-screen">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
