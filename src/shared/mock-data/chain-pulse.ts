import type { ChainSlug } from "@/shared/types/common";

export type ChainPulse = {
  chain: ChainSlug;
  name: string;
  tvlUsd: number;
  tvlChange: number;
  dexVolumeUsd: number;
  dexVolumeChange: number;
  activeOpportunities: number;
  momentumRank: number;
};

export const chainPulse: ChainPulse[] = [
  {
    chain: "base",
    name: "Base",
    tvlUsd: 1_840_000_000,
    tvlChange: 5.8,
    dexVolumeUsd: 426_000_000,
    dexVolumeChange: 31.6,
    activeOpportunities: 18,
    momentumRank: 1,
  },
  {
    chain: "arbitrum",
    name: "Arbitrum",
    tvlUsd: 3_270_000_000,
    tvlChange: 2.1,
    dexVolumeUsd: 392_000_000,
    dexVolumeChange: 14.4,
    activeOpportunities: 14,
    momentumRank: 2,
  },
  {
    chain: "ethereum",
    name: "Ethereum",
    tvlUsd: 49_600_000_000,
    tvlChange: 0.7,
    dexVolumeUsd: 1_180_000_000,
    dexVolumeChange: 5.2,
    activeOpportunities: 9,
    momentumRank: 3,
  },
];
