import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nature BIO Terrários",
  description:
    "Adicione um toque de natureza à sua casa com nossos terrários exclusivos."
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
