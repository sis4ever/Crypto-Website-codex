import { ChainBadge } from "@/shared/components/chain-badge";
import { RiskBadge } from "@/shared/components/risk-badge";
import { ScoreBadge } from "@/shared/components/score-badge";
import { SourceLabel } from "@/shared/components/source-label";
import { opportunitySignals } from "@/shared/mock-data";

export function OpportunitySignalsTable() {
  return (
    <section className="border border-terminal-border bg-terminal-panel p-4">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-terminal-cyan">
            Signal Rankings
          </p>
          <h3 className="mt-1 text-lg font-semibold text-terminal-text">
            Transparent mock opportunity list
          </h3>
        </div>
        <SourceLabel label="No scoring logic in Phase 1" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-terminal-border text-xs uppercase tracking-[0.16em] text-terminal-muted">
              <th className="py-3 pr-4 font-medium">Score</th>
              <th className="py-3 pr-4 font-medium">Pair</th>
              <th className="py-3 pr-4 font-medium">Chain</th>
              <th className="py-3 pr-4 font-medium">Risk</th>
              <th className="py-3 pr-4 font-medium">DEX</th>
              <th className="py-3 font-medium">Reasons</th>
            </tr>
          </thead>
          <tbody>
            {opportunitySignals.map((signal) => (
              <tr
                key={`${signal.chain}-${signal.pair}-row`}
                className="border-b border-terminal-border/70 last:border-0"
              >
                <td className="py-3 pr-4">
                  <ScoreBadge score={signal.score} />
                </td>
                <td className="py-3 pr-4 font-medium text-terminal-text">{signal.pair}</td>
                <td className="py-3 pr-4">
                  <ChainBadge chain={signal.chain} />
                </td>
                <td className="py-3 pr-4">
                  <RiskBadge risk={signal.risk} />
                </td>
                <td className="py-3 pr-4 text-terminal-muted">{signal.dex}</td>
                <td className="py-3 text-terminal-muted">{signal.reasons.join(" / ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
