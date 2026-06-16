import Navbar from "@/components/navbar";
import { CommandPalette } from "@/components/command-palette";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const fontSans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const SEO_DESCRIPTION =
  "Rohan Singla is a Full Stack and Solana engineer building DeFi protocols, blockchain dApps, and scalable backend systems. 10+ hackathons, 2 prizes won. Open to opportunities.";

const SEO_KEYWORDS = [
  "Rohan Singla",
  "Full Stack Developer",
  "Solana Developer",
  "Rust Developer",
  "Backend Engineer",
  "Web3 Developer",
  "Blockchain Developer",
  "DeFi Developer",
  "Next.js Developer",
  "India Developer",
  "rohanbuilds",
  "Anchor smart contracts",
  "Solana dApp",
  "DevOps Engineer",
];

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Full Stack & Solana Engineer`,
    template: `%s | ${DATA.name}`,
  },
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  openGraph: {
    title: `${DATA.name} | Full Stack & Solana Engineer`,
    description: SEO_DESCRIPTION,
    url: DATA.url,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: `${DATA.name} — Full Stack & Solana Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} | Full Stack & Solana Engineer`,
    description: SEO_DESCRIPTION,
    creator: "@rohanBuilds",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: DATA.url,
  },
  verification: {
    google: "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  url: DATA.url,
  image: `${DATA.url}/current.jpeg`,
  jobTitle: "Full Stack & Solana Engineer",
  description: SEO_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/Rohan-Singla",
    "https://www.linkedin.com/in/rohan-singla100/",
    "https://x.com/rohanBuilds",
    "https://medium.com/@rohansinglawork",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <CommandPalette />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
