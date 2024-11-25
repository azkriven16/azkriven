"use client";

import { Section } from "@/components/custom/section";
import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Metadata } from "next";
import Link from "next/link";

// export const metadata: Metadata = {
//     title: "Contact | Euger Bonete",
//     description:
//         "Explore the technologies and tools I use in my software development projects.",
// };

export default function ContactPage() {
    return (
        <div>
            <Section>
                <div className="py-10 md:pt-20 space-y-10 md:space-y-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.2 }}
                        className="text-5xl md:text-8xl font-dm"
                    >
                        Let's talk
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.2 }}
                        className="text-xl md:text-3xl w-[90%] md:w-2/3 leading-normal"
                    >
                        Connecting with our clients to create tailor-made
                        solutions
                    </motion.p>
                </div>
                <div className="space-y-10">
                    <p className="text-5xl">{SITE_CONFIG.socials.email}</p>

                    <div className="flex justify-between items-center">
                        <div className="flex gap-5">
                            <Link
                                href="#"
                                className={cn(
                                    buttonVariants({ variant: "linkHover2" }),
                                    "text-lg font-medium p-0 after:w-full"
                                )}
                            >
                                Github
                            </Link>
                            <Link
                                href="#"
                                className={cn(
                                    buttonVariants({ variant: "linkHover2" }),
                                    "text-lg font-medium p-0 after:w-full"
                                )}
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="#"
                                className={cn(
                                    buttonVariants({ variant: "linkHover2" }),
                                    "text-lg font-medium p-0 after:w-full"
                                )}
                            >
                                Twitter
                            </Link>
                        </div>
                        <p className="text-muted-foreground">
                            Iloilo, Philippines
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
