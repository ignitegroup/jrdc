import { connectDB, closeDB } from './connect';
import type { Driver } from './drivers';

const sampleDrivers: Omit<Driver, '_id'>[] = [
  {
    name: "Brian Fowler",
    biography: "Brian Fowler is a legendary figure in Jamaican motorsports...",
    achievements: [
      "Multiple Dover Raceway Champion",
      "Caribbean Motor Racing Champion"
    ],
    careerHighlights: [
      "First Jamaican to compete in International GT Racing",
      "Record holder for most wins at Dover"
    ],
    currentCar: {
      make: "Mitsubishi",
      model: "Lancer Evolution",
      year: 2023,
      specs: {
        horsepower: "450hp",
        transmission: "Sequential",
        weight: "1200kg"
      }
    },
    socialMedia: {
      instagram: "https://instagram.com/brianfowler",
      facebook: "https://facebook.com/brianfowlerracing"
    },
    imageUrl: "https://example.com/brian-fowler.jpg",
    videoUrls: [
      "https://youtube.com/watch?v=example1",
      "https://youtube.com/watch?v=example2"
    ],
    raceHistory: [
      {
        date: new Date("2023-12-01"),
        event: "Dover December Race Day",
        position: 1,
        track: "Dover Raceway"
      }
    ],
    seoMetadata: {
      title: "Brian Fowler - Jamaican Racing Legend | JRDC",
      description: "Learn about Brian Fowler, one of Jamaica's most successful racing drivers and multiple Dover Raceway champion.",
      keywords: ["Brian Fowler", "Jamaican racing", "Dover Raceway", "JRDC", "motorsport"]
    }
  }
];

async function seedDatabase() {
  try {
    const db = await connectDB();
    const drivers = db.collection("drivers");

    // Clear existing data
    await drivers.deleteMany({});

    // Insert sample data
    await drivers.insertMany(sampleDrivers);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await closeDB();
  }
}

seedDatabase();