"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import TextRevealByWord from "@/components/ui/text-reveal";

export function LinkPreviewDemo() {
    return (
        <div className="flex justify-center items-center h-[40rem] flex-col">
            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl lg:text-4xl xl:text-5xl mx-auto mb-10 xl:lg-3 relative mx-1 lg:mx-2.5">
                <LinkPreview url="https://tailwindcss.com" className="">
                    Tailwind CSS
                </LinkPreview>{" "}
                and{" "}
                <LinkPreview url="https://framer.com/motion" className="">
                    Framer Motion
                </LinkPreview>{" "}
                are a great way to build modern websites.
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl mx-auto">
                Visit{" "}
                <LinkPreview
                    url="https://ui.aceternity.com"
                    className=" bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                    Aceternity UI
                </LinkPreview>{" "}
                for amazing Tailwind and Framer Motion components.
            </p>
        </div>
    );
}
