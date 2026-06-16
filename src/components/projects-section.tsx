"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;
const INITIAL_COUNT = 4;

const projectIconMap: Record<string, React.ReactNode> = {
  github: <Icons.github className="size-3" />,
  youtube: <Icons.youtube className="size-3" />,
  globe: <Icons.globe className="size-3" />,
};

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly { type: string; href: string; icon: string }[];
  video: string;
  image: string;
};

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects">
      <div className="space-y-6 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Projects</h2>
            <span className="text-xs text-muted-foreground">{projects.length} total</span>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {visible.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links.map((l) => ({
                  type: l.type,
                  href: l.href,
                  icon: projectIconMap[l.icon] ?? <Icons.globe className="size-3" />,
                }))}
              />
            </BlurFade>
          ))}
        </div>
        {hasMore && (
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-violet-500/20 bg-violet-500/5 text-violet-400 hover:bg-violet-500/15 transition-colors"
              >
                {showAll ? (
                  <>
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                    Show less
                  </>
                ) : (
                  <>
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    View {projects.length - INITIAL_COUNT} more
                  </>
                )}
              </button>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
