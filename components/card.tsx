"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { projectsType } from "@/types";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

export default function BackdropCard({
  createdAt,
  description,
  href,
  imgDark,
  imgLight,
  source,
  text,
  tech,
}: projectsType) {
  return (
    <Card className="grid place-items-start grid-cols-3 p-4 group/card">
      <Link href={href} target="_blank" className="rounded-md">
        <img
          alt={`${text} image`}
          src={imgLight}
          loading="lazy"
          className="hidden dark:block aspect-video rounded border-2 border-gray-300 dark:border-slate-200/10 transition"
        />

        <img
          alt={`${text} image`}
          src={imgDark}
          loading="lazy"
          className="block dark:hidden aspect-video rounded border-2 border-gray-300 dark:border-slate-200/10 transition"
        />
      </Link>
      <CardContent className="col-span-2 space-y-3 w-full">
        <div className="flex justify-between items-center">
          <Link href={href} target="_blank">
            <CardTitle className="hover:underline text-base group-hover/card:text-primary flex gap-2">
              <p>{text} </p>
              <ArrowUpRight
                size={18}
                className="group-hover/card:leading-tight"
              />
            </CardTitle>
          </Link>
          <Link
            href={source}
            target="_blank"
            className="border-2 hover:border-primary rounded-full p-1 hover:text-primary"
          >
            <Github size={18} />
          </Link>
        </div>
        <CardDescription>{description}</CardDescription>
        <div>
          {tech?.map(({ href, text }) => (
            <Link key={href} href={href} target="_blank">
              <Badge
                className="text-foreground m-1 hover:text-primary hover:border"
                variant="outline"
              >
                {text}
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
