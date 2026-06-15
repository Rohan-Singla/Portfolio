"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  CodeIcon,
  FolderIcon,
  TrophyIcon,
  MailIcon,
  GithubIcon,
  SearchIcon,
  DownloadIcon,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", description: "Back to top", icon: HomeIcon, section: "hero" },
  { label: "About", description: "Learn about me", icon: UserIcon, section: "about" },
  { label: "Work", description: "My work experience", icon: BriefcaseIcon, section: "work" },
  { label: "Education", description: "My educational background", icon: UserIcon, section: "education" },
  { label: "Skills", description: "Technologies I work with", icon: CodeIcon, section: "skills" },
  { label: "Projects", description: "Things I've built", icon: FolderIcon, section: "projects" },
  { label: "Hackathons", description: "Competitions and wins", icon: TrophyIcon, section: "hackathons" },
  { label: "Contact", description: "Get in touch", icon: MailIcon, section: "contact" },
];

const SOCIAL_ITEMS = [
  { label: "GitHub", description: "github.com/Rohan-Singla", href: "https://github.com/Rohan-Singla", icon: GithubIcon },
  { label: "LinkedIn", description: "linkedin.com/in/rohan-singla100", href: "https://www.linkedin.com/in/rohan-singla100/", icon: UserIcon },
  { label: "X / Twitter", description: "x.com/rohanBuilds", href: "https://x.com/rohanBuilds", icon: SearchIcon },
  { label: "Medium", description: "medium.com/@rohansinglawork", href: "https://medium.com/@rohansinglawork", icon: SearchIcon },
  { label: "Email", description: "rohansinglawork@gmail.com", href: "mailto:rohansinglawork@gmail.com", icon: MailIcon },
  { label: "Download Resume", description: "Get my resume PDF", href: "/resume.pdf", icon: DownloadIcon },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const scrollTo = (section: string) => {
    setOpen(false);
    if (section === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLink = (href: string) => {
    setOpen(false);
    window.open(href, href.startsWith("mailto") ? "_self" : "_blank");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[18vh] bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          className="rounded-2xl border border-white/10 bg-[#111117] shadow-2xl shadow-black/50 overflow-hidden"
          loop
        >
          <div className="flex items-center gap-3 px-4 border-b border-white/10">
            <SearchIcon className="size-4 text-white/30 shrink-0" />
            <Command.Input
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent py-4 text-sm text-white placeholder-white/30 focus:outline-none"
            />
          </div>

          <Command.List className="max-h-72 overflow-y-auto p-2 scrollbar-none">
            <Command.Empty className="py-8 text-center text-sm text-white/30">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="navigation"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-white/30"
            >
              {NAV_ITEMS.map((item) => (
                <Command.Item
                  key={item.section}
                  value={item.label}
                  onSelect={() => scrollTo(item.section)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-violet-500/15 data-[selected=true]:text-violet-300 text-white/70 hover:text-white transition-colors outline-none"
                >
                  <item.icon className="size-4 shrink-0 text-violet-400/60" />
                  <div>
                    <div className="font-medium text-[13px]">{item.label}</div>
                    <div className="text-[11px] text-white/30">{item.description}</div>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Separator className="my-1 h-px bg-white/5" />

            <Command.Group
              heading="socials & links"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-white/30"
            >
              {SOCIAL_ITEMS.map((item) => (
                <Command.Item
                  key={item.label}
                  value={item.label}
                  onSelect={() => openLink(item.href)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-violet-500/15 data-[selected=true]:text-violet-300 text-white/70 hover:text-white transition-colors outline-none"
                >
                  <item.icon className="size-4 shrink-0 text-violet-400/60" />
                  <div>
                    <div className="font-medium text-[13px]">{item.label}</div>
                    <div className="text-[11px] text-white/30">{item.description}</div>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          <div className="flex items-center gap-4 px-4 py-2.5 border-t border-white/5 bg-white/[0.02]">
            <span className="flex items-center gap-1.5 text-[10px] text-white/25">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px]">↑↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-white/25">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px]">↵</kbd>
              select
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-white/25">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px]">esc</kbd>
              close
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
}
