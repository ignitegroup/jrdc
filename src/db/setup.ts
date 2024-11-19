import { connectDB, closeDB } from './connect';

async function setupDatabase() {
  try {
    const db = await connectDB();
    
    // Create collections with validators
    await db.createCollection("drivers", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "biography", "imageUrl", "seoMetadata"],
          properties: {
            name: { bsonType: "string" },
            biography: { bsonType: "string" },
            achievements: { bsonType: "array" },
            imageUrl: { bsonType: "string" },
            seoMetadata: {
              bsonType: "object",
              required: ["title", "description", "keywords"],
              properties: {
                title: { bsonType: "string" },
                description: { bsonType: "string" },
                keywords: { bsonType: "array" }
              }
            }
          }
        }
      }
    });

    // Create indexes
    await db.collection("drivers").createIndex({ name: 1 });
    await db.collection("drivers").createIndex({ "seoMetadata.keywords": 1 });

    console.log("Database setup completed successfully");
  } catch (error) {
    console.error("Error setting up database:", error);
  } finally {
    await closeDB();
  }
}

setupDatabase();