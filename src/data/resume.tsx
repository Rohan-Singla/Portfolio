import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rohan Singla",
  initials: "RS",
  url: "https://rohanbuilds.vercel.app/",
  location: "Delhi, Greater Noida IN",
  locationLink: "https://www.google.com/maps/place/punjab",
  description:
    "Full Stack | Rust | Backend/Infra | Solana Engineer",
  summary:
    "In 2023, I shifted from being a **Graphic Designer & Digital Marketer** to build **scalable backend services** and **blockchain dApps**. Experienced in **Web2 and Web3 Development** with a growing focus on **Rust**, **Infra**, **System Design**, and **DevOps**. Passionate about **open source**, continuous learning, and solving challenging engineering problems at scale.",
  avatarUrl: "/current.jpeg",
  openToWork: true,
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Javascript",
    "PHP",
    "Postgres",
    "Docker",
    "Kubernetes",
    "CSS",
    "Shadcn",
    "Tailwind",
    "Bootstrap",
    "Prisma",
    "Drizzle",
    "Ethers.js",
    "Web3.js",
    "Git",
    "WebSockets",
    "MySQL",
    "MongoDB"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "rohansinglawork@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rohan-Singla",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohan-singla100/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/rohanBuilds",
        icon: Icons.x,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@rohansinglawork",
        icon: Icons.medium,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:rohansinglawork@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "456 IP",
      href: "https://www.linkedin.com/company/dcthree",
      badges: [],
      location: "Remote",
      title: "Frontend & Web3 Dev",
      logoUrl: "/dcthree.jpeg",
      start: "Sep 2024",
      end: "Present",
      description:
        "Built the complete frontend for the company's products with client-side blockchain integrations, wallets, payments, and on-chain interactions.",
    },
    {
      company: "Aranyaaa",
      badges: [],
      href: "https://www.linkedin.com/company/aranyaaa",
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/aranyaaa.jpeg",
      start: "June 2024",
      end: "Sep 2024",
      description:
        "Developed the entire backend for Aranyaaa's clothing web application using PHP and MySQL.",
    },
    {
      company: "AngelBells",
      href: "https://www.facebook.com/angelbells.co",
      badges: [],
      location: "Punjab, IN",
      title: "Full Stack Dev & Digital Marketer",
      logoUrl: "/angelbells.jpg",
      start: "January 2024",
      end: "June 2024",
      description:
        "Helped the company increase sales on marketplaces and developed the full web application from scratch.",
    },
  ],
  projects: [
    {
      title: "Finlearn AI",
      href: "https://finlearn-blue.vercel.app/",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "For the Perplexity AI Hackathon, my team and I built Finlearn AI, a platform that adapts to your learning style and financial goals, delivering personalized education that sticks.",
      technologies: [
        "Next.js",
        "Typescript",
        "API Integrations",
        "Python FastAPI",
        "Firebase",
        "Redux",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://finlearn-blue.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://youtu.be/bvVVK2Degio",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      video: "",
      image: "/finlearn.jpg",
    },
    {
      title: "ABS Finance",
      href: "https://github.com/ABSFinance/colloseum_monorepo",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "For the Breakout Hackathon by Colosseum, my team and I built ABS Finance, an AI-powered tool that finds and allocates your assets to the highest-yielding opportunities across Solana vaults.",
      technologies: [
        "Next.js",
        "Typescript",
        "Python",
        "Privy.io",
        "VoltrSDK",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=mNUVM8me7r0",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ABSFinance/colloseum_monorepo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "",
      image: "/absfinance.jpg",
    },
    {
      title: "Solanautics",
      href: "https://github.com/Rohan-Singla/Solanautics",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "For the Redacted Hackathon by Solana, my team and I built Solanautics, a tool using the Solscan API that helps you stay updated, track wallets, follow smart money, and set price alerts. Won 3rd place.",
      technologies: [
        "Next.js",
        "Typescript",
        "Solscan API",
        "Telegram and Helius API",
        "Cron Jobs",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.loom.com/share/9f1c5a2fea9240f5a46d0d2b3f05d529",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rohan-Singla/Solanautics",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "",
      image: "/solanautics.png",
    },
    {
      title: "ApturaX",
      href: "https://apturax.tech/",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "For the Metamove AI Hackathon, my team and I built ApturaX, an AI Agent on Aptos for X (Twitter) that delivers real-time updates about the Aptos chain.",
      technologies: [
        "Next.js",
        "Typescript",
        "API Integrations",
        "PostgreSQL",
        "Aptos",
        "AI Agent Kits",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Demo",
          href: "https://youtu.be/sEH0WLo-ozQ",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/RohanCreations/ApturaX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "",
      image: "/aptura.jpg",
    },
  ],
  hackathons: [
    {
      title: "Perplexity AI Hackathon",
      dates: "May 1st - 30th, 2025",
      location: "Remote, Online",
      description:
        "Developed Finlearn AI, a platform to personalize financial education.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/435/465/datas/gallery.jpg",
      mlh: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/435/465/datas/gallery.jpg",
      links: [
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://youtu.be/bvVVK2Degio",
        },
      ],
    },
    {
      title: "Colosseum Breakout Hackathon",
      dates: "April 10th - May 10th, 2025",
      location: "Remote, Online",
      description:
        "Developed ABS Finance, a DeFi platform to optimize your yield on Solana.",
      image:
        "https://static.narrative-violation.com/2wR8ZX49Q4ekUMm_PotAl",
      mlh: "https://static.narrative-violation.com/2wR8ZX49Q4ekUMm_PotAl",
      links: [
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=mNUVM8me7r0",
        },
      ],
    },
    {
      title: "Redacted Hackathon",
      dates: "April 1st - April 20th, 2025",
      location: "Remote, Online",
      description:
        "Developed Solanautics, a wallet tracking and smart money tool built on Solscan.",
      win: "3rd Place · $500",
      image: "/reward.jpg",
      mlh: "/reward.jpg",
      links: [
        {
          title: "Demo",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.loom.com/share/9f1c5a2fea9240f5a46d0d2b3f05d529",
        },
      ],
    },
    {
      title: "Metamove Hackathon",
      dates: "March 1st - 30th, 2025",
      location: "Remote, Online",
      description:
        "Developed ApturaX, a Twitter AI Agent built on the Aptos chain.",
      image:
        "https://pbs.twimg.com/profile_images/1899451259234516994/F4_kXkWh_200x200.jpg",
      mlh: "https://pbs.twimg.com/profile_images/1899451259234516994/F4_kXkWh_200x200.jpg",
      links: [
        {
          title: "Project Repo",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhayporwals/aptura",
        },
      ],
    },
    {
      title: "Solana Radar",
      dates: "October 3rd - November 10th, 2024",
      location: "Remote, Online",
      description:
        "Developed an on-chain lending platform in DeFi that helps people earn yield.",
      image:
        "https://aethir.com/icon.svg?a61a75a286780336",
      mlh: "https://aethir.com/icon.svg?a61a75a286780336",
      links: [],
    },
  ],
} as const;
