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
            <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-6">
                <Image
                    src={project.img}
                    alt={`${project.title} Image`}
                    fill
                    className="object-cover"
                />
            </div>
            <p className="text-lg mb-6">{project.description}</p>
            <h2 className="text-2xl font-semibold mb-3">Project Details</h2>
            <p className="mb-6">Created: {project.createdAt}</p>
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
