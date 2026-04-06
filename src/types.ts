export type Volatility = 'Low' | 'Medium' | 'High';

export interface SlotReview {
  id: string;
  slug: string;
  title: string;
  provider: string;
  rtp: number;
  volatility: Volatility;
  maxWin: string;
  paylines: string;
  reels: string;
  bonusFeatures: string[];
  pros: string[];
  cons: string[];
  rating: number;
  content: string;
  image: string;
  isFeatured?: boolean;
}

export type Category = 'High RTP' | 'High Volatility' | 'Jackpot' | 'New Releases' | 'Popular' | 'Low Min Bet';

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}
