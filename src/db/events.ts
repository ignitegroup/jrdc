import { ObjectId } from 'mongodb';
import { client } from './connect';
import type { IEvent, IEventResult } from './schema';

const db = client.db('jrdc');
const events = db.collection<IEvent>('events');

export async function getAllEvents() {
  return await events.find().toArray();
}

export async function getUpcomingEvents() {
  return await events.find({
    date: { $gte: new Date() },
    status: 'upcoming'
  }).sort({ date: 1 }).toArray();
}

export async function getEventById(id: string) {
  return await events.findOne({ _id: new ObjectId(id) });
}

export async function getEventsByType(type: IEvent['type']) {
  return await events.find({ type }).toArray();
}

export async function createEvent(event: Omit<IEvent, '_id' | 'createdAt' | 'updatedAt'>) {
  const now = new Date();
  const newEvent = {
    ...event,
    currentParticipants: 0,
    status: 'upcoming',
    createdAt: now,
    updatedAt: now,
  };
  
  const result = await events.insertOne(newEvent);
  return result.insertedId;
}

export async function updateEventResults(id: string, results: IEventResult[]) {
  const result = await events.updateOne(
    { _id: new ObjectId(id) },
    { 
      $set: {
        results,
        status: 'completed',
        updatedAt: new Date()
      }
    }
  );
  return result.modifiedCount > 0;
}

export async function registerForEvent(eventId: string, driverId: string) {
  const result = await events.updateOne(
    { 
      _id: new ObjectId(eventId),
      currentParticipants: { $lt: "$maxParticipants" }
    },
    { 
      $inc: { currentParticipants: 1 },
      $push: { registeredDrivers: new ObjectId(driverId) }
    }
  );
  return result.modifiedCount > 0;
}