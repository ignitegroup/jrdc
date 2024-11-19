import { ObjectId } from 'mongodb';
import { client } from '../connect';

export interface Driver {
  _id?: ObjectId;
  name: string;
  biography: string;
  achievements: string[];
  careerHighlights: string[];
  currentCar: string;
  imageUrl: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  championships: number;
  races: number;
  wins: number;
  podiums: number;
}

const driversCollection = client.db("jrdc").collection("drivers");

export const getAllDrivers = async (): Promise<Driver[]> => {
  try {
    return await driversCollection.find({}).toArray() as Driver[];
  } catch (error) {
    console.error("Error fetching drivers:", error);
    throw error;
  }
};

export const getDriverById = async (id: string): Promise<Driver | null> => {
  try {
    return await driversCollection.findOne({ _id: new ObjectId(id) }) as Driver;
  } catch (error) {
    console.error("Error fetching driver:", error);
    throw error;
  }
};