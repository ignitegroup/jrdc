import { ObjectId } from 'mongodb';

// User Management
export interface IUser {
  _id?: ObjectId;
  email: string;
  username: string;
  password: string;
  role: 'admin' | 'driver' | 'team_manager' | 'journalist' | 'user';
  profile: {
    firstName: string;
    lastName: string;
    avatar?: string;
    phone?: string;
  };
  status: 'active' | 'inactive' | 'suspended';
  createdAt: Date;
  updatedAt: Date;
}

// Core Entities
export interface IDriver {
  _id?: ObjectId;
  userId: ObjectId;
  name: string;
  image: string;
  bio: string;
  dateOfBirth: Date;
  nationality: string;
  licenseNumber: string;
  licenseType: string;
  teamId?: ObjectId;
  achievements: string[];
  careerHighlights: string[];
  classes: string[];
  cars: ICar[];
  championships: IChampionship[];
  statistics: {
    wins: number;
    podiums: number;
    polePositions: number;
    fastestLaps: number;
  };
  references: string[];
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  status: 'active' | 'inactive' | 'retired';
  createdAt: Date;
  updatedAt: Date;
}

export interface ITeam {
  _id?: ObjectId;
  name: string;
  logo: string;
  description: string;
  managerId: ObjectId;
  drivers: ObjectId[];
  cars: ICar[];
  sponsorIds: ObjectId[];
  championships: IChampionship[];
  socialLinks: {
    website?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

// Events and Racing
export interface IEvent {
  _id?: ObjectId;
  title: string;
  date: Date;
  description: string;
  venueId: ObjectId;
  championshipId?: ObjectId;
  type: 'circuit' | 'rally' | 'drag' | 'karting';
  classes: string[];
  schedule: IScheduleItem[];
  registrationDeadline: Date;
  maxParticipants: number;
  currentParticipants: number;
  entryFee: number;
  status: 'draft' | 'published' | 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  results?: IEventResult[];
  media: {
    images: string[];
    videos: string[];
    documents: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface IVenue {
  _id?: ObjectId;
  name: string;
  description: string;
  type: 'circuit' | 'rally' | 'drag strip' | 'kart track';
  location: {
    address: string;
    parish: string;
    coordinates: {
      type: 'Point';
      coordinates: [number, number]; // [longitude, latitude]
    };
  };
  facilities: string[];
  capacity: number;
  trackInfo?: {
    length: number;
    turns: number;
    surface: string;
    direction: 'clockwise' | 'counterclockwise';
  };
  media: {
    images: string[];
    layout?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface IChampionship {
  _id?: ObjectId;
  name: string;
  season: string;
  type: 'circuit' | 'rally' | 'drag' | 'karting';
  description: string;
  rounds: {
    eventId: ObjectId;
    date: Date;
    venue: string;
    status: 'upcoming' | 'completed';
  }[];
  standings: {
    driverId: ObjectId;
    points: number;
    position: number;
  }[];
  rules: string;
  prizeMoney: number;
  sponsors: ObjectId[];
  status: 'upcoming' | 'ongoing' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

// Results and Statistics
export interface IRaceResult {
  _id?: ObjectId;
  eventId: ObjectId;
  championshipId?: ObjectId;
  driverId: ObjectId;
  position: number;
  class: string;
  car: string;
  totalTime: string;
  bestLap: string;
  points: number;
  status: 'finished' | 'DNF' | 'DNS' | 'DSQ';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Supporting Entities
export interface ICar {
  name: string;
  make: string;
  model: string;
  year: number;
  class: string;
  specs: string[];
  image: string;
  status: 'active' | 'retired';
}

export interface IScheduleItem {
  title: string;
  startTime: Date;
  endTime: Date;
  type: 'practice' | 'qualifying' | 'race' | 'event';
  description?: string;
}

export interface IEventResult {
  position: number;
  driverId: ObjectId;
  time: string;
  points: number;
  status: 'finished' | 'DNF' | 'DNS' | 'DSQ';
}

export interface ISponsor {
  _id?: ObjectId;
  name: string;
  logo: string;
  description: string;
  type: 'title' | 'primary' | 'secondary' | 'technical';
  website?: string;
  contactInfo: {
    name: string;
    email: string;
    phone?: string;
  };
  sponsorshipDetails: {
    startDate: Date;
    endDate: Date;
    package: string;
    value: number;
  };
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

// Content and Media
export interface INews {
  _id?: ObjectId;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  authorId: ObjectId;
  date: Date;
  image: string;
  category: string;
  tags: string[];
  relatedDrivers: ObjectId[];
  relatedEvents: ObjectId[];
  status: 'draft' | 'published' | 'archived';
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IMedia {
  _id?: ObjectId;
  type: 'image' | 'video' | 'document';
  title: string;
  description?: string;
  url: string;
  thumbnailUrl?: string;
  eventId?: ObjectId;
  driverId?: ObjectId;
  uploadedBy: ObjectId;
  tags: string[];
  metadata: {
    size: number;
    format: string;
    duration?: number;
  };
  status: 'processing' | 'active' | 'archived';
  uploadDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

// User Interaction
export interface IComment {
  _id?: ObjectId;
  userId: ObjectId;
  entityId: ObjectId;
  entityType: 'news' | 'event' | 'driver' | 'media';
  content: string;
  status: 'active' | 'hidden' | 'deleted';
  createdAt: Date;
  updatedAt: Date;
}

export interface INotification {
  _id?: ObjectId;
  userId: ObjectId;
  type: 'event' | 'result' | 'news' | 'system';
  title: string;
  message: string;
  link?: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Historical Records
export interface IHistoricalEvent {
  _id?: ObjectId;
  year: string;
  title: string;
  description: string;
  image?: string;
  type: 'milestone' | 'championship' | 'record';
  relatedDrivers?: ObjectId[];
  media: {
    images: string[];
    videos: string[];
    documents: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ILegend {
  _id?: ObjectId;
  name: string;
  achievement: string;
  bio: string;
  image: string;
  era: string;
  achievements: string[];
  statistics: {
    championships: number;
    wins: number;
    podiums: number;
  };
  media: {
    images: string[];
    videos: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}