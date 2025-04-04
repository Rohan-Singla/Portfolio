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
          type: "Website",
          href: "https://apturax.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/RohanCreations/ApturaX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video:"",
      image: "/aptura.jpg",
    },
    {
      title: "TokenLaunchPad",
      href: "https://rohan-token-launchpad.vercel.app/",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "Created a solana token launchpad which lets people create tokens,transfer tokens,view token holdings on devnet.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        "web3.js",
        "SPL Library",
        "Solana Wallet Adapter"
      ],
      links: [
        {
          type: "Website",
          href: "https://rohan-token-launchpad.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/RohanCreations/Solana-TokenLaunchpad",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/launchpad.jpg",
      video: "",
    },
    {
      title: "Wallet Adapter",
      href: "https://rohan-wallet-adapter.vercel.app/",
      dates: "September 2024- October 2024",
      active: true,
      description:
        "Developed an Wallet Adapter which lets you airdrop SOL, create multiple ETH and SOL wallets ,transfer",
      technologies: [
        "React.js",
        "Javascript",
        "Web3.js",
        "Ethers.js",
        "TailwindCSS",
        "Solana Wallet Adapter",
        "Jupiter API",
      ],
      links: [
        {
          type: "Website",
          href: "https://rohan-wallet-adapter.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/RohanCreations/Wallet-Adapter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/adapter.jpg",
      video: "",
    },
    {
      title: "Portfolio",
      href: "https://rohanbuilds.vercel.app/",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "Created my new portfolio website to showcase myself and my work.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Rohan-Singla/Portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio.jpg",
      video:
        "",
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
