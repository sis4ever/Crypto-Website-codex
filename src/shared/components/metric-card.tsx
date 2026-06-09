import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function MetricCard({
  label,
  value,
  detail,
  tone = "cyan",
  icon,
}: {
  label: string;
  value: string;
  detail: string;
  tone?: "cyan" | "green" | "amber" | "violet";
  icon?: ReactNode;
}) {
  return (
    <div className="border border-terminal-border bg-terminal-panel p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.18em] text-terminal-muted">
          {label}
        </p>
        <span
          className={cn(
            "text-terminal-cyan",
            tone === "green" && "text-terminal-green",
            tone === "amber" && "text-terminal-amber",
            tone === "violet" && "text-terminal-violet"
          )}
        >
          {icon}
        </span>
      </div>
      <p className="mt-3 text-2xl font-semibold text-terminal-text">{value}</p>
      <p className="mt-1 text-sm text-terminal-muted">{detail}</p>
    </div>
  );
}
