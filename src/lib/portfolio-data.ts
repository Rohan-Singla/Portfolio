import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src/data/portfolio.json");

export type WorkEntry = {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string | null;
  description: string;
};

export type ProjectLink = {
  type: string;
  href: string;
  icon: string;
};

export type ProjectEntry = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  video: string;
  image: string;
};

export type HackathonLink = {
  title: string;
  href: string;
  icon: string;
};

export type HackathonEntry = {
  title: string;
  dates: string;
  location: string;
  description: string;
  win: string;
  image: string;
  links: HackathonLink[];
};

export type PortfolioData = {
  work: WorkEntry[];
  skills: string[];
  projects: ProjectEntry[];
  hackathons: HackathonEntry[];
};

export function getPortfolioData(): PortfolioData {
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

export function savePortfolioData(data: PortfolioData): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}
