import type { Metadata } from "next";

import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about roles, projects, or ideas.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-32 md:pt-40" />
      <Contact />
    </>
  );
}
