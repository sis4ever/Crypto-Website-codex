import type { RiskLevel } from "@/shared/types/common";
import { cn } from "@/lib/cn";

export function RiskBadge({ risk }: { risk: RiskLevel }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center border px-2 text-xs font-medium",
        risk === "Low" && "border-terminal-green/50 text-terminal-green",
        risk === "Medium" && "border-terminal-cyan/50 text-terminal-cyan",
        risk === "High" && "border-terminal-amber/50 text-terminal-amber",
        risk === "Extreme" && "border-terminal-red/50 text-terminal-red"
      )}
    >
      {risk}
    </span>
  );
}
