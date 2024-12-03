"use client";

import { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    TwitterIcon,
} from "lucide-react";

export function Contact() {
    return (
        <div>
            <section className="w-full py-12 md:py-24 lg:py-32 ">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I'm always excited to connect with new people.
                                Feel free to reach out through any of the
                                channels below.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                            <Link href="#" className="group" prefetch={false}>
                                <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                    <TwitterIcon className="w-6 h-6" />
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                                    Twitter
                                </div>
                            </Link>
                            <Link href="#" className="group" prefetch={false}>
                                <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                    <LinkedinIcon className="w-6 h-6" />
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                                    LinkedIn
                                </div>
                            </Link>
                            <Link href="#" className="group" prefetch={false}>
                                <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                    <GithubIcon className="w-6 h-6" />
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                                    GitHub
                                </div>
                            </Link>
                            <Link href="#" className="group" prefetch={false}>
                                <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                    <InstagramIcon className="w-6 h-6" />
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                                    Instagram
                                </div>
                            </Link>
                            <Link href="#" className="group" prefetch={false}>
                                <div className="bg-background rounded-full p-3 flex items-center justify-center transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                    <MailIcon className="w-6 h-6" />
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground group-hover:text-accent-foreground">
                                    Email
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
