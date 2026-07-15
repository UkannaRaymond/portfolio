import type { Project } from "@/types";

// PLACEHOLDER — replace with your real projects, screenshots, and case studies.
export const projects: Project[] = [
  {
    slug: "ledgerline",
    title: "Ledgerline",
    description: "A real-time expense-splitting app for shared households.",
    summary:
      "Multi-tenant ledger app with real-time balances, recurring bills, and Plaid-linked settlements.",
    image: "/projects/ledgerline.svg",
    gallery: ["/projects/ledgerline.svg", "/projects/ledgerline.svg"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "WebSockets"],
    github: "https://github.com/your-username/ledgerline",
    liveUrl: "https://ledgerline.example.com",
    featured: true,
    year: "2025",
    role: "Solo builder — product, backend, and frontend",
    overview:
      "Ledgerline keeps shared-household finances in sync without the group-chat math. Balances update in real time across every member's device.",
    problem:
      "Existing splitting apps settle up in batches and don't handle recurring shared bills or partial payments well, which leads to stale balances and awkward reconciliation.",
    solution:
      "Built an event-sourced ledger where every expense, payment, and adjustment is an immutable event; balances are derived, not stored, so they're always auditable and always correct.",
    architecture:
      "Next.js App Router frontend with server components for read-heavy views, a Node service for the event log, PostgreSQL with a append-only ledger table, and a WebSocket layer for live balance updates.",
    challenges:
      "Getting real-time balance recalculation to stay fast as ledgers grew required moving from full replay to periodic snapshotting with incremental event application.",
    lessonsLearned:
      "Event sourcing paid for its complexity almost immediately the first time a user disputed a balance — being able to replay exactly what happened made support trivial.",
  },
  {
    slug: "fieldnote",
    title: "Fieldnote",
    description: "Offline-first note-taking for field researchers.",
    summary:
      "A PWA that lets research teams capture structured notes offline and sync seamlessly when back online.",
    image: "/projects/fieldnote.svg",
    gallery: ["/projects/fieldnote.svg", "/projects/fieldnote.svg"],
    tech: ["React", "TypeScript", "IndexedDB", "Node.js", "GraphQL"],
    github: "https://github.com/your-username/fieldnote",
    liveUrl: "https://fieldnote.example.com",
    featured: true,
    year: "2024",
    role: "Full stack engineer, team of 3",
    overview:
      "Fieldnote lets ecology and social-science research teams capture structured, geotagged notes in areas with no connectivity, then sync cleanly once back online.",
    problem:
      "Field researchers were losing data to spotty connectivity and reconciling conflicting notes by hand when multiple people edited the same record.",
    solution:
      "Implemented an offline-first architecture using IndexedDB as the source of truth on-device, with a CRDT-based merge strategy for conflict resolution on sync.",
    architecture:
      "React PWA with a service worker for offline asset caching, IndexedDB for local persistence, and a GraphQL API backed by Node.js that reconciles CRDT updates against PostgreSQL.",
    challenges:
      "Designing a merge strategy that field researchers could reason about — automatic merges needed to be predictable, not just conflict-free.",
    lessonsLearned:
      "Offline-first is as much a UX problem as an engineering one; showing clear sync status mattered more to users than the merge algorithm underneath it.",
  },
  {
    slug: "gridwatch",
    title: "Gridwatch",
    description: "A monitoring dashboard for distributed IoT sensor networks.",
    summary:
      "Ingests and visualizes telemetry from thousands of field sensors with sub-second alerting.",
    image: "/projects/gridwatch.svg",
    gallery: ["/projects/gridwatch.svg", "/projects/gridwatch.svg"],
    tech: ["Next.js", "Node.js", "Redis", "TimescaleDB", "Docker", "AWS"],
    github: "https://github.com/your-username/gridwatch",
    featured: false,
    year: "2023",
    role: "Backend-focused full stack engineer",
    overview:
      "Gridwatch ingests telemetry from distributed sensor hardware and gives operations teams a live view of network health with fast anomaly alerts.",
    problem:
      "The prior dashboard polled on a 30-second interval and couldn't scale past a few hundred sensors without lag, delaying anomaly detection.",
    solution:
      "Re-architected ingestion around a Redis stream buffer feeding TimescaleDB, with a WebSocket push layer so the dashboard reflects new readings in under a second.",
    architecture:
      "Sensors publish to an MQTT broker, a Node.js ingestion service normalizes and writes to Redis Streams, a worker persists to TimescaleDB, and Next.js serves the live dashboard.",
    challenges:
      "Keeping ingestion lossless during traffic spikes required backpressure handling and at-least-once delivery with idempotent writes downstream.",
    lessonsLearned:
      "Time-series-specific storage (TimescaleDB) removed an entire category of manual bucketing/rollup code we'd been maintaining by hand.",
  },
];
