import { useState, useEffect } from 'react';
import { fetchHistoricalEvents, fetchLegends } from '../api/history';
import type { HistoricalEvent, Legend } from '../types';

export function useHistoricalEvents() {
  const [events, setEvents] = useState<HistoricalEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await fetchHistoricalEvents();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch historical events'));
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  return { events, loading, error };
}

export function useLegends() {
  const [legends, setLegends] = useState<Legend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadLegends() {
      try {
        const data = await fetchLegends();
        setLegends(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch legends'));
      } finally {
        setLoading(false);
      }
    }

    loadLegends();
  }, []);

  return { legends, loading, error };
}