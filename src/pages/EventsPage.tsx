import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { SEO } from '../components/SEO';
import { EventCard } from '../components/EventCard';
import { useEvents } from '../hooks/useEvents';

export function EventsPage() {
  const { events, loading, error } = useEvents();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType ? event.type === selectedType : true;
    return matchesSearch && matchesType;
  });

  // Generate dynamic meta description based on upcoming events
  const upcomingEvents = events
    .filter(e => new Date(e.date) > new Date())
    .slice(0, 3)
    .map(e => e.title)
    .join(', ');
  const metaDescription = `Join us for exciting racing events at Dover Raceway including ${upcomingEvents}. View full race calendar, register for events, and get event details.`;

  const eventTypes = [...new Set(events.map(event => event.type))];

  return (
    <>
      <SEO
        title="Racing Events"
        description={metaDescription}
        keywords={[
          'Dover Raceway events',
          'Jamaica racing calendar',
          'JRDC race events',
          'circuit racing Jamaica',
          'rally Jamaica',
          'drag racing events',
          'motorsport calendar'
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Racing Events</h1>
          <p className="text-xl text-gray-600">
            Experience the thrill of Jamaican motorsports at our upcoming events.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            >
              <option value="">All Event Types</option>
              {eventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" />
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            Error loading events. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}