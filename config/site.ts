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

export const CERTS = [
    {
        text: "HTML/CSS",
        href: "https://www.testdome.com/certificates/5faeb9a601474a2a906f712f40dfab6f",
        date: "Mar 8, 2022",
        description:
            "Earned an HTML and CSS certification demonstrating proficiency in web development fundamentals from",
        certSource: "https://www.testdome.com/",
        certOrg: "TestDome",
    },
    {
        text: "Javascript",
        href: "https://www.testdome.com/certificates/530156ebb39f43c5a407bb157b414413",
        date: "Aug 1, 2022",
        description:
            "Achieved a Javascript certification showcasing advanced skills in scripting and web interactivity from",
        certSource: "https://www.testdome.com/",
        certOrg: "TestDome",
    },
    {
        text: "Typescript",
        href: "https://www.testdome.com/certificates/b42958b8c828498782f72c304e0f7d24",
        date: "Oct 8, 2023",
        description:
            "Attained a Typescript certification validating expertise in statically-typed JavaScript from",
        certSource: "https://www.testdome.com/",
        certOrg: "TestDome",
    },
    {
        text: "React",
        href: "https://www.testdome.com/certificates/da2507e9432941068913931a9ce1dc47",
        date: "Oct 8, 2023",
        description:
            "Secured a React certification indicating proficiency in building interactive user interfaces from",
        certSource: "https://www.testdome.com/",
        certOrg: "TestDome",
    },
    {
        text: "Internship",
        href: "https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.15752-9/387567066_632539412413050_7960054422638544472_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHhALzdaO2NI16kgJJT2rzNzpxyGrWWP-nOnHIatZY_6Z_cIIB_An0QrTZtZBx5uAS6e-Nsx4euyTKoEZi5Ij5a&_nc_ohc=B387-qYdFPgAX_vanTC&_nc_ht=scontent.fmnl4-5.fna&oh=03_AdRdEKu0Z-5nP_eECJeke98iA_92o7ypP34D1o4ZP1MFdA&oe=658A7C5F",
        date: "Sep 8, 2022",
        description:
            "Completed an Internship certification, showcasing practical experience and skills gained in a professional work environment from",
        certSource: "https://www.testdome.com/",
        certOrg: "TestDome",
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
