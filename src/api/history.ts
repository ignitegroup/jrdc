import { getAllHistoricalEvents, getAllLegends } from '../db/history';
import type { HistoricalEvent, Legend } from '../types';

export async function fetchHistoricalEvents(): Promise<HistoricalEvent[]> {
  try {
    const events = await getAllHistoricalEvents();
    return events.map(event => ({
      id: event._id!.toString(),
      year: event.year,
      title: event.title,
      description: event.description,
      image: event.image,
      type: event.type
    }));
  } catch (error) {
    console.error('Error fetching historical events:', error);
    throw error;
  }
}

export async function fetchLegends(): Promise<Legend[]> {
  try {
    const legends = await getAllLegends();
    return legends.map(legend => ({
      id: legend._id!.toString(),
      name: legend.name,
      achievement: legend.achievement,
      bio: legend.bio,
      image: legend.image,
      era: legend.era,
      achievements: legend.achievements
    }));
  } catch (error) {
    console.error('Error fetching legends:', error);
    throw error;
  }
}