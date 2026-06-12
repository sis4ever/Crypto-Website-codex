import type { LucideIcon } from "lucide-react";
import { Activity, BarChart3, RadioTower, TrendingUp } from "lucide-react";

type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Chain Pulse",
    href: "/",
    icon: RadioTower,
  },
  {
    label: "Volume Movers",
    href: "/volume-movers",
    icon: BarChart3,
  },
  {
    label: "Trending",
    href: "/trending",
    icon: TrendingUp,
  },
  {
    label: "Opportunity Signals",
    href: "/opportunity-signals",
    icon: Activity,
  },
];
