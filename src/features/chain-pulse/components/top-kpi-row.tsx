import { Activity, Flame, Gauge, RadioTower } from "lucide-react";
import { MetricCard } from "@/shared/components/metric-card";
import { chainPulse, opportunitySignals, trendingPairs } from "@/shared/mock-data";
import { formatUsd } from "@/lib/format";

export function TopKpiRow() {
  const strongest = chainPulse[0];
  const topSignal = opportunitySignals[0];
  const fastest = trendingPairs[0];
  const totalVolume = chainPulse.reduce((sum, chain) => sum + chain.dexVolumeUsd, 0);

  return (
    <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        label="Strongest Chain"
        value={strongest.name}
        detail={`${strongest.activeOpportunities} active opportunities`}
        tone="green"
        icon={<RadioTower className="h-4 w-4" />}
      />
      <MetricCard
        label="Fastest Asset"
        value={fastest.pair}
        detail={`Volume growth +${fastest.volumeGrowth.toFixed(1)}%`}
        tone="cyan"
        icon={<Flame className="h-4 w-4" />}
      />
      <MetricCard
        label="Top Signal"
        value={`${topSignal.score}/100`}
        detail={`${topSignal.pair} on ${topSignal.dex}`}
        tone="violet"
        icon={<Gauge className="h-4 w-4" />}
      />
      <MetricCard
        label="Tracked Volume"
        value={formatUsd(totalVolume)}
        detail="Mock 24h DEX volume"
        tone="amber"
        icon={<Activity className="h-4 w-4" />}
      />
    </section>
  );
}
