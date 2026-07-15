import type { Metadata } from "next";

import { projects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project/project-card";
import { CallToAction } from "@/components/sections/call-to-action";

export const metadata: Metadata = {
  title: "Projects",
  description: "Everything I've shipped, with the reasoning behind it.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-40 pb-8 md:pt-48">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="All work"
              title="Projects"
              description="Each one links to a full case study — the problem, the approach, and what I'd do differently."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
