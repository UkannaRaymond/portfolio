import Link from "next/link";
import { Mail } from "lucide-react";

import { siteConfig } from "@/lib/data/metadata";
import { socials } from "@/lib/data/socials";
import { mainNav } from "@/lib/data/navigation";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  mail: Mail,
  resume: Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-lg text-foreground">
            {siteConfig.name}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
          aria-label="Footer"
        >
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Icon className="size-4" />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col-reverse items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
