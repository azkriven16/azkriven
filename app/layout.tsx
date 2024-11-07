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
    metadataBase: new URL(`${baseURL}`),
    keywords: [
        "Euger Bonete",
        "Euger Bonete portfolio",
        "Euger Bonete web developer",
        "Euger Bonete software engineer",
        "Euger Bonete web developer",
        "Euger Bonete portfolio website",
        "Euger Bonete nisu",
        "Euger Bonete cics",
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
        images: "https://azkriven.vercel.app/api/og",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className="dark">
            <meta
                name="google-site-verification"
                content="_-DsPVM1mKXI1ed-cTqkSHsCYYUB6PbqhC140RyX1kg"
            />
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
