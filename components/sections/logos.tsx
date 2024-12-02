import React from "@/components/logos/react";
import ShadcnUi from "@/components/logos/shadcn-ui";
import Tailwind from "@/components/logos/tailwind";
import TypeScript from "@/components/logos/typescript";
import Logo from "@/components/ui/logo";

export default function Logos() {
    return (
        <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
            <h2 className="text-md font-semibold">
                This portfolio is built with the best tools
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
                <Logo image={React} name="React" version="18.3.1" />
                <Logo image={TypeScript} name="TypeScript" version="5.6.2" />
                <Logo image={ShadcnUi} name="Shadcn/ui" version="2.0.7" />
                <Logo image={Tailwind} name="Tailwind" version="3.4.11" />
            </div>
        </div>
    );
}
