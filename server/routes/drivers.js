import express from 'express';
import { ObjectId } from 'mongodb';
import { getDb } from '../db.js';

const router = express.Router();

// Helper function to serialize driver data
const serializeDriver = (driver) => ({
  _id: driver._id.toString(),
  name: driver.name,
  imageUrl: driver.imageUrl,
  biography: driver.biography,
  achievements: driver.achievements || [],
  classes: driver.classes || [],
  cars: driver.cars || [],
  championships: driver.championships || [],
  references: driver.references || [],
  socialLinks: driver.socialLinks || {},
  careerHighlights: driver.careerHighlights || []
});

router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const drivers = await db.collection('drivers').find({}).toArray();
    res.json(drivers.map(serializeDriver));
  } catch (error) {
    console.error('Error fetching drivers:', error);
    res.status(500).json({ error: 'Failed to fetch drivers' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const db = getDb();
    const driver = await db.collection('drivers').findOne({
      _id: new ObjectId(req.params.id)
    });
    
    if (!driver) {
      return res.status(404).json({ error: 'Driver not found' });
    }
    
    res.json(serializeDriver(driver));
  } catch (error) {
    console.error('Error fetching driver:', error);
    res.status(500).json({ error: 'Failed to fetch driver' });
  }
});

export default router;