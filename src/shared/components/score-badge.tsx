import { cn } from "@/lib/cn";

export function ScoreBadge({ score }: { score: number }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 min-w-12 items-center justify-center border px-2 text-sm font-semibold",
        score >= 85 && "border-terminal-green/60 bg-terminal-green/10 text-terminal-green",
        score < 85 && score >= 75 && "border-terminal-cyan/60 bg-terminal-cyan/10 text-terminal-cyan",
        score < 75 && "border-terminal-amber/60 bg-terminal-amber/10 text-terminal-amber"
      )}
    >
      {score}
    </span>
  );
}
