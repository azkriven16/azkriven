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

export const SITE_CONFIG = {
    name: "Euger Bonete",
    description: "Euger Bonete Jr's portfolio website",
    title: "Euger Portfolio",
    firstName: "Euger",
    address: "Iloilo, Philippines",
    socials: {
        github: "https://github.com/azkriven16",
        linkedin: "https://www.linkedin.com/in/euger-bonete/",
        facebook: "https://facebook.com/euger.bonete.9",
    },
    aiChatbot:
        "Hi! I'm azkriven, a username I use across gaming platforms and developer accounts. I enjoy playing competitive games like League of Legends and Valorant. In my free time, I love reading manga, watching anime, and diving into novels - I'm currently reading Brandon Sanderson's The Stormlight Archive series and absolutely loving it!",
};
