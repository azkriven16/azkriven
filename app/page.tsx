import About from "@/components/about";
import Blog from "@/components/blog";
import Certificates from "@/components/certificates";
import Footer from "@/components/footer";
import Project from "@/components/projects";
import React from "react";

export default function Home() {
    return (
        <main className="space-y-20">
            <About />
            <Project />
            <Certificates />
            <Blog />
            <Footer />
        </main>
    );
}
