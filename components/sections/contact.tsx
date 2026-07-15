"use client";

import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { socials } from "@/lib/data/socials";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  mail: HiOutlineMail,
};

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().max(0),
  message: z.string().min(10, "Say a bit more — at least 10 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  async function onSubmit(values: ContactValues) {
    // This hidden field should remain empty. Bots commonly fill every input.
    if (values.company) {
      form.reset();
      return;
    }

    setIsSubmitting(true);
    try {
      // EmailJS public identifiers are provided at build time by Next.js.
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS is not configured.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          reply_to: values.email,
          message: values.message,
        },
        { publicKey },
      );

      toast.success("Message sent — I'll get back to you soon.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Try again, or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="border-t border-border py-20 md:py-24">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Contact"
              title="Let's work together"
              description="Have a role, project, or idea in mind? Send a note and I'll reply within a day."
            />
          </div>
        </Reveal>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* LEFT SIDE */}

          <Reveal delay={0.05}>
            <div className="space-y-8">
              {/* CONTACT CARDS */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* Email */}
                <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <CardContent className="flex h-full items-center gap-4 p-5">
                    <Mail className="size-5 text-primary" />

                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-sm text-muted-foreground">
                        ukannand@example.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <CardContent className="flex h-full items-center gap-4 p-5">
                    <MapPin className="size-5 text-primary" />

                    <div>
                      <p className="font-semibold text-primary">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Nigeria • Remote Worldwide
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* SOCIALS */}

              <div>
                <p className="mb-4 bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-xs font-bold uppercase tracking-[0.25em] text-transparent">
                  Find me online
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {socials.map((social) => {
                    const Icon = iconMap[social.icon as keyof typeof iconMap];

                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target={
                          social.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          social.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        onClick={(e) => {
                          (e.currentTarget as HTMLAnchorElement).blur();
                        }}
                        className="group rounded-xl focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                          <CardContent className="flex items-center justify-between p-5">
                            <div className="flex items-start gap-4">
                              <Icon className="mt-1 size-5 text-primary transition-colors group-hover:text-cyan-400" />

                              <div>
                                <p className="font-semibold">{social.label}</p>

                                <p className="text-sm text-muted-foreground">
                                  {social.description}
                                </p>
                              </div>
                            </div>

                            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
          {/* RIGHT SIDE */}

          <Reveal delay={0.1}>
            <Card className="border-border/70 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <input
                      {...form.register("company")}
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute h-px w-px overflow-hidden opacity-0"
                    />
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jane Doe"
                              autoComplete="name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="jane@company.com"
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project..."
                              className="min-h-36 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 size-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 size-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
