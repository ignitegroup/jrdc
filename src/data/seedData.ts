import type { Driver, Event, NewsItem } from '../types';

// Drivers Data
export const drivers: Driver[] = [
  {
    id: '1',
    name: 'David Summerbell Jr.',
    image: 'https://images.unsplash.com/photo-1593229270791-dc1a45a7cd19',
    bio: 'David Summerbell Jr. is one of Jamaica\'s most successful circuit racers, following in the footsteps of his father, David Summerbell Sr. Known for his exceptional skill and multiple championship victories at Dover, he has dominated the local racing scene for over two decades.',
    achievements: [
      'Multiple Dover Circuit Racing Champion (2015-2023)',
      'Caribbean Motor Racing Championship titles (2018, 2019)',
      'Dover Raceway lap record holder (2022)',
      'First driver to break 1-minute barrier at Dover',
      'Most wins in a single season at Dover (2019)'
    ],
    classes: ['Modified Production', 'Thundersport 2'],
    cars: [
      {
        name: 'Evolution 8 "Jet"',
        specs: [
          '720 HP 4G63 Turbocharged Engine',
          'Custom Sequential Gearbox by Holinger',
          'Advanced Aerodynamics Package',
          'Carbon Fiber Body Panels',
          'Race-spec Suspension'
        ],
        image: 'https://images.unsplash.com/photo-1553502841-9f0e45f8f5c3'
      },
      {
        name: 'Mitsubishi Lancer Evolution X',
        specs: [
          '650+ HP 4B11T Engine',
          'Paddle-shift Transmission',
          'Custom Aero Kit',
          'Fully Built Engine',
          'Competition Brakes'
        ],
        image: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd'
      }
    ],
    championships: [
      { title: 'Dover Circuit Racing Championship', year: '2023' },
      { title: 'Caribbean Motor Racing Championship', year: '2022' },
      { title: 'JRDC Championship', year: '2021' }
    ],
    references: [
      'Jamaica Gleaner Archives - Dover Racing History',
      'Caribbean Motor Racing Championship Records',
      'JRDC Official Records'
    ],
    socialLinks: {
      facebook: 'https://facebook.com/davidsummerbelljr',
      instagram: 'https://instagram.com/dsummerbelljr'
    },
    careerHighlights: [
      'Started racing at age 16',
      'First championship win in 1998',
      'Broke Dover lap record in 2022',
      'International racing experience',
      'Multiple Caribbean championship titles'
    ]
  },
  {
    id: '2',
    name: 'Kyle Gregg',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
    bio: 'Kyle Gregg represents the new generation of Jamaican motorsport, excelling in both circuit racing and rallying. His versatility and aggressive driving style have earned him numerous victories across different disciplines.',
    achievements: [
      'Overall Rally Jamaica Champion 2023',
      'Dover Circuit Racing Champion 2022',
      'Caribbean Motor Racing Championship victories',
      'Multiple class records at Dover',
      'Rally Jamaica stage record holder'
    ],
    classes: ['Rally', 'Circuit Racing', 'Time Attack'],
    cars: [
      {
        name: 'Radical RXC',
        specs: [
          '650 HP Twin-Turbo V6',
          'Sequential Racing Gearbox',
          'Full Carbon Fiber Construction',
          'Advanced Aerodynamics',
          'Race-spec Electronics'
        ],
        image: 'https://images.unsplash.com/photo-1584345604476-8ec5f82d718d'
      },
      {
        name: 'Mitsubishi Lancer Evolution IX',
        specs: [
          '600+ HP Rally Spec Engine',
          'Competition Sequential Gearbox',
          'WRC-spec Suspension',
          'Custom Roll Cage',
          'Advanced Rally Computer'
        ],
        image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da'
      }
    ],
    championships: [
      { title: 'Rally Jamaica', year: '2023' },
      { title: 'Dover Championship', year: '2022' },
      { title: 'Caribbean Time Attack', year: '2021' }
    ],
    references: [
      'Jamaica Observer Motorsport Coverage',
      'Rally Jamaica Official Results',
      'JRDC Championship Records'
    ],
    socialLinks: {
      instagram: 'https://instagram.com/kylegregg',
      facebook: 'https://facebook.com/kylegregg',
      twitter: 'https://twitter.com/kylegregg'
    },
    careerHighlights: [
      'Youngest Dover Champion',
      'First to win both Rally and Circuit championships',
      'International podium finishes',
      'Multiple track records',
      'Caribbean racing ambassador'
    ]
  },
  {
    id: '3',
    name: 'Sara Misir',
    image: 'https://images.unsplash.com/photo-1533559662493-65ffb1c15517',
    bio: 'Sara Misir is Jamaica\'s first female professional circuit racer, breaking barriers and inspiring a new generation of drivers. Her technical precision and determination have earned her respect in international motorsport.',
    achievements: [
      'First Caribbean woman in British GT Cup',
      'JRDC Modified Production Champion',
      'Multiple Dover podium finishes',
      'International racing success',
      'Formula Woman finalist'
    ],
    classes: ['GT Racing', 'Modified Production'],
    cars: [
      {
        name: 'McLaren 570S GT4',
        specs: [
          '3.8L Twin-Turbo V8 Engine',
          '562 HP / 443 lb-ft Torque',
          'Carbon Fiber Chassis',
          'GT4-spec Aerodynamics',
          'Race-tuned Suspension'
        ],
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7'
      }
    ],
    championships: [
      { title: 'JRDC Modified Production', year: '2023' },
      { title: 'Caribbean GT Championship', year: '2022' }
    ],
    references: [
      'British GT Cup Championship Records',
      'Formula Woman Official Results',
      'JRDC Racing Archives'
    ],
    socialLinks: {
      instagram: 'https://instagram.com/saramisir',
      twitter: 'https://twitter.com/saramisir'
    },
    careerHighlights: [
      'First female JRDC champion',
      'International GT racing debut',
      'Multiple track records',
      'Motorsport ambassador',
      'Youth development program founder'
    ]
  },
  {
    id: '4',
    name: 'Fraser McConnell',
    image: 'https://images.unsplash.com/photo-1541447270888-83e8494f9c06',
    bio: 'Fraser McConnell has emerged as Jamaica\'s top international racing talent, competing successfully in World Rallycross and other global championships. His achievements have put Jamaica on the world motorsport map.',
    achievements: [
      'RallyX Nordic Champion',
      'World Rallycross Championship competitor',
      'Multiple international podium finishes',
      'Nitro Rallycross race winner',
      'European Rallycross success'
    ],
    classes: ['Rallycross', 'Rally'],
    cars: [
      {
        name: 'Ford Fiesta Rallycross Supercar',
        specs: [
          '600+ HP Turbocharged Engine',
          '0-60 mph in 1.9 seconds',
          'Advanced 4WD System',
          'Carbon Fiber Body',
          'Competition Sequential Gearbox'
        ],
        image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da'
      }
    ],
    championships: [
      { title: 'RallyX Nordic Championship', year: '2023' },
      { title: 'Nitro Rallycross Series', year: '2022' }
    ],
    references: [
      'World Rallycross Championship Records',
      'RallyX Nordic Official Results',
      'International Motorsport Coverage'
    ],
    socialLinks: {
      instagram: 'https://instagram.com/frasermcrx',
      facebook: 'https://facebook.com/frasermcrx',
      twitter: 'https://twitter.com/frasermcrx'
    },
    careerHighlights: [
      'First Jamaican World RX competitor',
      'Nordic RX Championship victory',
      'Multiple international victories',
      'Global motorsport ambassador',
      'Youth development mentor'
    ]
  }
];

// Events Data
export const events: Event[] = [
  {
    id: '1',
    title: 'Dover Circuit Racing Championship - Round 1',
    date: 'March 15, 2024',
    location: 'Dover Raceway, St. Ann',
    description: 'Opening round of the 2024 Circuit Racing Championship featuring multiple race categories including Modified Production, Thundersport, and Motorcycle classes.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
    type: 'circuit',
    schedule: [
      { time: '8:00 AM', activity: 'Practice Session' },
      { time: '10:00 AM', activity: 'Qualifying' },
      { time: '1:00 PM', activity: 'Race 1' },
      { time: '3:30 PM', activity: 'Race 2' }
    ]
  },
  {
    id: '2',
    title: 'Rally Jamaica 2024',
    date: 'April 20, 2024',
    location: 'Various Locations, Jamaica',
    description: 'The premier rally event in the Caribbean, featuring challenging stages across Jamaica\'s most demanding terrain.',
    image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da',
    type: 'rally',
    schedule: [
      { time: '7:00 AM', activity: 'Stage 1 Start' },
      { time: '12:00 PM', activity: 'Service Park' },
      { time: '2:00 PM', activity: 'Stage 2 Start' }
    ]
  },
  {
    id: '3',
    title: 'Caribbean Motor Racing Championship',
    date: 'May 15, 2024',
    location: 'Dover Raceway, St. Ann',
    description: 'International racing event featuring top drivers from across the Caribbean region competing for championship points.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7',
    type: 'circuit',
    schedule: [
      { time: '9:00 AM', activity: 'Practice' },
      { time: '11:00 AM', activity: 'Qualifying' },
      { time: '2:00 PM', activity: 'Feature Races' }
    ]
  }
];

// News Data
export const news: NewsItem[] = [
  {
    id: '1',
    title: 'David Summerbell Jr. Breaks Dover Lap Record',
    excerpt: 'In a stunning display of skill, David Summerbell Jr. sets new lap record at Dover Raceway.',
    content: 'Full article content here...',
    author: 'Michael Thompson',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1532906619279-a4b7267faa66',
    category: 'Circuit Racing',
    tags: ['Dover', 'Record', 'Championship']
  },
  {
    id: '2',
    title: 'Rally Jamaica 2024 Route Revealed',
    excerpt: 'Organizers announce challenging new stages for Rally Jamaica 2024.',
    content: 'Full article content here...',
    author: 'Sarah Williams',
    date: 'February 25, 2024',
    image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da',
    category: 'Rally',
    tags: ['Rally Jamaica', 'Motorsport']
  },
  {
    id: '3',
    title: 'Sara Misir Makes History in British GT Cup',
    excerpt: 'Jamaican driver achieves podium finish in international GT racing debut.',
    content: 'Full article content here...',
    author: 'James Roberts',
    date: 'February 20, 2024',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7',
    category: 'International',
    tags: ['GT Racing', 'International']
  }
];