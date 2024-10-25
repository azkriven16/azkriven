import { PROJECTS } from "@/config/projects";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconChevronRight } from "@tabler/icons-react";

export const Projects = () => {
    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    What I've Been Working On
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                    Explore my latest projects and see how I bring ideas to
                    life.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((item) => (
                        <div key={item.href} className="flex flex-col">
                            <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={item.imgDark}
                                    alt={`${item.title} Image`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground flex-grow mb-4">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
