import Link from "next/link";

import { projects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project/project-card";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="border-t border-border pt-20 pb-24 md:pt-20 md:pb-32"
    >
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="A few things I've built end to end — problem, solution, and the tradeoffs in between."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/projects">View all projects</Link>
          </Button>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
