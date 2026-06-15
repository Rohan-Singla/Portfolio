import { GithubGraph } from "@/components/github-graph";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { getPortfolioData } from "@/lib/portfolio-data";
import Link from "next/link";
import Markdown from "react-markdown";

export const dynamic = "force-dynamic";

const BLUR_FADE_DELAY = 0.04;

const projectIconMap: Record<string, React.ReactNode> = {
  github: <Icons.github className="size-3" />,
  youtube: <Icons.youtube className="size-3" />,
  globe: <Icons.globe className="size-3" />,
};

const hackathonIconMap: Record<string, React.ReactNode> = {
  github: <Icons.github className="h-4 w-4" />,
  youtube: <Icons.youtube className="h-4 w-4" />,
};

export default function Page() {
  const portfolio = getPortfolioData();

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
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
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {portfolio.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {portfolio.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge
                  variant="secondary"
                  className="dark:bg-violet-500/10 dark:text-violet-300 dark:border dark:border-violet-500/20 hover:dark:bg-violet-500/20 transition-colors"
                >
                  {skill}
                </Badge>
              </BlurFade>
            ))}
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
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 px-3 py-1 text-sm font-medium">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  recents.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {portfolio.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
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
                  {portfolio.hackathons.length}+ hackathons — collaborating with people
                  from around the globe and seeing what motivated individuals
                  can build together.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {portfolio.hackathons.map((h, id) => (
                <BlurFade
                  key={h.title + h.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
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
