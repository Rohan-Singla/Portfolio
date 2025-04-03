import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohan Singla",
  initials: "RS",
  url: "https://dillion.io",
  location: "Punjab, IN",
  locationLink: "https://www.google.com/maps/place/punjab",
  description:
    "A Full Stack Web3 Developer. I love building things and helping people. Very active on X",
  summary:
    "In 2023, I shifted from being a Graphic Designer & Digital Marketer to full-time Web2 & Web3 development. I started out as a freelancer, diving into blockchain, building dApps, and contributing in Web3 . Actively participating in hackathons and events , I've explored DeFi , Social , Gaming always pushing boundaries. My goal is to build impactful, scalable solutions in Web3 and beyond. 🚀",
  avatarUrl: "/me.jpg",
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
      email: {
        name: "Send Email",
        url: "http://rohansinglawork@gmail.com/",
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
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
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
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Metamove Hackathon",
      dates: "March 1st - 30th, 2025",
      location: "Remote,Online",
      description:
        "Developed ApturaX an Twitter AI Agent built on Aptos.",
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
      location: "Remote,Online",
      description:
        "Developed a onchain lending platform in DeFi which helped people earn yield",
      image:
        "https://aethir.com/icon.svg?a61a75a286780336",
      mlh: "https://aethir.com/icon.svg?a61a75a286780336",
      links: [],
    },
  ],
} as const;
