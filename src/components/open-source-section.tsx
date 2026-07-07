"use client";

import { useEffect, useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

interface PR {
  id: number;
  title: string;
  html_url: string;
  state: "open" | "closed";
  merged_at: string | null;
  created_at: string;
  number: number;
}

interface RepoResult {
  repoFullName: string;
  prs: PR[];
  merged: number;
  open: number;
  closed: number;
}

interface GitHubPRData {
  total: number;
  merged: number;
  open: number;
  closed: number;
  repos: RepoResult[];
}

const PROJECT_META: Record<
  string,
  { name: string; description: string; language: string; languageColor: string }
> = {
  "anza-xyz/agave": {
    name: "Agave",
    description:
      "Solana's high-performance validator client — the core runtime powering the Solana network, written entirely in Rust.",
    language: "Rust",
    languageColor: "bg-orange-500",
  },
  "rust-lang/rust": {
    name: "Rust",
    description:
      "The Rust programming language compiler and standard library — systems programming with memory safety and zero-cost abstractions.",
    language: "Rust",
    languageColor: "bg-orange-500",
  },
  "paradedb/paradedb": {
    name: "ParadeDB",
    description:
      "Postgres-native full-text search and analytics built on top of PostgreSQL, designed as a modern alternative to Elasticsearch.",
    language: "Rust",
    languageColor: "bg-orange-500",
  },
  "openslate/openslate": {
    name: "OpenSlate",
    description:
      "Open-source platform for content analytics and creator intelligence, helping brands make data-driven decisions.",
    language: "TypeScript",
    languageColor: "bg-blue-500",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function PRStatusBadge({ pr }: { pr: PR }) {
  if (pr.merged_at) {
    return (
      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/25">
        <svg className="size-2.5" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z" />
        </svg>
        Merged
      </span>
    );
  }
  if (pr.state === "open") {
    return (
      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-green-500/15 text-green-400 border border-green-500/25">
        <svg className="size-2.5" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
        </svg>
        Open
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-zinc-500/15 text-zinc-400 border border-zinc-500/25">
      <svg className="size-2.5" viewBox="0 0 16 16" fill="currentColor">
        <path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 3.25 1Zm9.5 5.5a.75.75 0 0 1 .75.75v3.378a2.251 2.251 0 1 1-1.5 0V7.25a.75.75 0 0 1 .75-.75Zm-2.03-5.273a.75.75 0 0 1 1.06 0l.97.97.97-.97a.748.748 0 0 1 1.265.332.75.75 0 0 1-.205.729l-.97.97.97.97a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-.97-.97-.97.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l.97-.97-.97-.97a.75.75 0 0 1 0-1.06ZM3.25 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
      </svg>
      Closed
    </span>
  );
}

function PRPanel({ repo }: { repo: RepoResult }) {
  const meta = PROJECT_META[repo.repoFullName];

  if (repo.prs.length === 0) {
    return (
      <div className="flex items-center justify-center py-8 text-sm text-muted-foreground">
        No PRs found yet.
      </div>
    );
  }

  return (
    <div className="divide-y divide-border/40 max-h-72 overflow-y-auto">
      {repo.prs.map((pr) => (
        <a
          key={pr.id}
          href={pr.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted/30 transition-colors group/pr"
        >
          <div className="flex-1 min-w-0 space-y-0.5">
            <p className="text-sm text-foreground/85 group-hover/pr:text-violet-400 transition-colors line-clamp-1 leading-snug">
              {pr.title}
            </p>
            <p className="text-[11px] text-muted-foreground tabular-nums">
              #{pr.number} · {formatDate(pr.created_at)}
            </p>
          </div>
          <div className="shrink-0">
            <PRStatusBadge pr={pr} />
          </div>
        </a>
      ))}
    </div>
  );
}

function ProjectCard({
  repo,
  selected,
  onSelect,
}: {
  repo: RepoResult;
  selected: boolean;
  onSelect: () => void;
}) {
  const meta = PROJECT_META[repo.repoFullName] ?? {
    name: repo.repoFullName.split("/")[1],
    description: "",
    language: "Code",
    languageColor: "bg-zinc-500",
  };

  const total = repo.prs.length;

  return (
    <button
      onClick={onSelect}
      className={cn(
        "w-full text-left rounded-xl border p-4 transition-all duration-200 flex flex-col gap-2.5",
        selected
          ? "border-violet-500/50 bg-violet-500/5 shadow-sm shadow-violet-500/10"
          : "border-border bg-card/40 hover:border-violet-500/30 hover:bg-muted/20"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-sm text-foreground">{meta.name}</span>
            <span className="text-[10px] text-muted-foreground font-mono">
              {repo.repoFullName.split("/")[0]}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <span
            className={cn(
              "text-[10px] font-medium px-1.5 py-0.5 rounded-md border",
              selected
                ? "bg-violet-500/20 text-violet-300 border-violet-500/30"
                : "bg-muted/50 text-muted-foreground border-border"
            )}
          >
            {total} PR{total !== 1 ? "s" : ""}
          </span>
          <svg
            className={cn(
              "size-3.5 text-muted-foreground transition-transform duration-200",
              selected && "rotate-180 text-violet-400"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 text-left">
        {meta.description}
      </p>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span className={cn("size-2 rounded-full", meta.languageColor)} />
          <span className="text-[11px] text-muted-foreground">{meta.language}</span>
        </div>
        {repo.merged > 0 && (
          <span className="text-[11px] text-violet-400">{repo.merged} merged</span>
        )}
        {repo.open > 0 && (
          <span className="text-[11px] text-green-400">{repo.open} open</span>
        )}
        {repo.closed > 0 && (
          <span className="text-[11px] text-zinc-400">{repo.closed} closed</span>
        )}
      </div>
    </button>
  );
}

export function OpenSourceSection() {
  const [data, setData] = useState<GitHubPRData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/github-prs")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(true);
        else setData(d);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const selectedRepo = data?.repos.find((r) => r.repoFullName === selected);

  return (
    <section id="open-source">
      <div className="space-y-5 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Open Source</h2>
            {data && (
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>
                  <span className="text-violet-400 font-medium">{data.merged}</span> merged
                </span>
                <span>
                  <span className="text-green-400 font-medium">{data.open}</span> open
                </span>
                <span className="font-medium">{data.total} total</span>
              </div>
            )}
          </div>
        </BlurFade>

        {loading && (
          <div className="grid grid-cols-2 gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-28 rounded-xl bg-muted/40 animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center h-24 rounded-xl border border-dashed border-border text-muted-foreground text-sm">
            Could not load GitHub PR data.
          </div>
        )}

        {data && (
          <>
            <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
              <div className="grid grid-cols-2 gap-3">
                {data.repos.map((repo) => (
                  <ProjectCard
                    key={repo.repoFullName}
                    repo={repo}
                    selected={selected === repo.repoFullName}
                    onSelect={() =>
                      setSelected((prev) =>
                        prev === repo.repoFullName ? null : repo.repoFullName
                      )
                    }
                  />
                ))}
              </div>
            </BlurFade>

            {selectedRepo && (
              <BlurFade delay={0.05}>
                <div className="rounded-xl border border-violet-500/20 bg-card/60 backdrop-blur-sm overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/50 bg-violet-500/5">
                    <div className="flex items-center gap-2">
                      <svg
                        className="size-3.5 text-violet-400"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z" />
                      </svg>
                      <span className="text-xs font-semibold text-foreground/80">
                        {PROJECT_META[selectedRepo.repoFullName]?.name ?? selectedRepo.repoFullName}{" "}
                        — Pull Requests
                      </span>
                    </div>
                    <a
                      href={`https://github.com/${selectedRepo.repoFullName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-violet-400 hover:underline font-medium"
                    >
                      View on GitHub ↗
                    </a>
                  </div>
                  <PRPanel repo={selectedRepo} />
                </div>
              </BlurFade>
            )}
          </>
        )}
      </div>
    </section>
  );
}
