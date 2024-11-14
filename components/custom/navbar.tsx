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
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";

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
            className="py-4 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm"
        >
            <div className="max-w-6xl px-4 mx-auto flex justify-between items-center">
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
                <div className="hidden md:flex space-x-2">
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
                                <Button asChild variant="linkHover2">
                                    <Link
                                        href={href}
                                        className={cn(
                                            pathname === href
                                                ? "text-primary"
                                                : "text-muted-foreground",
                                            "text-sm hover:text-primary"
                                        )}
                                    >
                                        {item}
                                    </Link>
                                </Button>
                            </motion.div>
                        );
                    })}
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.2 }}
                    className="hidden md:flex space-x-2"
                >
                    <Button asChild variant="ghost" size="icon">
                        <Link
                            href={SITE_CONFIG.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandGithub size={18} />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                        <Link
                            href={SITE_CONFIG.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandLinkedin size={18} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                        <Link
                            href={SITE_CONFIG.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandFacebook size={18} />
                            <span className="sr-only">Facebook</span>
                        </Link>
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                        <Link
                            href={SITE_CONFIG.socials.email}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconMail size={18} />
                            <span className="sr-only">Email</span>
                        </Link>
                    </Button>
                </motion.div>
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
                                                href: SITE_CONFIG.socials
                                                    .github,
                                            },
                                            {
                                                icon: IconBrandLinkedin,
                                                href: SITE_CONFIG.socials
                                                    .linkedin,
                                            },
                                            {
                                                icon: IconBrandFacebook,
                                                href: SITE_CONFIG.socials
                                                    .facebook,
                                            },
                                            {
                                                icon: IconMail,
                                                href: `mailto:${SITE_CONFIG.socials.email}`,
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
