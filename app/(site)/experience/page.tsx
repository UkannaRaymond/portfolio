import type { Metadata } from "next";

import { Experience } from "@/components/sections/experience";
import { CallToAction } from "@/components/sections/call-to-action";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where I've worked and what I built there.",
};

export default function ExperiencePage() {
  return (
    <>
      <div className="pt-32 md:pt-40" />
      <Experience />
      <CallToAction />
    </>
  );
}
