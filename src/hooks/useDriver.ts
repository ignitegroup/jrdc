import { useState, useEffect } from 'react';
import type { Driver } from '../types';
import { drivers } from '../data/seedData';

export function useDriver(id: string) {
  const [driver, setDriver] = useState<Driver | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const foundDriver = drivers.find(d => d.id === id);
      if (foundDriver) {
        setDriver(foundDriver);
      } else {
        throw new Error('Driver not found');
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load driver'));
    } finally {
      setLoading(false);
    }
  }, [id]);

  return { driver, loading, error };
}