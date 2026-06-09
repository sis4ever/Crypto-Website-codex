import type { ChainSlug, RiskLevel } from "@/shared/types/common";

export type OpportunitySignal = {
  pair: string;
  chain: ChainSlug;
  score: number;
  risk: RiskLevel;
  reasons: string[];
  dex: string;
};

export const opportunitySignals: OpportunitySignal[] = [
  {
    pair: "AERO / USDC",
    chain: "base",
    score: 91,
    risk: "Medium",
    dex: "Aerodrome",
    reasons: ["Volume acceleration", "Liquidity growth", "Strong chain context"],
  },
  {
    pair: "PENDLE / WETH",
    chain: "ethereum",
    score: 84,
    risk: "Low",
    dex: "Uniswap",
    reasons: ["Healthy liquidity", "Sustained momentum", "Buy pressure improving"],
  },
  {
    pair: "DEGEN / USDC",
    chain: "base",
    score: 78,
    risk: "High",
    dex: "Aerodrome",
    reasons: ["Explosive volume", "Early-stage attention", "Already boosted"],
  },
  {
    pair: "GMX / WETH",
    chain: "arbitrum",
    score: 73,
    risk: "Medium",
    dex: "Uniswap",
    reasons: ["Volume growth", "Chain momentum", "Stable liquidity"],
  },
];
