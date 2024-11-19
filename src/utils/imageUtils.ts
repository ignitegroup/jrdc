import { Driver } from '../types';

const UNSPLASH_BASE = 'https://images.unsplash.com/';

// Racing-related Unsplash photo IDs that are guaranteed to exist
const RACING_PHOTOS = {
  drivers: [
    'photo-1593229270791-dc1a45a7cd19', // Racing driver
    'photo-1580273916550-e323be2ae537', // Race car driver
    'photo-1533559662493-65ffb1c15517', // Racing helmet
    'photo-1541447270888-83e8494f9c06', // Driver in suit
    'photo-1532906619279-a4b7267faa66'  // Racing portrait
  ],
  cars: [
    'photo-1553502841-9f0e45f8f5c3', // Race car 1
    'photo-1571607388263-1044f9ea01dd', // Race car 2
    'photo-1568605117036-5fe5e7bab0b7', // Race car 3
    'photo-1600712242805-5f78671b24da', // Rally car
    'photo-1584345604476-8ec5f82d718d'  // GT car
  ]
};

export function getDriverImage(index: number): string {
  const photoId = RACING_PHOTOS.drivers[index % RACING_PHOTOS.drivers.length];
  return `${UNSPLASH_BASE}${photoId}?auto=format&fit=crop&w=800&q=80`;
}

export function getCarImage(index: number): string {
  const photoId = RACING_PHOTOS.cars[index % RACING_PHOTOS.cars.length];
  return `${UNSPLASH_BASE}${photoId}?auto=format&fit=crop&w=800&q=80`;
}