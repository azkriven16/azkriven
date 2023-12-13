import { siteConfig } from "@/config/site";
import BackdropCard from "./card";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ChevronRightIcon } from "lucide-react";

export default function Projects() {
  return (
    <section className="space-y-5 text-muted-foreground" id="projects">
      <h1 className="font-bold uppercase text-foreground">Projects</h1>
      <ul>
        {siteConfig.projects.map((data) => (
          <li key={data.text} className="my-5">
            <BackdropCard {...data} />
          </li>
        ))}
      </ul>
      <Link href="/projects" className={buttonVariants({ variant: "ghost" })}>
        View all projects <ChevronRightIcon className="ml-2" size={20} />
      </Link>
    </section>
  );
}
