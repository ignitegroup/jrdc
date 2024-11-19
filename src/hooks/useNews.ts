import { useState, useEffect } from 'react';
import type { NewsItem } from '../types';
import { news } from '../data/news';

export function useNews() {
  const [data, setData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      setData(news);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load news'));
      setLoading(false);
    }
  }, []);

  return { news: data, loading, error };
}