import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/data/metadata";
import { FaWhatsapp } from "react-icons/fa6";

export function CallToAction() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="container-page">
        <Reveal className="grid-glow relative overflow-hidden rounded-2xl border border-border px-8 py-16 text-center md:px-16">
          <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Have something worth building? Let's talk it through.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
            {siteConfig.role} available for full-time roles and Freelance, and
            select contract opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#contact">
                Get in touch
                <ArrowRight />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-green-500/30 bg-green-500/10 text-green-400 hover:border-green-400 hover:bg-green-500/20 hover:text-green-300"
            >
              <a
                href="https://wa.me/2349053377719?text=Hi%20Ukanna,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="size-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
