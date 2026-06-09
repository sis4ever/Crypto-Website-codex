import type { ChainSlug } from "@/shared/types/common";

export type VolumeMover = {
  pair: string;
  chain: ChainSlug;
  liquidityUsd: number;
  volume24hUsd: number;
  priceChange24h: number;
  dex: string;
  volumeChange24h: number;
};

export const volumeMovers: VolumeMover[] = [
  {
    pair: "AERO / USDC",
    chain: "base",
    liquidityUsd: 18_400_000,
    volume24hUsd: 92_600_000,
    priceChange24h: 12.4,
    dex: "Aerodrome",
    volumeChange24h: 74.2,
  },
  {
    pair: "PENDLE / WETH",
    chain: "ethereum",
    liquidityUsd: 22_900_000,
    volume24hUsd: 66_200_000,
    priceChange24h: 8.1,
    dex: "Uniswap",
    volumeChange24h: 41.8,
  },
  {
    pair: "GMX / WETH",
    chain: "arbitrum",
    liquidityUsd: 11_700_000,
    volume24hUsd: 38_900_000,
    priceChange24h: 5.6,
    dex: "Uniswap",
    volumeChange24h: 36.5,
  },
  {
    pair: "DEGEN / USDC",
    chain: "base",
    liquidityUsd: 7_800_000,
    volume24hUsd: 44_100_000,
    priceChange24h: 18.9,
    dex: "Aerodrome",
    volumeChange24h: 89.4,
  },
  {
    pair: "ARB / USDC",
    chain: "arbitrum",
    liquidityUsd: 31_600_000,
    volume24hUsd: 73_400_000,
    priceChange24h: -2.2,
    dex: "Camelot",
    volumeChange24h: 22.1,
  },
];
