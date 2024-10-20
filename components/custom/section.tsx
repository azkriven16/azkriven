"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ShellProps {
    className?: string;
    children: ReactNode;
}

export default function Section({ className, children }: ShellProps) {
    return (
        <AnimatePresence>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                exit={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn("", className)}
            >
                {children}
            </motion.section>
        </AnimatePresence>
    );
}
