import type { ChainSlug } from "@/shared/types/common";

export type Chain = {
  slug: ChainSlug;
  name: string;
  shortName: string;
  accent: string;
};
