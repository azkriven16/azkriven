import { Metadata } from "next";
import { ContactComponent } from "./_components/contact";

export const metadata: Metadata = {
    title: "Contact | Euger Bonete",
    description:
        "Get to know more about my background and qualifications as a software engineer crafting intuitive web solutions.",
};
export default function Contact() {
    return <ContactComponent />;
}
