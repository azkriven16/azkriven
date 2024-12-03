import SmoothScroll from "@/components/smooth-scroll";
import { Contact } from "./_components/contact";

export default function ContactPage() {
    return (
        <SmoothScroll>
            <main className="space-y-20 py-10">
                <Contact />
            </main>
        </SmoothScroll>
    );
}
