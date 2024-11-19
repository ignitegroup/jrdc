import axios from 'axios';
import type { Driver, Event, NewsItem } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Drivers API
export const fetchDrivers = async (): Promise<Driver[]> => {
  try {
    const { data } = await api.get('/drivers');
    return data.map((driver: any) => ({
      id: driver._id,
      name: driver.name,
      image: driver.imageUrl,
      bio: driver.biography,
      achievements: driver.achievements || [],
      classes: driver.classes || [],
      cars: driver.cars || [],
      championships: driver.championships || [],
      references: driver.references || [],
      socialLinks: driver.socialLinks || {},
      careerHighlights: driver.careerHighlights || []
    }));
  } catch (error) {
    console.error('Error fetching drivers:', error);
    throw new Error('Failed to fetch drivers');
  }
};

export const fetchDriverById = async (id: string): Promise<Driver> => {
  try {
    const { data } = await api.get(`/drivers/${id}`);
    return {
      id: data._id,
      name: data.name,
      image: data.imageUrl,
      bio: data.biography,
      achievements: data.achievements || [],
      classes: data.classes || [],
      cars: data.cars || [],
      championships: data.championships || [],
      references: data.references || [],
      socialLinks: data.socialLinks || {},
      careerHighlights: data.careerHighlights || []
    };
  } catch (error) {
    console.error('Error fetching driver:', error);
    throw new Error('Failed to fetch driver');
  }
};

// Events API
export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const { data } = await api.get('/events');
    return data.map((event: any) => ({
      id: event._id,
      title: event.title,
      date: new Date(event.date).toLocaleDateString(),
      location: event.location,
      description: event.description,
      image: event.image,
      type: event.type,
      schedule: event.schedule,
      registrationUrl: event.registrationUrl,
      results: event.results
    }));
  } catch (error) {
    console.error('Error fetching events:', error);
    throw new Error('Failed to fetch events');
  }
};

export const fetchEventById = async (id: string): Promise<Event> => {
  try {
    const { data } = await api.get(`/events/${id}`);
    return {
      id: data._id,
      title: data.title,
      date: new Date(data.date).toLocaleDateString(),
      location: data.location,
      description: data.description,
      image: data.image,
      type: data.type,
      schedule: data.schedule,
      registrationUrl: data.registrationUrl,
      results: data.results
    };
  } catch (error) {
    console.error('Error fetching event:', error);
    throw new Error('Failed to fetch event');
  }
};

// News API
export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const { data } = await api.get('/news');
    return data.map((item: any) => ({
      id: item._id,
      title: item.title,
      excerpt: item.excerpt,
      content: item.content,
      author: item.author,
      date: new Date(item.date).toLocaleDateString(),
      image: item.image,
      category: item.category,
      tags: item.tags || []
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news');
  }
};

export const fetchNewsById = async (id: string): Promise<NewsItem> => {
  try {
    const { data } = await api.get(`/news/${id}`);
    return {
      id: data._id,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      author: data.author,
      date: new Date(data.date).toLocaleDateString(),
      image: data.image,
      category: data.category,
      tags: data.tags || []
    };
  } catch (error) {
    console.error('Error fetching news item:', error);
    throw new Error('Failed to fetch news item');
  }
};