export function SourceLabel({ label }: { label: string }) {
  return (
    <span className="inline-flex h-6 items-center border border-terminal-border bg-terminal-panelAlt px-2 text-xs text-terminal-muted">
      {label}
    </span>
  );
}
