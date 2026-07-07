import { NextResponse } from "next/server";

export const revalidate = 3600;

export interface PR {
  id: number;
  title: string;
  html_url: string;
  state: "open" | "closed";
  merged_at: string | null;
  created_at: string;
  number: number;
}

export interface RepoResult {
  repoFullName: string;
  prs: PR[];
  merged: number;
  open: number;
  closed: number;
}

const TRACKED_REPOS = [
  "anza-xyz/agave",
  "rust-lang/rust",
  "paradedb/paradedb",
  "MrSheerluck/openslate",
];

async function fetchPRsForRepo(username: string, repo: string): Promise<PR[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "portfolio-site",
  };
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const prs: PR[] = [];
  let page = 1;

  while (true) {
    const url = `https://api.github.com/search/issues?q=author:${username}+type:pr+repo:${repo}&per_page=100&page=${page}`;
    const res = await fetch(url, { headers, next: { revalidate: 3600 } });

    if (!res.ok) break;

    const data = await res.json();
    const items: any[] = data.items ?? [];

    for (const item of items) {
      prs.push({
        id: item.id,
        title: item.title,
        html_url: item.html_url,
        state: item.state,
        merged_at: item.pull_request?.merged_at ?? null,
        created_at: item.created_at,
        number: item.number,
      });
    }

    if (items.length < 100 || prs.length >= data.total_count) break;
    page++;
  }

  return prs;
}

export async function GET() {
  try {
    const username = "Rohan-Singla";

    const results: RepoResult[] = await Promise.all(
      TRACKED_REPOS.map(async (repo) => {
        const prs = await fetchPRsForRepo(username, repo);
        return {
          repoFullName: repo,
          prs,
          merged: prs.filter((p) => p.merged_at).length,
          open: prs.filter((p) => !p.merged_at && p.state === "open").length,
          closed: prs.filter((p) => !p.merged_at && p.state === "closed").length,
        };
      })
    );

    const allPRs = results.flatMap((r) => r.prs);

    return NextResponse.json({
      total: allPRs.length,
      merged: allPRs.filter((p) => p.merged_at).length,
      open: allPRs.filter((p) => !p.merged_at && p.state === "open").length,
      closed: allPRs.filter((p) => !p.merged_at && p.state === "closed").length,
      repos: results,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch PRs" }, { status: 500 });
  }
}
