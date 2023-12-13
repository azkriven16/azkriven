import type { Metadata } from "next";
import { Inter as FontSans, VT323 } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "../config/site";
import Spotlight from "@/components/spotlight";
import Sidebar from "@/components/sidebar";
import Shell from "../components/shell";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dotGothic = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased animate-background ",
          fontSans.variable,
          dotGothic.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Spotlight>
            <Shell className="grid lg:grid-cols-2 gap-10">
              <Sidebar />
              {children}
            </Shell>
          </Spotlight>
        </ThemeProvider>
      </body>
    </html>
  );
}
