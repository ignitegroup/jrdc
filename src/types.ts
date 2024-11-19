export interface Driver {
  _id: string;
  name: string;
  imageUrl: string;
  biography: string;
  achievements: string[];
  currentCar: {
    make: string;
    model: string;
    year: number;
    specs: {
      engine: string;
      power: string;
      transmission: string;
    };
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  raceHistory: Array<{
    date: string;
    event: string;
    position: number;
  }>;
}