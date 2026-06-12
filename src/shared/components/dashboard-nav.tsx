"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/shared/constants/navigation";
import { cn } from "@/lib/cn";

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-2">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "inline-flex h-9 items-center gap-2 border border-terminal-border px-3 text-sm text-terminal-muted transition hover:border-terminal-cyan/60 hover:text-terminal-text",
              active && "border-terminal-cyan/70 bg-terminal-cyan/10 text-terminal-text"
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
