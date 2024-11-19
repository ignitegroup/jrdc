import express from 'express';
import { ObjectId } from 'mongodb';
import { client } from '../../src/db/connect';

const router = express.Router();
const db = client.db("jrdc");

router.get('/', async (req, res) => {
  try {
    const drivers = await db.collection('drivers').find({}).toArray();
    res.json(drivers);
  } catch (error) {
    console.error('Error fetching drivers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const driver = await db.collection('drivers').findOne({ 
      _id: new ObjectId(req.params.id) 
    });
    if (!driver) {
      return res.status(404).json({ error: 'Driver not found' });
    }
    res.json(driver);
  } catch (error) {
    console.error('Error fetching driver:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;