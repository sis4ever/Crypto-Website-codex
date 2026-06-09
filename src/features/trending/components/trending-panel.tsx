import { Flame } from "lucide-react";
import { ChainBadge } from "@/shared/components/chain-badge";
import { SourceLabel } from "@/shared/components/source-label";
import { trendingPairs } from "@/shared/mock-data";

export function TrendingPanel() {
  return (
    <section className="border border-terminal-border bg-terminal-panel p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-terminal-cyan">
            Trending
          </p>
          <h3 className="mt-1 text-lg font-semibold text-terminal-text">
            Assets receiving attention
          </h3>
        </div>
        <SourceLabel label="DexScreener mock" />
      </div>
      <div className="space-y-3">
        {trendingPairs.slice(0, 4).map((pair) => (
          <article
            key={`${pair.chain}-${pair.pair}`}
            className="flex items-center justify-between gap-3 border border-terminal-border bg-terminal-panelAlt p-3"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-medium text-terminal-text">{pair.pair}</p>
                {pair.isBoosted && (
                  <span className="inline-flex h-6 items-center gap-1 border border-terminal-amber/50 px-2 text-xs text-terminal-amber">
                    <Flame className="h-3 w-3" />
                    Boosted
                  </span>
                )}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <ChainBadge chain={pair.chain} />
                <span className="text-xs text-terminal-muted">{pair.dex}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-terminal-green">
                +{pair.volumeGrowth.toFixed(1)}%
              </p>
              <p className="text-xs text-terminal-muted">
                liquidity +{pair.liquidityGrowth.toFixed(1)}%
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
