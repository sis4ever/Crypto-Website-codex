import { formatPercent } from "@/lib/format";
import { cn } from "@/lib/cn";

export function ChangeIndicator({ value }: { value: number }) {
  const positive = value >= 0;

  return (
    <span
      className={cn(
        "font-medium",
        positive ? "text-terminal-green" : "text-terminal-red"
      )}
    >
      {formatPercent(value)}
    </span>
  );
}
