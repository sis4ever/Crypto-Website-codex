import type { ChainSlug } from "@/shared/types/common";

export type TrendingPair = {
  pair: string;
  chain: ChainSlug;
  dex: string;
  isBoosted: boolean;
  volumeGrowth: number;
  liquidityGrowth: number;
  attentionRank: number;
};

export const trendingPairs: TrendingPair[] = [
  {
    pair: "DEGEN / USDC",
    chain: "base",
    dex: "Aerodrome",
    isBoosted: true,
    volumeGrowth: 89.4,
    liquidityGrowth: 16.2,
    attentionRank: 1,
  },
  {
    pair: "AERO / USDC",
    chain: "base",
    dex: "Aerodrome",
    isBoosted: false,
    volumeGrowth: 74.2,
    liquidityGrowth: 22.7,
    attentionRank: 2,
  },
  {
    pair: "PENDLE / WETH",
    chain: "ethereum",
    dex: "Uniswap",
    isBoosted: false,
    volumeGrowth: 41.8,
    liquidityGrowth: 10.3,
    attentionRank: 3,
  },
  {
    pair: "GMX / WETH",
    chain: "arbitrum",
    dex: "Uniswap",
    isBoosted: false,
    volumeGrowth: 36.5,
    liquidityGrowth: 8.8,
    attentionRank: 4,
  },
];
