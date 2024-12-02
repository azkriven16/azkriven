import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import { Toaster } from "@/components/ui/sonner";
import ChatBot from "@/components/ui/chatbot";
import { Navbar } from "@/components/navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const plus_kakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${plus_kakarta_sans.className} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                    <Footer />
                    <ScrollProgressBar type="bar" />
                    <Toaster />
                    <ChatBot />
                </ThemeProvider>
            </body>
        </html>
    );
}
