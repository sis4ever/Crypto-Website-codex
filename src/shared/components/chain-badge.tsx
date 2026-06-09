import type { ChainSlug } from "@/shared/types/common";
import { cn } from "@/lib/cn";

const labels: Record<ChainSlug, string> = {
  ethereum: "Ethereum",
  base: "Base",
  arbitrum: "Arbitrum",
};

export function ChainBadge({ chain }: { chain: ChainSlug }) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center border px-2 text-xs font-medium",
        chain === "ethereum" && "border-terminal-cyan/50 text-terminal-cyan",
        chain === "base" && "border-terminal-green/50 text-terminal-green",
        chain === "arbitrum" && "border-terminal-violet/50 text-terminal-violet"
      )}
    >
      {labels[chain]}
    </span>
  );
}
