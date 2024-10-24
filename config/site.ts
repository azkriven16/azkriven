import { BookMarked, Grid2X2, Home, UserCircle } from "lucide-react";

export const baseURL = "https://azkriven.vercel.app/";

export const NAV_ITEMS = [
    { text: "Home", href: "/", icon: Home },
    {
        text: "About",
        href: "/about",
        icon: UserCircle,
    },
    {
        text: "Work",
        href: "/work",
        icon: Grid2X2,
    },
    {
        text: "Blog",
        href: "/blog",
        icon: BookMarked,
    },
];

export const BLOG = [
    {
        title: "Getting Started with Web Development",
        description:
            "we'll explore the basics to help you kickstart your web development adventure.",
        date: "June 23, 2023",
        href: "https://what-the-blog.vercel.app/blogs/getting-started-with-web-development",
    },

    {
        title: "useClickOutside React Hook",
        description:
            "a powerful tool for handling these scenarios with elegance and efficiency.",
        date: "Nov 29, 2023",
        href: "https://what-the-blog.vercel.app/blogs/getting-started-with-web-development",
    },

    {
        title: "A Guide to Boosting Productivity in Coding",
        description:
            "tips to help you become more productive in your coding endeavors.",
        date: "Dec 1, 2023",
        href: "https://what-the-blog.vercel.app/blogs/getting-started-with-web-development",
    },
];

export const SKILLS = [
    {
        name: "Web Development",
        stack: ["Typescript", "React", "Next.js", "Tailwind CSS"],
    },
    {
        name: "Backend Development",
        stack: ["Prisma", "Firebase", "MongoDB", "Node.js"],
    },
    {
        name: "Tools & Environments",
        stack: ["VSCode", "Git", "Docker"],
    },
];

export const SITE_CONFIG = {
    name: "Euger Bonete",
    description: "Euger Bonete Jr's portfolio website",
    title: "Euger Portfolio",
    firstName: "Euger",
    address: "Iloilo, Philippines",
};
