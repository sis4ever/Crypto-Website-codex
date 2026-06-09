import { ChainBadge } from "@/shared/components/chain-badge";
import { ChangeIndicator } from "@/shared/components/change-indicator";
import { SourceLabel } from "@/shared/components/source-label";
import { chainPulse } from "@/shared/mock-data";
import { formatUsd } from "@/lib/format";

export function ChainPulseSummary() {
  return (
    <section className="border border-terminal-border bg-terminal-panel p-4">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-terminal-cyan">
            Chain Pulse Summary
          </p>
          <h3 className="mt-1 text-lg font-semibold text-terminal-text">
            Base leads current launch-chain momentum
          </h3>
        </div>
        <SourceLabel label="Source: DefiLlama mock" />
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        {chainPulse.map((chain) => (
          <article
            key={chain.chain}
            className="border border-terminal-border bg-terminal-panelAlt p-4"
          >
            <div className="flex items-center justify-between">
              <ChainBadge chain={chain.chain} />
              <span className="text-xs uppercase tracking-[0.18em] text-terminal-muted">
                Rank #{chain.momentumRank}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-terminal-muted">TVL</p>
                <p className="mt-1 text-lg font-semibold text-terminal-text">
                  {formatUsd(chain.tvlUsd)}
                </p>
                <ChangeIndicator value={chain.tvlChange} />
              </div>
              <div>
                <p className="text-xs text-terminal-muted">DEX Volume</p>
                <p className="mt-1 text-lg font-semibold text-terminal-text">
                  {formatUsd(chain.dexVolumeUsd)}
                </p>
                <ChangeIndicator value={chain.dexVolumeChange} />
              </div>
            </div>
            <div className="mt-4 border-t border-terminal-border pt-3 text-sm text-terminal-muted">
              {chain.activeOpportunities} active opportunity signals
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
