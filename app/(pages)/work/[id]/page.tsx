import { notFound } from "next/navigation";
import { PROJECTS } from "@/config/projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        id: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = PROJECTS.find((p) => p.slug === params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
                {/* desktop mockup */}
                <div className="flex-1">
                    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                            <Image
                                src={project.img}
                                alt={`${project.title} Desktop View`}
                                width={512}
                                height={278}
                                className="h-[156px] md:h-[278px] w-full rounded-lg object-contain"
                            />
                        </div>
                    </div>
                    <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                    </div>
                </div>

                {/* mobile mockup */}
                <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[400px] w-[200px] md:h-[600px] md:w-[300px]">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg md:block hidden"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg md:block hidden"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg md:block hidden"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg md:block hidden"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[172px] h-[372px] md:w-[272px] md:h-[572px] bg-white dark:bg-gray-800">
                        <Image
                            src={project.img_mobile}
                            alt={`${project.title} Mobile View`}
                            width={272}
                            height={572}
                            className="w-[172px] h-[372px] md:w-[272px] md:h-[572px] object-contain"
                        />
                    </div>
                </div>
            </div>

            <p className="text-lg mb-6">{project.description}</p>
            <div className="flex space-x-4">
                <Button asChild>
                    <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project{" "}
                        <IconExternalLink className="ml-2" size={18} />
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source Code{" "}
                        <IconExternalLink className="ml-2" size={18} />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
