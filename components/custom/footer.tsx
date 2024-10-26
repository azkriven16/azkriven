import {
    IconBrandNextjs,
    IconBrandTailwind,
    IconBrandFramer,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="py-8 md:py-12 mt-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row items-center justify-between">
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <p className="text-sm text-muted-foreground text-center md:text-left">
                            &copy; {new Date().getFullYear()} Euger Portfolio.
                            All rights reserved.
                        </p>
                        <nav>
                            <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm hover:text-primary"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-sm hover:text-primary"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/projects"
                                        className="text-sm hover:text-primary"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/experience"
                                        className="text-sm hover:text-primary"
                                    >
                                        Experience
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/techstack"
                                        className="text-sm hover:text-primary"
                                    >
                                        Tech Stack
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com/eugercodes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 hover:text-primary"
                            >
                                <IconBrandGithub className="w-5 h-5" />
                                <span className="text-sm">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/euger-bonete/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 hover:text-primary"
                            >
                                <IconBrandLinkedin className="w-5 h-5" />
                                <span className="text-sm">LinkedIn</span>
                            </a>
                            <a
                                href="https://twitter.com/eugercodes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 hover:text-primary"
                            >
                                <IconBrandTwitter className="w-5 h-5" />
                                <span className="text-sm">Twitter</span>
                            </a>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <p className="text-sm text-muted-foreground">
                                Built with
                            </p>
                            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4">
                                <div className="flex items-center space-x-2">
                                    <IconBrandNextjs className="w-5 h-5" />
                                    <span className="text-sm">Next.js</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <IconBrandTailwind className="w-5 h-5" />
                                    <span className="text-sm">
                                        Tailwind CSS
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <IconBrandFramer className="w-5 h-5" />
                                    <span className="text-sm">
                                        Framer Motion
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
