import { PROJECTS } from "@/config/projects";

export async function getProjects({ category }: { category: string }) {
    let filteredProjects = PROJECTS;

    if (category !== "all") {
        filteredProjects = PROJECTS.filter(
            (project) => project.category === category
        );
    }

    // Map projects to include href
    const projectsWithLinks = filteredProjects.map((project) => ({
        ...project,
        link: project.href, // Include the href as a link property
    }));

    return { projects: projectsWithLinks };
}
