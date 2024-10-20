import { ThemeProvider } from "@/components/custom/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import { Pattern } from "@/components/ui/pattern";
import { baseURL, SITE_CONFIG } from "@/config/site";

import { SidebarComponent } from "@/components/custom/sidebar";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
            <body className={cn("antialiased font-poppins")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <SidebarComponent>
                        <main className="flex flex-1 p-2 md:p-10">
                            {children}
                        </main>
                    </SidebarComponent>
                    <Toaster />
                    <Pattern variant="checkered" />
                </ThemeProvider>
            </body>
        </html>
    );
}
