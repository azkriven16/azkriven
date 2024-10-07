import { siteConfig } from "@/config/site";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export default function Footer() {
    return (
        <section className="space-y-5 text-muted-foreground" id="Footer">
            <p className="mt-4 max-w-xs leading-normal text-muted-foreground flex gap-2">
                © Euger Bonete 2023. All rights reserved.
            </p>
            <p className="mt-4 max-w-xs leading-normal text-muted-foreground flex gap-2">
                Built with 💖 by{" "}
                <a
                    href="https://github.com/azkriven16"
                    target="_blank"
                    className="mx-1 hover:underline text-foreground z-50"
                >
                    Euger Bonete
                </a>
            </p>
        </section>
    );
}
