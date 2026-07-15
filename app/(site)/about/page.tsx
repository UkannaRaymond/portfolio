import type { Metadata } from "next";

import { About } from "@/components/sections/about";
import { CallToAction } from "@/components/sections/call-to-action";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am, what I build, and how I work.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-8 md:pt-48">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="About me"
              title="Engineering, considered."
              description="A closer look at how I think about building software."
            />
          </Reveal>
        </div>
      </section>
      <About />
      <CallToAction />
    </>
  );
}
