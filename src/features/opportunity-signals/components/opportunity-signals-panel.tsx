import { ChainBadge } from "@/shared/components/chain-badge";
import { RiskBadge } from "@/shared/components/risk-badge";
import { ScoreBadge } from "@/shared/components/score-badge";
import { SourceLabel } from "@/shared/components/source-label";
import { opportunitySignals } from "@/shared/mock-data";

export function OpportunitySignalsPanel() {
  return (
    <section className="border border-terminal-border bg-terminal-panel p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-terminal-cyan">
            Top Opportunities
          </p>
          <h3 className="mt-1 text-lg font-semibold text-terminal-text">
            Highest mock signal scores
          </h3>
        </div>
        <SourceLabel label="Mock signals" />
      </div>
      <div className="space-y-3">
        {opportunitySignals.slice(0, 4).map((signal) => (
          <article
            key={`${signal.chain}-${signal.pair}`}
            className="border border-terminal-border bg-terminal-panelAlt p-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-medium text-terminal-text">{signal.pair}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <ChainBadge chain={signal.chain} />
                  <RiskBadge risk={signal.risk} />
                  <span className="text-xs text-terminal-muted">{signal.dex}</span>
                </div>
              </div>
              <ScoreBadge score={signal.score} />
            </div>
            <p className="mt-3 text-xs text-terminal-muted">
              {signal.reasons.join(" / ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
