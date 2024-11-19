import type { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Dover Circuit Racing Championship - Round 1',
    date: 'March 15, 2024',
    location: 'Dover Raceway, St. Ann',
    description: 'Opening round of the 2024 Circuit Racing Championship featuring multiple race categories.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
    type: 'circuit',
    schedule: [
      { time: '8:00 AM', activity: 'Practice Session' },
      { time: '10:00 AM', activity: 'Qualifying' },
      { time: '1:00 PM', activity: 'Race 1' },
      { time: '3:30 PM', activity: 'Race 2' }
    ]
  },
  {
    id: '2',
    title: 'Rally Jamaica 2024',
    date: 'April 20, 2024',
    location: 'Various Locations, Jamaica',
    description: 'The premier rally event in the Caribbean, featuring challenging stages across Jamaica.',
    image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da',
    type: 'rally',
    schedule: [
      { time: '7:00 AM', activity: 'Stage 1 Start' },
      { time: '12:00 PM', activity: 'Service Park' },
      { time: '2:00 PM', activity: 'Stage 2 Start' }
    ]
  }
];