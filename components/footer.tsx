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
        <footer className="w-full bg-background px-4">
            <div className="mx-auto max-w-container">
                <Footer>
                    <FooterContent>
                        <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/"
                                    className="font-semibold flex items-center"
                                >
                                    <Button size="icon" className="h-8 w-8">
                                        <Sigma />
                                    </Button>
                                    ugerBonete
                                </Link>
                            </div>
                        </FooterColumn>
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
