import { MetadataRoute } from "next";
import { baseURL } from "@/config/site";
import { PROJECTS } from "@/config";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        {
            url: baseURL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseURL}about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseURL}work`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseURL}blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseURL}techstack`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];

    const projectRoutes = PROJECTS.map((project) => ({
        url: `${baseURL}work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    }));
    const allRoutes = [...staticRoutes, ...projectRoutes];

    return allRoutes.map((route) => ({
        ...route,
        changeFrequency:
            route.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    }));
}
