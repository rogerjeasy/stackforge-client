import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BackgroundAnimation from "@/components/common/BackgroundAnimation";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "StackForge | Professional Project Scaffolding",
  description: "Generate production-ready FastAPI and React applications with best practices and enterprise-grade configurations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${jetbrainsMono.variable}`}>
      <body
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        {/* Background Animation - Behind everything */}
        <BackgroundAnimation />
        
        {/* Header - Fixed at top */}
        <Header />
        
        {/* Main Content - Between Header and Footer */}
        <main className="relative min-h-screen pt-20">
          {children}
        </main>
        
        {/* Footer - At bottom */}
        <Footer />
      </body>
    </html>
  );
}