import { baseURL, SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";
import { AIChatbot } from "@/components/custom/ai-chatbot";
import "./globals.css";

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
        images: [
            {
                url: "/screenshot-desktop.png",
                width: 1200,
                height: 630,
                alt: "Portfolio Desktop Screenshot",
            },
            {
                url: "/screenshot-mobile.png",
                width: 390,
                height: 844,
                alt: "Portfolio Mobile Screenshot",
            },
        ],
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
        <html lang="en" suppressHydrationWarning className="dark">
            <body
                className={cn(
                    "antialiased font-poppins mt-20 md:mt-10",
                    "bg-zinc-950 text-zinc-100"
                )}
            >
                <Navbar />
                {children}
                <Footer />
                <AIChatbot />
            </body>
        </html>
    );
}
