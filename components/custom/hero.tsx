import { Button } from "@/components/ui/button";
import {
    IconChevronRight,
    IconCircle,
    IconMapPin,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";
import { FadeText } from "../ui/fade-text";

export const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-4xl text-center px-4 space-y-5">
                <div className="flex justify-center">
                    <a
                        className="inline-flex items-center gap-x-2 border-2 border-green-500 text-sm p-1 ps-3 rounded-full transition"
                        href="#"
                    >
                        Available for work
                        <IconCircle fill="#22c55e" color="#22c55e" />
                    </a>
                </div>

                <div className="flex justify-center gap-4 text-4xl md:text-6xl font-bold">
                    <FadeText
                        direction="left"
                        framerProps={{
                            show: { transition: { delay: 0.2 } },
                        }}
                        text="Transforming"
                    />
                    <FadeText
                        direction="right"
                        framerProps={{
                            show: { transition: { delay: 0.4 } },
                        }}
                        text="Digital"
                    />
                </div>
                <div className="flex justify-center gap-4 text-4xl md:text-6xl font-bold">
                    <FadeText
                        direction="left"
                        framerProps={{
                            show: { transition: { delay: 0.6 } },
                        }}
                        text="Dreams into"
                    />
                    <FadeText
                        direction="right"
                        framerProps={{
                            show: { transition: { delay: 0.8 } },
                        }}
                        text="Reality"
                    />
                </div>
                <p className="text-sm flex items-center justify-center">
                    <IconMapPin size={16} className="mr-1" />
                    Iloilo, Philippines
                </p>
                <p className="text-xl text-muted-foreground">
                    Hi, my name is Euger. I'm a software engineer crafting
                    intuitive web solutions
                </p>
                <div className="flex justify-center space-x-4">
                    <Button asChild variant="shine">
                        <Link href="/works" className="flex items-center">
                            See my work
                            <IconChevronRight className="ml-2" size={18} />
                        </Link>
                    </Button>

                    <Button asChild variant="secondary">
                        <Link href="/about">About Me</Link>
                    </Button>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                    <Button asChild variant="ghost" size="icon">
                        <Link
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandGithub size={24} />
                        </Link>
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                        <Link
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandLinkedin size={24} />
                        </Link>
                    </Button>
                    <Button asChild variant="ghost" size="icon">
                        <Link
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandTwitter size={24} />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
