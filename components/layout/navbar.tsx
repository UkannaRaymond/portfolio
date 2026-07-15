"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { mainNav } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/data/metadata";
import { cn } from "@/lib/utils";
import { ScrollLink } from "../scroll";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (pathname !== "/") return;

    const sections = mainNav
      .map((link) => document.querySelector(link.href))
      .filter(
        (section): section is HTMLElement => section instanceof HTMLElement,
      );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname !== "/") return;
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/75 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-primary"
        style={{ scaleX: progress / 100 }}
      />
      <div className="container-page flex h-16 items-center justify-between">
        <ScrollLink
          href="#home"
          className="cursor-pointer font-mono text-base font-medium tracking-tight text-foreground focus-visible:ring-0 focus-visible:outline-none"
        >
          {siteConfig.name}
          <span className="text-primary">.</span>
        </ScrollLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {mainNav.map((link) => {
            const isActive = pathname === "/" && activeSection === link.href;
            const href = pathname === "/" ? link.href : `/${link.href}`;
            return (
              <a
                key={link.href}
                href={href}
                onClick={(event) => handleSectionClick(event, link.href)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-px h-px bg-primary"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
