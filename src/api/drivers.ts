import axios from 'axios';
import type { Driver } from '../db/models/Driver';

const API_URL = '/api';

export const fetchDrivers = async (): Promise<Driver[]> => {
  try {
    const response = await axios.get(`${API_URL}/drivers`);
    return response.data;
  } catch (error) {
    console.error('Error fetching drivers:', error);
    throw error;
  }
};

export const fetchDriverById = async (id: string): Promise<Driver> => {
  try {
    const response = await axios.get(`${API_URL}/drivers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching driver:', error);
    throw error;
  }
};