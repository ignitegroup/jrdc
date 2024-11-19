import { getAllNews, getLatestNews, getNewsByCategory } from '../db/news';
import type { NewsItem } from '../types';

export async function fetchAllNews(): Promise<NewsItem[]> {
  try {
    const newsItems = await getAllNews();
    return newsItems.map(item => ({
      id: item._id!.toString(),
      title: item.title,
      excerpt: item.excerpt,
      date: item.date.toLocaleDateString(),
      image: item.image,
      category: item.category
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}

export async function fetchLatestNews(limit: number = 5): Promise<NewsItem[]> {
  try {
    const newsItems = await getLatestNews(limit);
    return newsItems.map(item => ({
      id: item._id!.toString(),
      title: item.title,
      excerpt: item.excerpt,
      date: item.date.toLocaleDateString(),
      image: item.image,
      category: item.category
    }));
  } catch (error) {
    console.error('Error fetching latest news:', error);
    throw error;
  }
}