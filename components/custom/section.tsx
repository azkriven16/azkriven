"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto px-4"
        >
            {children}
        </motion.div>
    );
};
