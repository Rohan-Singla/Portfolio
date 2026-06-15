"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { PortfolioData, WorkEntry, ProjectEntry, HackathonEntry, ProjectLink, HackathonLink } from "@/lib/portfolio-data";

type Tab = "work" | "skills" | "projects" | "hackathons";

const ICON_OPTIONS = ["github", "youtube", "globe"];

function Field({
  label, value, onChange, multiline = false, placeholder = "",
}: {
  label: string; value: string; onChange: (v: string) => void; multiline?: boolean; placeholder?: string;
}) {
  const cls = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition-colors";
  return (
    <div className="space-y-1">
      <label className="text-xs text-white/40">{label}</label>
      {multiline ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} className={cls + " resize-none"} rows={3} placeholder={placeholder} />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} className={cls} placeholder={placeholder} />
      )}
    </div>
  );
}

function SectionHeader({ title, onAdd }: { title: string; onAdd: () => void }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <button onClick={onAdd} className="text-sm px-3 py-1.5 rounded-lg bg-violet-600/20 text-violet-400 border border-violet-500/30 hover:bg-violet-600/30 transition-colors">
        + Add
      </button>
    </div>
  );
}

function WorkSection({ data, setData }: { data: PortfolioData; setData: React.Dispatch<React.SetStateAction<PortfolioData>> }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const update = (i: number, field: keyof WorkEntry, value: string) => {
    setData((d) => {
      const work = [...d.work];
      work[i] = { ...work[i], [field]: value === "" && field === "end" ? null : value };
      return { ...d, work };
    });
  };

  const remove = (i: number) => {
    setData((d) => ({ ...d, work: d.work.filter((_, idx) => idx !== i) }));
    setExpanded(null);
  };

  const add = () => {
    setData((d) => ({
      ...d,
      work: [...d.work, { company: "New Company", href: "", badges: [], location: "", title: "Role", logoUrl: "", start: "", end: null, description: "" }],
    }));
    setExpanded(data.work.length);
  };

  return (
    <div>
      <SectionHeader title="Work Experience" onAdd={add} />
      <div className="space-y-2">
        {data.work.map((w, i) => (
          <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
            <button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/3 transition-colors text-left">
              <div>
                <span className="font-medium text-white text-sm">{w.company}</span>
                <span className="text-white/40 text-xs ml-2">{w.title}</span>
              </div>
              <span className="text-white/30 text-xs">{expanded === i ? "▲" : "▼"}</span>
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 space-y-3 border-t border-white/10 pt-3">
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Company" value={w.company} onChange={(v) => update(i, "company", v)} />
                  <Field label="Role / Title" value={w.title} onChange={(v) => update(i, "title", v)} />
                  <Field label="Location" value={w.location} onChange={(v) => update(i, "location", v)} />
                  <Field label="Company URL" value={w.href} onChange={(v) => update(i, "href", v)} />
                  <Field label="Start" value={w.start} onChange={(v) => update(i, "start", v)} placeholder="Jan 2024" />
                  <Field label="End (blank = Present)" value={w.end ?? ""} onChange={(v) => update(i, "end", v)} placeholder="Dec 2024" />
                  <Field label="Logo URL" value={w.logoUrl} onChange={(v) => update(i, "logoUrl", v)} placeholder="/company.png" />
                </div>
                <Field label="Description" value={w.description} onChange={(v) => update(i, "description", v)} multiline />
                <button onClick={() => remove(i)} className="text-xs text-red-400 hover:text-red-300 transition-colors">Remove entry</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsSection({ data, setData }: { data: PortfolioData; setData: React.Dispatch<React.SetStateAction<PortfolioData>> }) {
  const [newSkill, setNewSkill] = useState("");

  const add = () => {
    if (!newSkill.trim()) return;
    setData((d) => ({ ...d, skills: [...d.skills, newSkill.trim()] }));
    setNewSkill("");
  };

  const remove = (i: number) => {
    setData((d) => ({ ...d, skills: d.skills.filter((_, idx) => idx !== i) }));
  };

  return (
    <div>
      <SectionHeader title="Skills" onAdd={() => {}} />
      <div className="flex flex-wrap gap-2 mb-4">
        {data.skills.map((skill, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 border border-violet-500/20 rounded-full px-3 py-1 text-xs">
            {skill}
            <button onClick={() => remove(i)} className="text-violet-400/60 hover:text-red-400 transition-colors leading-none">×</button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="Add a skill…"
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition-colors"
        />
        <button onClick={add} className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-sm text-white transition-colors">Add</button>
      </div>
    </div>
  );
}

function LinksEditor({ links, onChange, type }: { links: ProjectLink[] | HackathonLink[]; onChange: (l: typeof links) => void; type: "project" | "hackathon" }) {
  const addLink = () => {
    if (type === "project") {
      onChange([...(links as ProjectLink[]), { type: "Link", href: "", icon: "globe" }]);
    } else {
      onChange([...(links as HackathonLink[]), { title: "Link", href: "", icon: "youtube" }]);
    }
  };

  const updateLink = (i: number, field: string, value: string) => {
    const updated = links.map((l, idx) => idx === i ? { ...l, [field]: value } : l);
    onChange(updated as typeof links);
  };

  const removeLink = (i: number) => {
    onChange(links.filter((_, idx) => idx !== i) as typeof links);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs text-white/40">Links</label>
        <button onClick={addLink} className="text-xs text-violet-400 hover:text-violet-300">+ link</button>
      </div>
      {links.map((link, i) => (
        <div key={i} className="grid grid-cols-3 gap-2 items-center">
          <input
            value={type === "project" ? (link as ProjectLink).type : (link as HackathonLink).title}
            onChange={(e) => updateLink(i, type === "project" ? "type" : "title", e.target.value)}
            placeholder="Label"
            className="bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-violet-500"
          />
          <input
            value={link.href}
            onChange={(e) => updateLink(i, "href", e.target.value)}
            placeholder="https://..."
            className="bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-violet-500"
          />
          <div className="flex gap-1">
            <select
              value={link.icon}
              onChange={(e) => updateLink(i, "icon", e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-violet-500"
            >
              {ICON_OPTIONS.map((o) => <option key={o} value={o} className="bg-[#1a1a2e]">{o}</option>)}
            </select>
            <button onClick={() => removeLink(i)} className="text-red-400/60 hover:text-red-400 text-sm transition-colors">×</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsSection({ data, setData }: { data: PortfolioData; setData: React.Dispatch<React.SetStateAction<PortfolioData>> }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const update = (i: number, field: keyof ProjectEntry, value: unknown) => {
    setData((d) => {
      const projects = [...d.projects];
      projects[i] = { ...projects[i], [field]: value };
      return { ...d, projects };
    });
  };

  const remove = (i: number) => {
    setData((d) => ({ ...d, projects: d.projects.filter((_, idx) => idx !== i) }));
    setExpanded(null);
  };

  const add = () => {
    setData((d) => ({
      ...d,
      projects: [...d.projects, { title: "New Project", href: "", dates: "", active: true, description: "", technologies: [], links: [], video: "", image: "" }],
    }));
    setExpanded(data.projects.length);
  };

  return (
    <div>
      <SectionHeader title="Projects" onAdd={add} />
      <div className="space-y-2">
        {data.projects.map((p, i) => (
          <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
            <button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/3 transition-colors text-left">
              <span className="font-medium text-white text-sm">{p.title}</span>
              <span className="text-white/30 text-xs">{expanded === i ? "▲" : "▼"}</span>
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 space-y-3 border-t border-white/10 pt-3">
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Title" value={p.title} onChange={(v) => update(i, "title", v)} />
                  <Field label="Dates" value={p.dates} onChange={(v) => update(i, "dates", v)} placeholder="Jan 2025 - Mar 2025" />
                  <Field label="Project URL" value={p.href} onChange={(v) => update(i, "href", v)} />
                  <Field label="Image Path" value={p.image} onChange={(v) => update(i, "image", v)} placeholder="/project.jpg" />
                </div>
                <Field label="Description" value={p.description} onChange={(v) => update(i, "description", v)} multiline />
                <div className="space-y-1">
                  <label className="text-xs text-white/40">Technologies (comma-separated)</label>
                  <input
                    value={p.technologies.join(", ")}
                    onChange={(e) => update(i, "technologies", e.target.value.split(",").map((t) => t.trim()).filter(Boolean))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="Next.js, TypeScript, ..."
                  />
                </div>
                <LinksEditor links={p.links} onChange={(l) => update(i, "links", l)} type="project" />
                <button onClick={() => remove(i)} className="text-xs text-red-400 hover:text-red-300 transition-colors">Remove entry</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function HackathonsSection({ data, setData }: { data: PortfolioData; setData: React.Dispatch<React.SetStateAction<PortfolioData>> }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const update = (i: number, field: keyof HackathonEntry, value: unknown) => {
    setData((d) => {
      const hackathons = [...d.hackathons];
      hackathons[i] = { ...hackathons[i], [field]: value };
      return { ...d, hackathons };
    });
  };

  const remove = (i: number) => {
    setData((d) => ({ ...d, hackathons: d.hackathons.filter((_, idx) => idx !== i) }));
    setExpanded(null);
  };

  const add = () => {
    setData((d) => ({
      ...d,
      hackathons: [...d.hackathons, { title: "New Hackathon", dates: "", location: "", description: "", win: "", image: "", links: [] }],
    }));
    setExpanded(data.hackathons.length);
  };

  return (
    <div>
      <SectionHeader title="Hackathons" onAdd={add} />
      <div className="space-y-2">
        {data.hackathons.map((h, i) => (
          <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
            <button onClick={() => setExpanded(expanded === i ? null : i)} className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/3 transition-colors text-left">
              <div>
                <span className="font-medium text-white text-sm">{h.title}</span>
                {h.win && <span className="ml-2 text-xs text-amber-400">🏆 {h.win}</span>}
              </div>
              <span className="text-white/30 text-xs">{expanded === i ? "▲" : "▼"}</span>
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 space-y-3 border-t border-white/10 pt-3">
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Title" value={h.title} onChange={(v) => update(i, "title", v)} />
                  <Field label="Dates" value={h.dates} onChange={(v) => update(i, "dates", v)} placeholder="Jan 1st - 30th, 2025" />
                  <Field label="Location" value={h.location} onChange={(v) => update(i, "location", v)} placeholder="Remote, Online" />
                  <Field label="Win (leave blank if none)" value={h.win} onChange={(v) => update(i, "win", v)} placeholder="1st Place · $1000" />
                  <Field label="Image URL" value={h.image} onChange={(v) => update(i, "image", v)} placeholder="/hackathon.png or https://..." />
                </div>
                <Field label="Description" value={h.description} onChange={(v) => update(i, "description", v)} multiline />
                <LinksEditor links={h.links} onChange={(l) => update(i, "links", l)} type="hackathon" />
                <button onClick={() => remove(i)} className="text-xs text-red-400 hover:text-red-300 transition-colors">Remove entry</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState<PortfolioData | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("work");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/api/admin/portfolio")
      .then((r) => {
        if (!r.ok) throw new Error("Unauthorized");
        return r.json();
      })
      .then(setData)
      .catch(() => router.push("/admin"));
  }, [router]);

  const save = async () => {
    setSaving(true);
    try {
      const r = await fetch("/api/admin/portfolio", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setToast(r.ok ? "Saved successfully!" : "Save failed.");
    } catch {
      setToast("Save failed.");
    } finally {
      setSaving(false);
      setTimeout(() => setToast(""), 3000);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-white/40 text-sm">Loading...</div>
      </div>
    );
  }

  const tabs: Tab[] = ["work", "skills", "projects", "hackathons"];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#0a0a0f]/80 backdrop-blur border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="font-bold text-base">Portfolio Admin</h1>
          <a href="/" target="_blank" className="text-xs text-white/30 hover:text-white/60 transition-colors">↗ View site</a>
        </div>
        <div className="flex items-center gap-3">
          {toast && (
            <span className={`text-xs px-3 py-1 rounded-full border ${toast.includes("success") ? "text-green-400 bg-green-500/10 border-green-500/20" : "text-red-400 bg-red-500/10 border-red-500/20"}`}>
              {toast}
            </span>
          )}
          <button
            onClick={save}
            disabled={saving}
            className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-sm font-medium transition-colors"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-sm transition-colors text-white/60"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/10 px-6 flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors capitalize ${
              activeTab === tab
                ? "border-violet-500 text-violet-400"
                : "border-transparent text-white/40 hover:text-white/70"
            }`}
          >
            {tab}
            <span className="ml-1.5 text-xs opacity-50">
              ({tab === "work" ? data.work.length : tab === "skills" ? data.skills.length : tab === "projects" ? data.projects.length : data.hackathons.length})
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        {activeTab === "work" && <WorkSection data={data} setData={setData as React.Dispatch<React.SetStateAction<PortfolioData>>} />}
        {activeTab === "skills" && <SkillsSection data={data} setData={setData as React.Dispatch<React.SetStateAction<PortfolioData>>} />}
        {activeTab === "projects" && <ProjectsSection data={data} setData={setData as React.Dispatch<React.SetStateAction<PortfolioData>>} />}
        {activeTab === "hackathons" && <HackathonsSection data={data} setData={setData as React.Dispatch<React.SetStateAction<PortfolioData>>} />}
      </div>
    </div>
  );
}
