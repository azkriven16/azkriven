"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { IconMenu2, IconPicnicTable } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 20,
            },
        },
    };

    const linkVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.1 },
        },
    };

    const handleLinkClick = () => {
        setIsDrawerOpen(false);
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={cn(
                "py-4 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm",
                isScrolled ? "bg-secondary/50" : "bg-transparent"
            )}
        >
            <div className="max-w-6xl px-4 mx-auto flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                >
                    <Link
                        href="/"
                        className={`flex items-center text-2xl font-mono ${
                            pathname === "/" ? "text-primary" : ""
                        }`}
                    >
                        <IconPicnicTable className="h-10 w-10" />
                    </Link>
                </motion.div>
                <div className="hidden md:flex space-x-2">
                    {NAV_ITEMS.map((item, i) => (
                        <motion.div
                            key={item.label}
                            variants={linkVariants}
                            whileHover="hover"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.1 }}
                        >
                            <Button
                                asChild
                                variant={
                                    item.href === "/contact"
                                        ? "gooeyLeft"
                                        : "linkHover2"
                                }
                                onClick={handleLinkClick}
                                className="rounded-full"
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        pathname === item.href
                                            ? "text-primary"
                                            : "text-muted-foreground",
                                        item.href !== "/contact" &&
                                            "hover:text-primary",

                                        "text-base"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="md:hidden">
                    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                        <DrawerTrigger asChild>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.1 }}
                            >
                                <IconMenu2 className="cursor-pointer h-8 w-8" />
                            </motion.div>
                        </DrawerTrigger>
                        <DrawerContent>
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.15 }}
                                    className="p-6 space-y-6"
                                >
                                    <div className="flex justify-center mb-6">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            <Link
                                                href="/"
                                                onClick={handleLinkClick}
                                                className={`flex items-center ${
                                                    pathname === "/"
                                                        ? "text-primary"
                                                        : ""
                                                }`}
                                            >
                                                <IconPicnicTable />
                                                zkriven
                                            </Link>
                                        </motion.div>
                                    </div>
                                    <div className="space-y-4">
                                        {NAV_ITEMS.map((item, i) => (
                                            <motion.div
                                                key={item.label}
                                                initial={{
                                                    opacity: 0,
                                                    x: -20,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: i * 0.05,
                                                    duration: 0.1,
                                                }}
                                            >
                                                <Button
                                                    asChild
                                                    variant="ghost"
                                                    className="w-full justify-start text-lg"
                                                >
                                                    <Link
                                                        href={item.href}
                                                        onClick={
                                                            handleLinkClick
                                                        }
                                                        className={
                                                            pathname ===
                                                            item.href
                                                                ? "text-primary"
                                                                : ""
                                                        }
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </motion.nav>
    );
};
