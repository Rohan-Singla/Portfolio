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
  GraduationCapIcon,
  ActivityIcon,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", description: "Back to top", icon: HomeIcon, section: "hero" },
  { label: "About", description: "Learn about me", icon: UserIcon, section: "about" },
  { label: "Work", description: "My work experience", icon: BriefcaseIcon, section: "work" },
  { label: "Education", description: "My educational background", icon: GraduationCapIcon, section: "education" },
  { label: "Skills", description: "Technologies I work with", icon: CodeIcon, section: "skills" },
  { label: "GitHub", description: "My contribution activity", icon: ActivityIcon, section: "github" },
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
    const onKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onCustom = () => setOpen(true);
    window.addEventListener("keydown", onKeydown);
    window.addEventListener("open-command-palette", onCustom);
    return () => {
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("open-command-palette", onCustom);
    };
  }, []);

  const scrollTo = (section: string) => {
    setOpen(false);
    setTimeout(() => {
      if (section === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const openLink = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      if (href.startsWith("mailto")) {
        window.location.href = href;
      } else {
        window.open(href, "_blank");
      }
    }, 50);
  };

  return (
    <>
      {/* Floating trigger — fixed top, full width */}
      {!open && (
        <div className="fixed top-0 inset-x-0 z-40 pt-4 pb-3 pointer-events-none">
          <div className="max-w-2xl mx-auto px-6">
          <button
            onClick={() => setOpen(true)}
            className="pointer-events-auto w-full flex items-center gap-3 px-5 py-3.5 rounded-xl border border-border bg-background/90 backdrop-blur-md shadow-md text-sm text-muted-foreground hover:text-foreground hover:border-violet-500/40 transition-all"
          >
            <SearchIcon className="size-4 shrink-0" />
            <span className="flex-1 text-left">Search or jump to...</span>
            <kbd className="px-2 py-1 rounded-md bg-muted font-mono text-xs">⌘K</kbd>
          </button>
          </div>
        </div>
      )}

      {open && (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/60 backdrop-blur-sm"
      style={{ paddingTop: "18vh" }}
      onMouseDown={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg mx-4"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <Command
          className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
          style={{
            background: "hsl(240 10% 5.5%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          loop
        >
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <SearchIcon className="size-4 shrink-0" style={{ color: "rgba(255,255,255,0.3)" }} />
            <Command.Input
              placeholder="Type a command or search..."
              className="flex-1 py-4 text-sm bg-transparent focus:outline-none"
              style={{ color: "rgba(255,255,255,0.9)", caretColor: "#a78bfa" }}
            />
          </div>

          <Command.List className="overflow-y-auto p-2" style={{ maxHeight: "320px" }}>
            <Command.Empty
              className="py-8 text-center text-sm"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              No results found.
            </Command.Empty>

            <Command.Group heading="navigation">
              {NAV_ITEMS.map((item) => (
                <Command.Item
                  key={item.section}
                  value={item.label}
                  onSelect={() => scrollTo(item.section)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer outline-none transition-colors mb-0.5"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  <item.icon
                    className="size-4 shrink-0"
                    style={{ color: "#a78bfa" }}
                  />
                  <div>
                    <div className="font-medium text-[13px]" style={{ color: "rgba(255,255,255,0.9)" }}>
                      {item.label}
                    </div>
                    <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {item.description}
                    </div>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>

            <div className="my-1.5 h-px mx-2" style={{ background: "rgba(255,255,255,0.05)" }} />

            <Command.Group heading="socials & links">
              {SOCIAL_ITEMS.map((item) => (
                <Command.Item
                  key={item.label}
                  value={item.label}
                  onSelect={() => openLink(item.href)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer outline-none transition-colors mb-0.5"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  <item.icon
                    className="size-4 shrink-0"
                    style={{ color: "#a78bfa" }}
                  />
                  <div>
                    <div className="font-medium text-[13px]" style={{ color: "rgba(255,255,255,0.9)" }}>
                      {item.label}
                    </div>
                    <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {item.description}
                    </div>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          {/* Footer */}
          <div
            className="flex items-center gap-4 px-4 py-2.5 border-t"
            style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}
          >
            {[
              { keys: ["↑", "↓"], label: "navigate" },
              { keys: ["↵"], label: "select" },
              { keys: ["esc"], label: "close" },
            ].map(({ keys, label }) => (
              <span key={label} className="flex items-center gap-1.5" style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)" }}>
                {keys.map((k) => (
                  <kbd
                    key={k}
                    className="px-1.5 py-0.5 rounded font-mono"
                    style={{ fontSize: "9px", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
                  >
                    {k}
                  </kbd>
                ))}
                {label}
              </span>
            ))}
          </div>
        </Command>
      </div>
    </div>
      )}
    </>
  );
}
