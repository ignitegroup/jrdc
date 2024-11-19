import type { HistoricalEvent, Legend } from '../types';

export const historicalEvents: HistoricalEvent[] = [
  {
    year: '1990',
    title: 'JRDC Founded',
    description: 'The Jamaica Race Drivers Club was established as the premier motorsport organization in Jamaica, introducing professional standards and organized competition structures.',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7'
  },
  {
    year: '1995',
    title: 'Dover Raceway Modernization',
    description: 'Major upgrades to Dover Raceway including track resurfacing, improved safety barriers, and expanded spectator facilities.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537'
  },
  {
    year: '2000',
    title: 'First Caribbean Motor Racing Championship',
    description: 'Jamaica hosts the inaugural Caribbean Motor Racing Championship, bringing together top drivers from across the region.',
    image: 'https://images.unsplash.com/photo-1533559662493-65ffb1c15517'
  },
  {
    year: '2010',
    title: 'International Recognition',
    description: 'JRDC receives FIA recognition, marking a significant milestone in the professionalization of Jamaican motorsport.',
    image: 'https://images.unsplash.com/photo-1541447270888-83e8494f9c06'
  }
];

export const legends: Legend[] = [
  {
    name: 'David Summerbell Sr.',
    era: '1970s-1990s',
    bio: 'One of the founding fathers of modern Jamaican motorsport, known for his exceptional skill and commitment to developing the sport.',
    image: 'https://images.unsplash.com/photo-1532906619279-a4b7267faa66',
    achievements: [
      'Multiple Dover Champion (1975-1985)',
      'Pioneered professional racing standards in Jamaica',
      'Founding member of JRDC',
      'First Jamaican to compete internationally'
    ]
  },
  {
    name: 'Peter Moodie Sr.',
    era: '1980s-2000s',
    bio: 'A dominant force in Jamaican motorsport for over two decades, known for his technical expertise and racing innovation.',
    image: 'https://images.unsplash.com/photo-1553502841-9f0e45f8f5c3',
    achievements: [
      'Record holder for most Dover wins in a season',
      'Developed advanced racing techniques',
      'Mentored numerous successful drivers',
      'Contributed to Dover Raceway development'
    ]
  },
  {
    name: 'Douglas Gore',
    era: '1990s-2010s',
    bio: 'Known as "Hollywood" for his showmanship and spectacular driving style, revolutionized local racing with European race car technology.',
    image: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd',
    achievements: [
      'Multiple Caribbean racing champion',
      'First to introduce DTM technology to Jamaica',
      'Dover lap record holder',
      'Pioneered professional team management'
    ]
  }
];