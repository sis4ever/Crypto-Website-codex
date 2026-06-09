export function EmptyState({ title }: { title: string }) {
  return (
    <div className="border border-terminal-border bg-terminal-panel p-6 text-sm text-terminal-muted">
      {title}
    </div>
  );
}
