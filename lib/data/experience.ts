import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "exp-3",
    company: "Freelance",
    role: "Full Stack Software Engineer",
    start: "2025",
    end: "Present",
    location: "Remote",
    summary:
      "Building scalable web applications for startups and businesses, taking products from idea to deployment while focusing on performance, maintainability, and user experience.",

    highlights: [
      "Built responsive full-stack applications using Next.js, React, TypeScript, Node.js, and PostgreSQL.",
      "Developed secure authentication systems, REST APIs, dashboards, and database-driven applications.",
      "Worked directly with clients to gather requirements, iterate on features, and deploy production-ready software.",
    ],
  },

  {
    id: "exp-2",
    company: "HNG 14",
    role: "Software Engineering Intern",
    start: "April 2026",
    end: "June 2026",
    location: "On-site",
    summary:
      "Contributed to the development and maintenance of internal and customer-facing web applications while collaborating with senior engineers.",

    highlights: [
      "Built reusable frontend components using React and Tailwind CSS.",
      "Integrated frontend features with backend APIs and fixed production issues.",
      "Participated in code reviews, testing, and Agile development processes.",
    ],
  },

  {
    id: "exp-1",
    company: "Ashpot",
    role: "Software Engineering Intern",
    start: "2023",
    end: "2024",
    location: "On-site",
    summary:
      "Supported the engineering team by implementing features, resolving bugs, and improving user interfaces.",

    highlights: [
      "Developed responsive user interfaces from design specifications.",
      "Collaborated with developers to deliver new product features.",
      "Maintained existing applications and improved overall user experience.",
    ],
  },
];

// import type { ExperienceItem } from "@/types";

// // PLACEHOLDER — replace with your real work history.
// export const experience: ExperienceItem[] = [
//   {
//     id: "exp-3",
//     company: "Nimbus Labs",
//     role: "Senior Full Stack Engineer",
//     start: "2023",
//     end: "Present",
//     location: "Remote",
//     summary:
//       "Leading the platform team rebuilding the core product on Next.js and a Node/PostgreSQL backend.",
//     highlights: [
//       "Cut median page load time by 42% by moving key routes to server components and streaming.",
//       "Designed the service's event-driven billing pipeline, processing ~2M events/day.",
//       "Mentor two mid-level engineers; run the team's architecture review sessions.",
//     ],
//   },
//   {
//     id: "exp-2",
//     company: "Fieldstone Software",
//     role: "Full Stack Engineer",
//     start: "2021",
//     end: "2023",
//     location: "Austin, TX",
//     summary:
//       "Owned the customer-facing dashboard end to end, from data modeling to the React front end.",
//     highlights: [
//       "Shipped a real-time collaboration feature used by 30k+ weekly active users.",
//       "Migrated the legacy REST API to GraphQL, reducing over-fetching on mobile clients.",
//       "Introduced CI/CD with GitHub Actions, cutting deploy time from 25 to 4 minutes.",
//     ],
//   },
//   {
//     id: "exp-1",
//     company: "Brightpath Digital",
//     role: "Software Engineer",
//     start: "2019",
//     end: "2021",
//     location: "Chicago, IL",
//     summary:
//       "Built and maintained client web applications across the agency's e-commerce portfolio.",
//     highlights: [
//       "Delivered 6 production Shopify Plus and custom React storefronts.",
//       "Built an internal component library adopted across 4 client teams.",
//     ],
//   },
// ];
