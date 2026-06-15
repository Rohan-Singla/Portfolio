"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Something went wrong</h2>
          <button
            onClick={reset}
            className="px-4 py-2 rounded-lg border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition-colors text-sm"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
