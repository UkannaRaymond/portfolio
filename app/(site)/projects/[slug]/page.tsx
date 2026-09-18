import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/data/projects";
import { Button } from "@/components/ui/button";
import { TechStack } from "@/components/project/tech-stack";
import { ProjectGallery } from "@/components/project/project-gallery";
import { Reveal } from "@/components/reveal";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image }],
    },
  };
}

const caseStudySections: {
  key: keyof (typeof projects)[number];
  label: string;
}[] = [
  { key: "overview", label: "Overview" },
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "architecture", label: "Architecture" },
  { key: "challenges", label: "Challenges" },
  { key: "lessonsLearned", label: "Lessons learned" },
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="pt-24 pb-24 md:pt-28 md:pb-32">
      <div className="container-page max-w-3xl">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> All projects
          </Link>

          <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-xl text-lg text-muted-foreground">
                {project.summary}
              </p>
            </div>
            <span className="font-mono text-sm text-muted-foreground">
              {project.year}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <Button asChild size="sm">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight />
                </a>
              </Button>
            )}
            {project.github && (
              <Button asChild size="sm" variant="outline">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GithubIcon /> Source
                </a>
              </Button>
            )}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Role: </span>
            {project.role}
          </p>

          <div className="mt-4">
            <TechStack tech={project.tech} />
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-12">
          <ProjectGallery images={project.gallery} title={project.title} />
        </Reveal>

        <Separator className="my-14" />

        <div className="space-y-7">
          {caseStudySections.map(({ key, label }, i) => (
            <Reveal key={key} delay={i * 0.04}>
              <h2 className="font-mono text-xs uppercase tracking-widest text-primary">
                {label}
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                {project[key] as string}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
