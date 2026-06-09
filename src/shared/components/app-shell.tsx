import { Cpu, Gauge } from "lucide-react";
import { DashboardNav } from "@/shared/components/dashboard-nav";
import { SourceLabel } from "@/shared/components/source-label";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34%),linear-gradient(180deg,#070A0F_0%,#0A0F18_100%)]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="mb-5 border border-terminal-border bg-terminal-panel/90 p-4 shadow-terminal">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-terminal-cyan/50 bg-terminal-cyan/10">
                <Cpu className="h-5 w-5 text-terminal-cyan" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-terminal-cyan">
                  CryptoX Terminal
                </p>
                <h1 className="text-lg font-semibold text-terminal-text">
                  EVM Momentum Console
                </h1>
              </div>
            </div>
            <DashboardNav />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-terminal-border pt-3 text-xs text-terminal-muted">
            <span className="inline-flex items-center gap-2">
              <Gauge className="h-4 w-4 text-terminal-green" />
              Mock data mode
            </span>
            <SourceLabel label="DexScreener mock" />
            <SourceLabel label="DefiLlama mock" />
          </div>
        </header>
        <section className="flex-1 pb-8">{children}</section>
      </div>
    </main>
  );
}
