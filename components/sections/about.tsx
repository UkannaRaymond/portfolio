import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";

const principles = [
  {
    title: "Build it once, build it right",
    body: "I optimize for dependable software, treating edge cases as part of the feature—not an afterthought.",
  },
  {
    title: "Think beyond the ticket",
    body: "When I add a feature, I look for opportunities to simplify what comes next through reusable pieces and clear architecture.",
  },
  {
    title: "Code people can follow",
    body: "I value code that's easy to understand and modify over code that's merely impressive.",
  },
];

export function About() {
  return (
    // <section id="about" className="border-t border-border py-24 md:py-32">
    <section
      id="about"
      className="border-t border-border pt-12 pb-20 md:pt-16 md:pb-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading eyebrow="About" title="Who I am and how I work" />
        </Reveal>

        <div className="mt-10 text-lg grid gap-12 md:grid-cols-2">
          <Reveal delay={0.05} className="space-y-3 text-muted-foreground">
            <p>
              I'm Ukanna Raymond, a full-stack engineer. I build reliable
              software from the database schema to the pixel a user actually
              clicks on. I work across the entire product stack, turning complex
              business problems into systems that are fast, correct, and built
              to last.
            </p>
            <p>
              Most of my work has been on products where reliability matters
              —from billing systems to real-time applications. I care about
              clean architecture, thoughtful design, and software that's built
              to last.
            </p>
            <p>
              If you need an engineer who can own a problem from idea to
              production and cares as much about long-term maintainability as
              shipping, let's talk.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-6 text-lg">
              {principles.map((p) => (
                <li key={p.title} className="border-l-2 border-primary/40 pl-5">
                  <p className="font-medium">{p.title}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
