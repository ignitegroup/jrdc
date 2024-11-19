import { ObjectId } from 'mongodb';
import { client } from './connect';
import type { INews } from './schema';

const db = client.db('jrdc');
const news = db.collection<INews>('news');

export async function getAllNews() {
  return await news.find().sort({ date: -1 }).toArray();
}

export async function getLatestNews(limit = 5) {
  return await news.find()
    .sort({ date: -1 })
    .limit(limit)
    .toArray();
}

export async function getNewsByCategory(category: string) {
  return await news.find({ category })
    .sort({ date: -1 })
    .toArray();
}

export async function getNewsById(id: string) {
  return await news.findOne({ _id: new ObjectId(id) });
}

export async function createNews(newsItem: Omit<INews, '_id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date();
  const newNews = {
    ...newsItem,
    createdAt: now,
    updatedAt: now,
  };
  
  const result = await news.insertOne(newNews);
  return result.insertedId;
}

export async function updateNews(id: string, updates: Partial<INews>) {
  const result = await news.updateOne(
    { _id: new ObjectId(id) },
    { 
      $set: {
        ...updates,
        updatedAt: new Date()
      }
    }
  );
  return result.modifiedCount > 0;
}