import { baseURL, SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

import "./globals.css";
import { Footer } from "@/components/custom/footer";
import { Navbar } from "@/components/custom/navbar";

export const metadata: Metadata = {
    title: `${SITE_CONFIG.name}'s Portfolio ⁠- NISU | CICS`,

    description: SITE_CONFIG.description,
    metadataBase: new URL(`${baseURL}`),
    keywords: [
        "Euger Bonete",
        "Euger Bonete portfolio",
        "Euger Bonete web developer",
        "Euger Bonete software engineer",
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
    verification: {
        google: "_-DsPVM1mKXI1ed-cTqkSHsCYYUB6PbqhC140RyX1kg",
    },
    other: {
        "google-site-verification":
            "_-DsPVM1mKXI1ed-cTqkSHsCYYUB6PbqhC140RyX1kg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className="dark">
            <body className="antialiased font-poppins">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
