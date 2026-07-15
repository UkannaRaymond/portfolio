import type { SkillCategory } from "@/types";
import { skills } from "@/lib/data/skills";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const categoryOrder: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Cloud",
  "DevOps",
  "Tools",
  "Testing & Quality",
];

export function Skills() {
  const grouped = categoryOrder.map((category) => ({
    category,
    items: skills.filter((s) => s.category === category),
  }));

  return (
    <section id="skills" className="border-t border-border py-12 md:py-16">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What I build with"
            description="A working stack, not a wishlist — everything here has shipped in production."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {grouped.map(({ category, items }, i) => (
            <Reveal key={category} delay={i * 0.05}>
              <Card
                className="
                group
                h-full
                min-h-40
                p-8
                transition-all
                duration-300
                ease-out
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:border-primary/40
                hover:bg-primary/5
                hover:shadow-2xl
              "
              >
                <p className="font-mono font-semibold text-sm uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                  {category}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
