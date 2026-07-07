import { GithubGraph } from "@/components/github-graph";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectsSection } from "@/components/projects-section";
import { OpenSourceSection } from "@/components/open-source-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { getPortfolioData } from "@/lib/portfolio-data";
import Link from "next/link";
import Markdown from "react-markdown";

export const dynamic = "force-dynamic";

const BLUR_FADE_DELAY = 0.04;

const SKILL_GROUPS: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "Typescript", "Javascript", "CSS", "Tailwind", "Bootstrap", "Shadcn"],
  Backend: ["Node.js", "Python", "PHP", "Rust","Prisma", "Drizzle", "Axum", "SQLx", "WebSockets" , "Redis"],
  Database: ["Postgres", "MySQL", "MongoDB" , "ClickhouseDB"],
  Blockchain: ["Ethers.js", "Web3.js", "Solana", "Anchor" , "Rust"],
  Infrastructure: ["Docker", "Kubernetes", "Git", "Kafka", "BullMQ"],
};

const hackathonIconMap: Record<string, React.ReactNode> = {
  github: <Icons.github className="h-4 w-4" />,
  youtube: <Icons.youtube className="h-4 w-4" />,
  globe: <Icons.globe className="h-4 w-4" />,
};

export default function Page() {
  const portfolio = getPortfolioData();
  const winsCount = portfolio.hackathons.filter((h) => h.win).length;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-2">
              <BlurFade delay={BLUR_FADE_DELAY}>
                {DATA.openToWork && (
                  <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-1">
                    <span className="relative flex size-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-green-500" />
                    </span>
                    Available for opportunities
                  </div>
                )}
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-muted-foreground"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border-2 border-violet-500/30 ring-2 ring-violet-500/20 ring-offset-2 ring-offset-background">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="object-cover object-top"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-base leading-relaxed text-muted-foreground dark:prose-invert prose-strong:text-foreground prose-strong:font-semibold">
            {DATA.summary}
          </Markdown>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { value: "2+", label: "Years building" },
              { value: `${portfolio.hackathons.length}+`, label: "Global Hackathons" },
              { value: `${winsCount}`, label: winsCount === 1 ? "Prize won" : "Hackathons won" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-violet-500/5 border border-violet-500/10 text-center"
              >
                <span className="text-2xl font-bold text-violet-400">{stat.value}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <div className="relative pl-6 border-l border-border space-y-8">
            {portfolio.work.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <div className="relative">
                  <div className="absolute -left-[25px] top-1.5 size-3 rounded-full border-2 border-violet-500 bg-background" />
                  <div className="flex items-start gap-3">
                    <Avatar className="size-9 border flex-shrink-0 mt-0.5 bg-muted">
                      <AvatarImage src={work.logoUrl} alt={work.company} className="object-contain" />
                      <AvatarFallback className="text-xs">{work.company[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-sm leading-none">{work.company}</h3>
                          {work.href && (
                            <a
                              href={work.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:bg-violet-500/20 transition-colors"
                            >
                              <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              View Company
                            </a>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground tabular-nums shrink-0">
                          {work.start} – {work.end ?? "Present"}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {work.title}
                        {work.location ? ` · ${work.location}` : ""}
                      </p>
                      {work.description && (
                        <Markdown className="prose prose-sm max-w-full dark:prose-invert prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold prose-p:my-0.5 prose-li:my-0 prose-ul:my-1 prose-ul:pl-4 [&>ul]:list-disc [&>ul]:space-y-0.5 pt-1 text-sm">
                          {work.description}
                        </Markdown>
                      )}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection projects={portfolio.projects as any} />

      <OpenSourceSection />

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="relative pl-6 border-l border-border space-y-8">
            {portfolio.education.map((edu, id) => (
              <BlurFade key={edu.school} delay={BLUR_FADE_DELAY * 7.5 + id * 0.05}>
                <div className="relative">
                  <div className="absolute -left-[25px] top-1.5 size-3 rounded-sm border-2 border-violet-400 bg-background" />
                  <div className="flex items-start gap-3">
                    <Avatar className="size-9 border flex-shrink-0 mt-0.5 bg-muted">
                      <AvatarImage src={edu.logoUrl} alt={edu.school} className="object-contain" />
                      <AvatarFallback className="text-xs">{edu.school[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-sm leading-none">{edu.school}</h3>
                          {edu.href && (
                            <a
                              href={edu.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:bg-violet-500/20 transition-colors"
                            >
                              <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Visit
                            </a>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground tabular-nums shrink-0">
                          {edu.start} – {edu.end || "Present"}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{edu.degree}</p>
                      {edu.description && (
                        <Markdown className="prose prose-sm max-w-full dark:prose-invert prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-strong:font-semibold prose-p:my-0.5 prose-li:my-0 prose-ul:my-1 prose-ul:pl-4 [&>ul]:list-disc [&>ul]:space-y-0.5 pt-1 text-sm">
                          {edu.description}
                        </Markdown>
                      )}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="space-y-4">
            {Object.entries(SKILL_GROUPS).map(([category, categorySkills], groupIdx) => {
              const available = portfolio.skills.filter((s) => categorySkills.includes(s));
              if (!available.length) return null;
              return (
                <BlurFade key={category} delay={BLUR_FADE_DELAY * 10 + groupIdx * 0.08}>
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold text-violet-400/70 uppercase tracking-widest">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {available.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="dark:bg-violet-500/10 dark:text-violet-300 dark:border dark:border-violet-500/20 hover:dark:bg-violet-500/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <section id="github">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
            <h2 className="text-xl font-bold">GitHub Activity</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10.7}>
            <GithubGraph username={DATA.contact.social.GitHub.url.split("/").pop()!} />
          </BlurFade>
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 px-3 py-1 text-sm font-medium">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I love participating in hackathons. I&apos;ve built projects in{" "}
                  {portfolio.hackathons.length}+ hackathons — collaborating with people from around
                  the globe and seeing what motivated individuals can build together.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {portfolio.hackathons.map((h, id) => (
                <BlurFade key={h.title + h.dates} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                  <HackathonCard
                    title={h.title}
                    description={h.description}
                    location={h.location}
                    dates={h.dates}
                    image={h.image}
                    win={h.win || undefined}
                    links={h.links.map((l) => ({
                      title: l.title,
                      href: l.href,
                      icon: hackathonIconMap[l.icon] ?? <Icons.globe className="h-4 w-4" />,
                    }))}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 px-3 py-1 text-sm font-medium">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a DM on any social or{" "}
                <Link
                  href="https://linktr.ee/rohanBuilds"
                  className="text-violet-500 dark:text-violet-400 hover:underline"
                >
                  connect here
                </Link>
                {" "}— let&apos;s build something together.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
