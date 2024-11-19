import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://ignitegroup876:p5BZ4PMsmT2ZYEsM@jrdc.xp5vg.mongodb.net/?retryWrites=true&w=majority&appName=jrdc";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db("jrdc");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export const closeConnection = async () => {
  try {
    await client.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
    throw error;
  }
};