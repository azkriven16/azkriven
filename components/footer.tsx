import ModeToggle from "@/components/ui/mode-toggle";
import {
    Footer,
    FooterColumn,
    FooterBottom,
    FooterContent,
} from "@/components/ui/footer";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sigma } from "lucide-react";

export default function FooterComponent() {
    return (
        <footer className="max-w-4xl mx-auto w-full bg-background p-4">
            <div className="flex items-center justify-center gap-2 opacity-50 text-muted-foreground bg-gradient-to-b from-background to-transparent">
                <Link
                    href="/"
                    className="font-semibold flex items-center text-5xl md:text-9xl max-w-4xl px-4"
                >
                    <Button
                        size="icon"
                        className="h-20 md:h-52 w-20 md:w-52 bg-muted-foreground"
                    >
                        <Sigma className="h-20 md:h-40 w-20 md:w-40" />
                    </Button>
                    ugerBonete
                </Link>
            </div>

            <div className="mx-auto max-w-container mt-20">
                <Footer>
                    <FooterContent>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">
                                Product
                            </h3>
                            <a
                                href="/"
                                className="text-sm text-muted-foreground"
                            >
                                Changelog
                            </a>
                            <a
                                href="/"
                                className="text-sm text-muted-foreground"
                            >
                                Documentation
                            </a>
                        </FooterColumn>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">
                                Company
                            </h3>
                            <a
                                href="/"
                                className="text-sm text-muted-foreground"
                            >
                                About
                            </a>
                            <a
                                href="/"
                                className="text-sm text-muted-foreground"
                            >
                                Careers
                            </a>
                            <a
                                href="/"
                                className="text-sm text-muted-foreground"
                            >
                                Blog
                            </a>
                        </FooterColumn>
                        <FooterColumn>
                            <h3 className="text-md pt-1 font-semibold">
                                Contact
                            </h3>
                            <a
                                href="/"
                                className="text-sm text-muted-foreground"
                            >
                                Discord
                            </a>
                            <a
                                href="/"
                                className="text-sm text-muted-foreground"
                            >
                                Twitter
                            </a>
                            <a
                                href="/"
                                className="text-sm text-muted-foreground"
                            >
                                Github
                            </a>
                        </FooterColumn>
                    </FooterContent>
                    <FooterBottom>
                        <div>© 2024 Euger Bonete Jr. All rights reserved</div>
                        <div className="flex items-center gap-4">
                            <a href="/">Privacy Policy</a>
                            <a href="/">Terms of Service</a>
                            <ModeToggle />
                        </div>
                    </FooterBottom>
                </Footer>
            </div>
        </footer>
    );
}
