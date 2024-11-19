import { useState, useEffect } from 'react';
import type { Driver } from '../types';
import { drivers } from '../data/seedData';

export function useDrivers() {
  const [data, setData] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      // Load drivers from the seedData
      setData(drivers);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load drivers'));
      setLoading(false);
    }
  }, []);

  return { drivers: data, loading, error };
}