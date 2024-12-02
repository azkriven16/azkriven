import React from "@/components/logos/react";
import ShadcnUi from "@/components/logos/shadcn-ui";
import Tailwind from "@/components/logos/tailwind";
import TypeScript from "@/components/logos/typescript";
import Logo from "@/components/ui/logo";

export default function Logos() {
    return (
        <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
            <h2 className="text-md font-semibold">
                This portfolio is built with
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
                <Logo image={React} name="React" />
                <Logo image={TypeScript} name="TypeScript" />
                <Logo image={ShadcnUi} name="Shadcn/ui" />
                <Logo image={Tailwind} name="Tailwind" />
            </div>
        </div>
    );
}
