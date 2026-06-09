export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-terminal-border bg-terminal-panel/80 p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-terminal-cyan">
        {eyebrow}
      </p>
      <div className="mt-2 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-terminal-text">{title}</h2>
          <p className="mt-1 max-w-3xl text-sm text-terminal-muted">
            {description}
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.18em] text-terminal-muted">
          Refresh mock: 15m
        </p>
      </div>
    </div>
  );
}
