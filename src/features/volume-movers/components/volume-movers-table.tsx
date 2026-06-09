import { ChainBadge } from "@/shared/components/chain-badge";
import { ChangeIndicator } from "@/shared/components/change-indicator";
import { SourceLabel } from "@/shared/components/source-label";
import { volumeMovers } from "@/shared/mock-data";
import { formatUsd } from "@/lib/format";
import { cn } from "@/lib/cn";

export function VolumeMoversTable({ compact = false }: { compact?: boolean }) {
  const rows = compact ? volumeMovers.slice(0, 4) : volumeMovers;

  return (
    <section className="border border-terminal-border bg-terminal-panel p-4">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-terminal-cyan">
            Volume Movers
          </p>
          <h3 className="mt-1 text-lg font-semibold text-terminal-text">
            DEX pairs with accelerating activity
          </h3>
        </div>
        <SourceLabel label="Source: DexScreener mock" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-terminal-border text-xs uppercase tracking-[0.16em] text-terminal-muted">
              <th className="py-3 pr-4 font-medium">Pair</th>
              <th className="py-3 pr-4 font-medium">Chain</th>
              <th className="py-3 pr-4 font-medium">Liquidity</th>
              <th className="py-3 pr-4 font-medium">24h Volume</th>
              <th className="py-3 pr-4 font-medium">Vol Change</th>
              <th className="py-3 pr-4 font-medium">Price</th>
              <th className="py-3 font-medium">DEX</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={`${row.chain}-${row.pair}`}
                className="border-b border-terminal-border/70 last:border-0"
              >
                <td className="py-3 pr-4 font-medium text-terminal-text">{row.pair}</td>
                <td className="py-3 pr-4">
                  <ChainBadge chain={row.chain} />
                </td>
                <td className="py-3 pr-4 text-terminal-muted">{formatUsd(row.liquidityUsd)}</td>
                <td className="py-3 pr-4 text-terminal-text">{formatUsd(row.volume24hUsd)}</td>
                <td className="py-3 pr-4">
                  <span
                    className={cn(
                      "inline-flex border px-2 py-1 text-xs font-medium",
                      row.volumeChange24h > 70
                        ? "border-terminal-green/50 text-terminal-green"
                        : "border-terminal-cyan/50 text-terminal-cyan"
                    )}
                  >
                    +{row.volumeChange24h.toFixed(1)}%
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <ChangeIndicator value={row.priceChange24h} />
                </td>
                <td className="py-3 text-terminal-muted">{row.dex}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
