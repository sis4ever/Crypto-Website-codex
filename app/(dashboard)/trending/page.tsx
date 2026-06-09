import { TrendingGrid } from "@/features/trending/components/trending-grid";
import { PageHeader } from "@/shared/components/page-header";

export default function TrendingPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Momentum watch"
        title="Trending & Momentum"
        description="Mock trending and boosted pairs ranked by volume growth and liquidity expansion."
      />
      <TrendingGrid />
    </div>
  );
}
