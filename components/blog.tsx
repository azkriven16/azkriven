import { siteConfig } from "@/config/site";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export default function Blog() {
  return (
    <section className="space-y-5 text-muted-foreground" id="Blog">
      <h1 className="font-bold uppercase text-foreground">Blog</h1>
      <ul>
        {siteConfig.blog.map(({ date, description, href, title }) => (
          <li key={title} className="my-5">
            <Link href={href} target="_blank">
              <Card className="grid place-items-start grid-cols-3 p-4 group/card">
                <p className="text-xs text-muted-foreground uppercase aspect-video">
                  {date}
                </p>
                <CardContent className="col-span-2 space-y-3 w-full">
                  <div className="flex justify-between items-center">
                    <CardTitle className="hover:underline text-base group-hover/card:text-primary gap-2">
                      <p>{title}</p>
                    </CardTitle>
                  </div>
                  <CardDescription>{description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="https://what-the-blog.vercel.app/"
        target="_blank"
        className={buttonVariants({ variant: "ghost" })}
      >
        View all blogs <ChevronRightIcon className="ml-2" size={20} />
      </Link>
    </section>
  );
}
