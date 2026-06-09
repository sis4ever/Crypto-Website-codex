import { VolumeMoversTable } from "@/features/volume-movers/components/volume-movers-table";
import { PageHeader } from "@/shared/components/page-header";

export default function VolumeMoversPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="DexScreener mock data"
        title="Volume Movers"
        description="Pairs with unusual 24h volume, liquidity depth, and price movement across launch chains."
      />
      <VolumeMoversTable />
    </div>
  );
}
