import Link from "next/link";
import { ArrowLeft, Compass, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <section className="hero-surface relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-24">
      <div
        aria-hidden
        className="grid-glow pointer-events-none absolute inset-0 -z-10"
      />
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-5 py-2 font-mono text-sm">
            <span className="flex size-7 items-center justify-center rounded-full bg-primary/12 text-primary">
              <Compass className="size-4" aria-hidden />
            </span>
            <span className="text-muted-foreground">Route not found</span>
          </div>

          <p className="mt-8 font-mono text-sm font-bold tracking-[0.3em] text-primary md:text-base">
            ERROR 404
          </p>
          <h1 className="mt-4 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            You&apos;ve wandered{" "}
            <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              off the map
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
            The page you&apos;re looking for may have moved, changed its
            address, or never existed in the first place.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="size-4" aria-hidden />
                Back to home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                <ArrowLeft className="size-4" aria-hidden />
                Explore projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
