import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { AuroraBackground, ScrollProgress } from "@/components/portfolio/Background";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeswanth G — Data Scientist & Machine Learning Engineer" },
      {
        name: "description",
        content:
          "Editorial portfolio of Jeswanth G — Data Scientist, Machine Learning Engineer and AI Developer. Computer vision, research and applied ML projects.",
      },
      { property: "og:title", content: "Jeswanth G — Data Scientist & ML Engineer" },
      {
        property: "og:description",
        content:
          "Machine Learning Engineer, Researcher and Builder. Projects in computer vision, oceanographic research and healthcare AI.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <AuroraBackground />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
