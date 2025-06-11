import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Rohan Singla",
  initials: "RS",
  url: "https://rohanbuilds.vercel.app/",
  location: "Punjab, IN",
  locationLink: "https://www.google.com/maps/place/punjab",
  description:
    "A Full Stack Web3 Developer. I love building things and Learning new things. Build In Public",
  summary:
    "In 2023, I shifted from being a Graphic Designer & Digital Marketer to full-time Web2 & Web3 development. I started out as a freelancer, diving into blockchain, building dApps, and contributing in Web3 . Actively participating in hackathons and events , I&apos;ve explored DeFi , Social , Gaming always pushing boundaries. My goal is to build impactful, scalable solutions in Web3 and beyond. 🚀",
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
        "As a frontend and web3 dev, I built the whole frontend for company's products with client side blockchain integrations like wallets , payments etc...",
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
        "As a backend developer, I developed the whole backend for Aranyaaa's clothing web application using PHP and MySQL.",
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
        "As a marketer and dev , I helped the company in increasing the sales on marketplaces, also developed the whole web application .",
    },
  ],
  projects: [
    {
      title: "Finlearn AI",
      href: "https://finlearn-blue.vercel.app/",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "When the Perplexity AI Hackathon got announed , I and my team developed Finlearn AI an platform adapts to your learning style and financial goals, delivering personalized education that sticks",
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
        "When the Breakout Hackathon by Colosseum got announed , I and my team developed ABS Finance an tool which  uses AI models to find and allocate your assets to the highest-yielding opportunities across solana and all the vaults.",
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
        "When the Redacted Hackathon by Solana got announed , I and my team developed Solanautics an tool built using Solscan which helps you stay updated , track wallets , smart money tracking , price alerts. Also won 3rd position with 500$.",
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
        "When the Metamove AI Hackathon got announed , I and my team developed ApturaX an AI Agent built on Aptos for X which gives real time updates about Aptos chain.",
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
        "Developed a onchain lending platform in DeFi which helps people earn yield.",
      image:
        "https://aethir.com/icon.svg?a61a75a286780336",
      mlh: "https://aethir.com/icon.svg?a61a75a286780336",
      links: [],
    },
  ],
} as const;
