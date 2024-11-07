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
    keywords: [
        "portfolio philippines",
        "web developer philippines",
        "software engineer philippines",
        SITE_CONFIG.firstName,
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    openGraph: {
        title: `${SITE_CONFIG.firstName}'s Portfolio - Software Engineer`,
        description: SITE_CONFIG.description,
        url: baseURL,
        images: "https://azkriven.vercel.app/api/og",
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE_CONFIG.firstName}'s Portfolio - Software Engineer`,
        description: SITE_CONFIG.description,
        images: ["https://azkriven.vercel.app/api/og"],
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
