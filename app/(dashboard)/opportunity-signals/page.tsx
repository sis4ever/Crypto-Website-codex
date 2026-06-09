import { OpportunitySignalsTable } from "@/features/opportunity-signals/components/opportunity-signals-table";
import { PageHeader } from "@/shared/components/page-header";

export default function OpportunitySignalsPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Primary product surface"
        title="Opportunity Signals"
        description="Mock signal rankings showing score, risk level, chain context, and human-readable reasons."
      />
      <OpportunitySignalsTable />
    </div>
  );
}
