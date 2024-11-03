"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    IconMenu2,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandFacebook,
    IconMail,
    IconPicnicTable,
} from "@tabler/icons-react";
import { Drawer } from "@/components/ui/drawer";
import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const pathname = usePathname();

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
            className="py-4 px-6 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                >
                    <Link
                        href="/"
                        className={`flex items-center ${
                            pathname === "/" ? "text-primary" : ""
                        }`}
                    >
                        <IconPicnicTable />
                        zkriven
                    </Link>
                </motion.div>
                <div className="hidden md:flex space-x-4">
                    {[
                        "Home",
                        "About",
                        "Experience",
                        "Projects",
                        "Tech Stack",
                    ].map((item, i) => {
                        const href =
                            item === "Home"
                                ? "/"
                                : `/${item.toLowerCase().replace(" ", "")}`;
                        return (
                            <motion.div
                                key={item}
                                variants={linkVariants}
                                whileHover="hover"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.1 }}
                            >
                                <Button asChild variant="ghost">
                                    <Link
                                        href={href}
                                        className={
                                            pathname === href
                                                ? "text-primary"
                                                : "text-muted-foreground"
                                        }
                                    >
                                        {item}
                                    </Link>
                                </Button>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="md:hidden">
                    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                        <DrawerTrigger asChild>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.1 }}
                            >
                                <IconMenu2 className="cursor-pointer" />
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
                                        {[
                                            "Home",
                                            "About",
                                            "Experience",
                                            "Projects",
                                            "Tech Stack",
                                        ].map((item, i) => {
                                            const href =
                                                item === "Home"
                                                    ? "/"
                                                    : `/${item
                                                          .toLowerCase()
                                                          .replace(" ", "")}`;
                                            return (
                                                <motion.div
                                                    key={item}
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
                                                            href={href}
                                                            onClick={
                                                                handleLinkClick
                                                            }
                                                            className={
                                                                pathname ===
                                                                href
                                                                    ? "text-primary"
                                                                    : ""
                                                            }
                                                        >
                                                            {item}
                                                        </Link>
                                                    </Button>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                    <motion.div
                                        className="flex justify-center space-x-4 mt-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.1,
                                        }}
                                    >
                                        {[
                                            {
                                                icon: IconBrandGithub,
                                                href: "https://github.com/yourusername",
                                            },
                                            {
                                                icon: IconBrandLinkedin,
                                                href: "https://linkedin.com/in/yourusername",
                                            },
                                            {
                                                icon: IconBrandFacebook,
                                                href: "https://facebook.com/yourusername",
                                            },
                                            {
                                                icon: IconMail,
                                                href: "mailto:youremail@example.com",
                                            },
                                        ].map((social, i) => (
                                            <motion.div
                                                key={social.href}
                                                whileHover={{
                                                    scale: 1.2,
                                                    rotate: 180,
                                                }}
                                                transition={{ duration: 0.15 }}
                                            >
                                                <Link
                                                    href={social.href}
                                                    onClick={handleLinkClick}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <social.icon className="w-6 h-6" />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </motion.nav>
    );
};
