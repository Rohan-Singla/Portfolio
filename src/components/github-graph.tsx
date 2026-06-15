"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useRef, useState, Component, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const BLOCK_MARGIN = 3;
const WEEKS = 53;

const darkTheme = {
  dark: [
    "hsl(240, 8%, 12%)",
    "#3b0764",
    "#6d28d9",
    "#7c3aed",
    "#a78bfa",
  ],
};

type Year = number | "last";

class CalendarErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export function GithubGraph({ username }: { username: string }) {
  const [mounted, setMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState<Year>("last");
  const containerRef = useRef<HTMLDivElement>(null);
  const [blockSize, setBlockSize] = useState(10);

  const currentYear = new Date().getFullYear();
  const years: Year[] = [currentYear, currentYear - 1, currentYear - 2];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const calculated = Math.floor((width - 10) / WEEKS) - BLOCK_MARGIN;
      setBlockSize(Math.min(12, Math.max(6, calculated)));
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) {
    return <div className="h-36 rounded-lg bg-muted/40 animate-pulse" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div ref={containerRef} className="w-full overflow-hidden">
        <CalendarErrorBoundary
          key={selectedYear}
          fallback={
            <div className="flex items-center justify-center h-36 rounded-lg border border-dashed border-border text-muted-foreground text-sm">
              No contribution data for {selectedYear}.
            </div>
          }
        >
          <GitHubCalendar
            username={username}
            year={selectedYear}
            theme={darkTheme}
            colorScheme="dark"
            blockSize={blockSize}
            blockRadius={3}
            blockMargin={BLOCK_MARGIN}
            fontSize={11}
            throwOnError={false}
            style={{ color: "hsl(var(--muted-foreground))", width: "100%" }}
          />
        </CalendarErrorBoundary>
      </div>
      <div className="flex justify-center gap-2 flex-wrap">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year === selectedYear ? "last" : year)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
              selectedYear === year
                ? "bg-violet-600 text-white border-violet-600"
                : "border-border text-muted-foreground hover:border-violet-500 hover:text-violet-400"
            )}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
