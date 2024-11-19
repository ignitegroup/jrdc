import { ObjectId } from 'mongodb';
import { client } from './connect';
import type { IHistoricalEvent, ILegend } from './schema';

const db = client.db('jrdc');
const historicalEvents = db.collection<IHistoricalEvent>('historicalEvents');
const legends = db.collection<ILegend>('legends');

export async function getAllHistoricalEvents() {
  return await historicalEvents.find()
    .sort({ year: 1 })
    .toArray();
}

export async function getHistoricalEventsByType(type: IHistoricalEvent['type']) {
  return await historicalEvents.find({ type })
    .sort({ year: 1 })
    .toArray();
}

export async function getAllLegends() {
  return await legends.find().toArray();
}

export async function createHistoricalEvent(event: Omit<IHistoricalEvent, '_id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date();
  const newEvent = {
    ...event,
    createdAt: now,
    updatedAt: now,
  };
  
  const result = await historicalEvents.insertOne(newEvent);
  return result.insertedId;
}

export async function createLegend(legend: Omit<ILegend, '_id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date();
  const newLegend = {
    ...legend,
    createdAt: now,
    updatedAt: now,
  };
  
  const result = await legends.insertOne(newLegend);
  return result.insertedId;
}