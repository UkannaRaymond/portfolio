import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "workflo",
    title: "Workflo",
    description: "An open-source alternative to Slack for team communication.",
    summary:
      "A Slack-style team workspace: organizations, channels, threads, reactions, presence, and AI-assisted composing — with real-time delivery over a Cloudflare-hosted WebSocket layer.",
    image: "/projects/workflo-homepage.PNG",
    gallery: ["/projects/workflo-homepage.PNG", "/projects/workflo.PNG"],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "oRPC",
      "TanStack Query",
      "PostgreSQL",
      "Prisma",
      "Kinde",
      "PartyKit",
      "TipTap",
      "UploadThing",
      "Vercel AI SDK",
      "Arcjet",
    ],
    github: "https://github.com/UkannaRaymond/workflo",
    liveUrl: "https://workflo-peach.vercel.app/",
    featured: true,
    year: "2026",
    role: "Solo builder — product, backend, and frontend",
    overview:
      "Workflo is a Slack-style team workspace chat app built on the Next.js App Router, with organizations, channels, threads, emoji reactions, presence, rich-text messages, and AI-assisted composing and summarizing.",
    problem:
      "Teams that want a Slack-like workspace either pay for a closed platform or stitch together disconnected open-source tools that don't share auth, presence, or real-time state.",
    solution:
      "Built a single cohesive workspace app: each Kinde organization maps to a workspace containing channels, threaded replies render in a dedicated sidebar, and a TipTap-based composer supports rich text plus an AI 'Compose' assist. Reactions, presence, edits, and reply counts all propagate live through a PartyKit worker running on Cloudflare.",
    architecture:
      "Next.js App Router frontend talking to a typed oRPC layer over a single /rpc route, with TanStack Query for client-side data fetching and PostgreSQL via Prisma for persistence. Real-time state (presence, live messages, reactions) is handled by PartyKit/partyserver deployed as a Cloudflare Worker, separate from the request/response API path. Arcjet sits in front of write paths for rate limiting, bot detection, a WAF-style shield, and sensitive-info scanning.",
    challenges:
      "Keeping the real-time layer (PartyKit on Cloudflare) and the typed RPC layer (oRPC on Next.js) in sync — messages, reactions, and thread counts all need to feel instant on the sending client while staying consistent for every other connected member.",
    lessonsLearned:
      "Separating 'durable state' (Postgres via Prisma) from 'live state' (PartyKit) early made the real-time features much easier to reason about than trying to push everything through one request/response API.",
  },
  {
    slug: "newhaven-estate",
    title: "NewHaven Estate",
    description:
      "A modern real estate platform for discovering and managing property listings.",
    summary:
      "A property listings platform built with Next.js — browse and create listings, upload photos, and sign in with Google, all on a fast, responsive interface.",
    image: "/projects/newHaven-homepage.PNG",
    gallery: ["/projects/newHaven-homepage.PNG", "/projects/newHaven.PNG"],
    tech: [
      "Next.js",
      "TypeScript",
      "Neon (PostgreSQL)",
      "Cloudinary",
      "Better Auth",
      "Google OAuth",
      "Resend",
    ],
    github: "https://github.com/UkannaRaymond/NewHaven_Estate",
    liveUrl: "https://new-haven-estate.vercel.app/",
    featured: true,
    year: "2026",
    role: "Solo builder — product, backend, and frontend",
    overview:
      "NewHaven Estate makes discovering and managing property listings simple: create and browse listings with image galleries, sign in with Google, and get email notifications — all on a responsive, modern interface.",
    problem:
      "Small real-estate operators often need a listings site but don't want the overhead of a full CMS just to post properties with photos and handle basic inquiries.",
    solution:
      "Built a focused listings app with authentication (Better Auth + Google OAuth), Cloudinary-backed image uploads for property photos, Neon Postgres for storage, and Resend for transactional email.",
    architecture:
      "Next.js frontend and API routes, Neon serverless Postgres for listing data, Cloudinary for image hosting and transformation, Better Auth for session management, and Resend for email delivery.",
    challenges:
      "Handling multi-image property uploads reliably — validating, uploading to Cloudinary, and associating the results back with a listing record without leaving orphaned uploads on failure.",
    lessonsLearned:
      "Offloading image hosting and transformations to Cloudinary from day one avoided a lot of manual image-processing work later on.",
  },
  {
    slug: "inkflow",
    title: "InkFlow",
    description:
      "A full-stack blogging platform with real-time comments and presence.",
    summary:
      "A modern blogging platform built on Next.js 16 and Convex, with real-time comments, online presence, and authentication — designed for speed and a clean writing/reading experience.",
    image: "/projects/inkflow.PNG",
    gallery: ["/projects/inkflow.PNG", "/projects/inkflow-page.PNG"],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Convex",
      "Better Auth",
      "React Hook Form",
      "Zod",
    ],
    github: "https://github.com/UkannaRaymond/blog-inkflow",
    liveUrl: "https://blog-inkflow.vercel.app",
    featured: true,
    year: "2026",
    role: "Solo builder — product, backend, and frontend",
    overview:
      "InkFlow delivers a fast, secure, and responsive blogging experience: write and read posts, upload images, comment in real time, and see who else is online — all backed by Convex's real-time database and storage.",
    problem:
      "Most lightweight blogging setups either need a separate CMS and database, or fall back to static regeneration that can't support real-time comments and presence out of the box.",
    solution:
      "Used Convex as a single backend for data, file storage, and real-time subscriptions, paired with Better Auth for authentication. Comments and 'last seen' presence update live without any custom WebSocket plumbing, and forms are validated end-to-end with React Hook Form + Zod.",
    architecture:
      "Next.js 16 App Router with server and client components, Convex functions for queries/mutations/real-time subscriptions, Convex Storage for images, and Better Auth integrated directly with Convex for session management. Route and data caching are used to keep repeat visits fast.",
    challenges:
      "Getting authentication state to work cleanly across Convex's real-time subscriptions and Next.js server components required careful handling of session context on both sides.",
    lessonsLearned:
      "Convex's built-in real-time layer removed the need to hand-roll WebSocket sync for comments and presence — a lot of what would normally be its own subsystem came for free.",
  },
  {
    slug: "ai-page-summarizer",
    title: "AI Page Summarizer",
    description:
      "A Chrome extension that summarizes any webpage with AI in one click.",
    summary:
      "A Manifest V3 Chrome extension that extracts a webpage's readable content and generates a structured AI summary — bullet points, key insights, and estimated reading time — right in the popup.",
    image: "/projects/ai-page-summarizer.svg",
    gallery: ["/projects/ai-page-summarizer.svg"],
    tech: [
      "Chrome Extension (Manifest V3)",
      "JavaScript",
      "AI API (OpenAI/Gemini)",
    ],
    github: "https://github.com/UkannaRaymond/AI-page-summarizer",
    liveUrl: "",
    featured: true,
    year: "2026",
    role: "Solo builder",
    overview:
      "AI Page Summarizer extracts meaningful content from the current webpage, sends it to an AI API, and displays a clean, structured summary — bullet points, key insights, and estimated reading time — directly in the extension popup.",
    problem:
      "Long articles take time to read, and existing 'summarize this page' tools are often locked behind a specific browser, paid tier, or heavyweight app.",
    solution:
      "Built a lightweight Manifest V3 extension that extracts readable page content client-side, sends it to an AI API for summarization, and renders the result in a fast popup UI — with optional in-page highlighting of key sections and adjustable summary length.",
    architecture:
      "A content script extracts readable text from the active tab, a background service worker handles the AI API request, and the popup UI renders the structured summary, with light/dark mode and a clipboard-copy action.",
    challenges:
      "Reliably extracting 'the actual article' from arbitrary page layouts (ads, navigation, sidebars) before sending anything to the AI API.",
    lessonsLearned:
      "Content extraction quality mattered more to the end result than prompt tweaking — cleaning the input aggressively made the summaries noticeably better.",
  },
];
