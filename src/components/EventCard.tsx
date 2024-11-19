import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-black" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}