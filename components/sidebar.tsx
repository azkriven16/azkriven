import { siteConfig } from "@/config/site";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Sidebar() {
  return (
    <div className="w-full h-full">
      <div className="lg:fixed">
        <h1 className="text-4xl font-black tracking-wide sm:text-5xl pb-1">
          {siteConfig.author}
        </h1>
        <h3 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          Front-End Engineer / Developer
        </h3>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
          I build exceptional and accessible digital experiences for the web.
        </p>

        <nav className="mt-20">
          <ul className="hidden md:block w-fit">
            {siteConfig.nav.map(({ href, text }) => (
              <a href={href}>
                <li
                  key={text}
                  className="text-muted-foreground hover:text-foreground hover:underline tracking-widest font-semibold font-mono my-2"
                >
                  {`<${text}/>`}
                </li>
              </a>
            ))}
          </ul>

          <ul className="flex gap-2 mt-20">
            {siteConfig.socials.map((social) => (
              <li key={social.text}>
                <Link
                  href={social.href}
                  target="_blank"
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <social.Icon size={20} />
                </Link>
              </li>
            ))}
            <ModeToggle />
          </ul>
        </nav>
      </div>
    </div>
  );
}
