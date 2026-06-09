import { TrendingPanel } from "@/features/trending/components/trending-panel";
import { trendingPairs } from "@/shared/mock-data";
import { ChainBadge } from "@/shared/components/chain-badge";

export function TrendingGrid() {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
      <TrendingPanel />
      <section className="border border-terminal-border bg-terminal-panel p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-terminal-cyan">
          Momentum Matrix
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {trendingPairs.map((pair) => (
            <article
              key={`${pair.chain}-${pair.pair}-matrix`}
              className="border border-terminal-border bg-terminal-panelAlt p-4"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-terminal-text">{pair.pair}</p>
                <ChainBadge chain={pair.chain} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-terminal-muted">Volume growth</p>
                  <p className="mt-1 text-xl font-semibold text-terminal-green">
                    +{pair.volumeGrowth.toFixed(1)}%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-terminal-muted">Liquidity growth</p>
                  <p className="mt-1 text-xl font-semibold text-terminal-cyan">
                    +{pair.liquidityGrowth.toFixed(1)}%
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
