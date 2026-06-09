import { ChainPulseSummary } from "@/features/chain-pulse/components/chain-pulse-summary";
import { TopKpiRow } from "@/features/chain-pulse/components/top-kpi-row";
import { OpportunitySignalsPanel } from "@/features/opportunity-signals/components/opportunity-signals-panel";
import { TrendingPanel } from "@/features/trending/components/trending-panel";
import { VolumeMoversTable } from "@/features/volume-movers/components/volume-movers-table";
import { PageHeader } from "@/shared/components/page-header";

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Live mock terminal"
        title="Chain Pulse"
        description="Ethereum, Base, and Arbitrum activity scanned for acceleration, liquidity, and opportunity quality."
      />
      <TopKpiRow />
      <ChainPulseSummary />
      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <OpportunitySignalsPanel />
        <TrendingPanel />
      </div>
      <VolumeMoversTable compact />
    </div>
  );
}
