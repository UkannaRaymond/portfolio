"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechStack } from "@/components/project/tech-stack";
import { GithubIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 22, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [6, -6]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-6, 6]),
    springConfig,
  );
  const glowX = useTransform(mouseX, (v) => `${v * 100}%`);
  const glowY = useTransform(mouseY, (v) => `${v * 100}%`);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width);
    mouseY.set((event.clientY - bounds.top) / bounds.height);
  };

  const handlePointerLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="h-full"
    >
      <Card className="group relative flex h-full flex-col overflow-hidden border-border/70 bg-card/70 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:shadow-[0_24px_60px_hsl(224_39%_8%/0.2)]">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(360px circle at ${glowX} ${glowY}, hsl(var(--primary) / 0.14), transparent 70%)`,
          }}
        />

        <Link
          href={`/projects/${project.slug}`}
          className="relative block aspect-video overflow-hidden bg-muted"
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <div>
            <div className="flex items-start justify-between gap-3">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-base font-semibold tracking-tight hover:text-primary">
                  {project.title}
                </h3>
              </Link>
              <span className="font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>
            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
              {project.description}
            </p>
          </div>

          <TechStack tech={project.tech} max={5} />

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
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
