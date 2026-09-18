"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/metadata";
import { Mail } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 60, damping: 20, mass: 0.6 };
  const glowX = useSpring(useTransform(mouseX, (v) => `${v * 100}%`), springConfig);
  const glowY = useSpring(useTransform(mouseY, (v) => `${v * 100}%`), springConfig);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width);
    mouseY.set((event.clientY - bounds.top) / bounds.height);
  };

  return (
    <section
      onPointerMove={handlePointerMove}
      className="hero-surface relative isolate overflow-hidden pt-20 pb-20 md:pt-24 md:pb-24"
    >
      <div
        aria-hidden
        className="grid-glow pointer-events-none absolute inset-0 -z-10"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden opacity-70 md:block"
        style={{
          background: `radial-gradient(600px circle at ${glowX} ${glowY}, hsl(var(--primary) / 0.10), transparent 60%)`,
        }}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-5 py-2 font-mono text-sm"
        >
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-secondary" />
          </span>
          <span className="text-muted-foreground">
            Available for full-time & freelance
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-indigo-400 md:text-sm"
        >
          UKANNA RAYMOND — FULL STACK SOFTWARE ENGINEER
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
        >
          I build software that solves{" "}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent"
          >
            real problems
          </motion.span>{" "}
          and{" "}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="font-semibold text-cyan-300 dark:text-cyan-400"
          >
            scales with growth
          </motion.span>
          .
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button
            size="lg"
            onClick={() => {
              const section = document.getElementById("projects");

              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });

                window.history.replaceState(null, "", "#projects");
              }
            }}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const section = document.getElementById("contact");

              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });

                window.history.replaceState(null, "", "#contact");
              }
            }}
          >
            Hire Me
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center md:flex"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <ChevronDown className="size-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
