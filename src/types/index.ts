import type { Driver, Event, NewsItem } from './models';

export interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface Legend {
  name: string;
  era: string;
  bio: string;
  image: string;
  achievements: string[];
}

export type { Driver, Event, NewsItem };