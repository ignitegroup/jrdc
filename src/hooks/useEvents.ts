import { useState, useEffect } from 'react';
import type { Event } from '../types';
import { events } from '../data/events';

export function useEvents() {
  const [data, setData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      setData(events);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load events'));
      setLoading(false);
    }
  }, []);

  return { events: data, loading, error };
}