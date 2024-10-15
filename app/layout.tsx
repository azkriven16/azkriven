import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, Source_Code_Pro } from "next/font/google";

import { Pattern } from "@/components/ui/pattern";
import { baseURL, SITE_CONFIG } from "@/config/site";

import Footer from "@/components/footer";
import Nav from "@/components/nav";
import "./globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",    
});

const code = Source_Code_Pro({
    variable: "--font-code",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: `${SITE_CONFIG.firstName}'s Portfolio`,
    description: SITE_CONFIG.description,
    metadataBase: new URL(`https://${baseURL}`),
    openGraph: {
        title: `${SITE_CONFIG.firstName}'s Portfolio`,
        description: "Portfolio website showcasing my work.",
        url: baseURL,
        siteName: `${SITE_CONFIG.firstName}'s Portfolio`,
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn("antialiased", fontSans.variable, code.variable)}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Nav />
                    <Pattern variant="checkered" />
                    <main className="my-20 container">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
