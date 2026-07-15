"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechStack } from "@/components/project/tech-stack";
import { GithubIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden hover:border-primary/35 hover:shadow-[0_18px_45px_hsl(224_39%_8%/0.16)]">
        <Link href={`/projects/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </Link>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <div className="flex items-start justify-between gap-3">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-lg font-semibold tracking-tight hover:text-primary">
                  {project.title}
                </h3>
              </Link>
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
          </div>

          <TechStack tech={project.tech} />

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            {project.liveUrl && (
              <Badge asChild variant="default" className="cursor-pointer">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight className="size-3" />
                </a>
              </Badge>
            )}
            {project.github && (
              <Badge asChild variant="muted" className="cursor-pointer">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="size-3" /> Code
                </a>
              </Badge>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="ml-auto text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Case study
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
