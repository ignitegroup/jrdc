import { ObjectId } from "mongodb";
import { client } from "./connect";

const db = client.db("jrdc");
const driversCollection = db.collection("drivers");

export interface Driver {
  _id?: ObjectId;
  name: string;
  biography: string;
  achievements: string[];
  careerHighlights: string[];
  currentCar: {
    make: string;
    model: string;
    year: number;
    specs: Record<string, string>;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  imageUrl: string;
  videoUrls: string[];
  raceHistory: {
    date: Date;
    event: string;
    position: number;
    track: string;
  }[];
  seoMetadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export async function getAllDrivers() {
  return await driversCollection.find({}).toArray();
}

export async function getDriverById(id: string) {
  return await driversCollection.findOne({ _id: new ObjectId(id) });
}

export async function createDriver(driver: Omit<Driver, '_id'>) {
  return await driversCollection.insertOne(driver);
}

export async function updateDriver(id: string, driver: Partial<Driver>) {
  return await driversCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: driver }
  );
}

export async function deleteDriver(id: string) {
  return await driversCollection.deleteOne({ _id: new ObjectId(id) });
}