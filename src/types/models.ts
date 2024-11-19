export interface Car {
  name: string;
  specs: string[];
  image: string;
}

export interface Championship {
  title: string;
  year: string;
}

export interface Driver {
  id: string;
  name: string;
  image: string;
  bio: string;
  achievements: string[];
  classes: string[];
  cars: Car[];
  championships: Championship[];
  references: string[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  careerHighlights: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  type: string;
  schedule: {
    time: string;
    activity: string;
  }[];
  registrationUrl?: string;
  results?: {
    driverName: string;
    position: string;
    time: string;
  }[];
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
}