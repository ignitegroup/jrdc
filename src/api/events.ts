import { getAllEvents, getUpcomingEvents, getEventById } from '../db/events';
import type { Event } from '../types';

export async function fetchAllEvents(): Promise<Event[]> {
  try {
    const events = await getAllEvents();
    return events.map(event => ({
      id: event._id!.toString(),
      title: event.title,
      date: event.date.toLocaleDateString(),
      description: event.description,
      location: event.location,
      image: event.image,
      type: event.type
    }));
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}

export async function fetchUpcomingEvents(): Promise<Event[]> {
  try {
    const events = await getUpcomingEvents();
    return events.map(event => ({
      id: event._id!.toString(),
      title: event.title,
      date: event.date.toLocaleDateString(),
      description: event.description,
      location: event.location,
      image: event.image,
      type: event.type
    }));
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    throw error;
  }
}