import { experience } from "@/lib/data/experience";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border pt-12 pb-20 md:pt-16 md:pb-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
        </Reveal>

        <div className="relative mt-10 sm:mt-12">
          <div
            aria-hidden
            className="absolute left-1.75 top-2 bottom-2 w-px bg-border md:left-1.75"
          />

          <ol className="space-y-12">
            {experience.map((role, i) => (
              <Reveal key={role.id} delay={i * 0.06}>
                <li className="relative pl-8">
                  <span className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-primary bg-background" />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold">
                      {role.role} · {role.company}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {role.start} — {role.end}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.location}
                  </p>
                  <p className="mt-3 max-w-2xl text-muted-foreground">
                    {role.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
