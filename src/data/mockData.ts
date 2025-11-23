export interface Event {
  id: string;
  name: string;
  type: 'USD' | 'UM' | 'Greater SD';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  date: string;
  description: string;
  points: number;
  hours: number;
}

export interface User {
  id: string;
  username: string;
  profilePicture?: string;
  points: number;
  badges: string[];
  eventsAttended: number;
  hoursLogged: number;
  friends: string[];
}

export interface GalleryImage {
  id: string;
  eventId: string;
  eventName: string;
  url: string;
  caption: string;
  date: string;
  userId: string;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  category: 'Campus Cash' | 'Dining Dollars' | 'Merch';
  image?: string;
}

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Beach Cleanup - Mission Beach',
    type: 'USD',
    location: {
      lat: 32.7731,
      lng: -117.2516,
      address: 'Mission Beach, San Diego, CA'
    },
    date: '2024-02-15',
    description: 'Join us for a community beach cleanup to keep our oceans clean.',
    points: 50,
    hours: 2
  },
  {
    id: '2',
    name: 'Campus Tree Planting',
    type: 'USD',
    location: {
      lat: 32.7715,
      lng: -117.1886,
      address: 'USD Campus, San Diego, CA'
    },
    date: '2024-02-20',
    description: 'Help plant native trees on campus to improve air quality.',
    points: 75,
    hours: 3
  },
  {
    id: '3',
    name: 'Sustainable Fashion Workshop',
    type: 'USD',
    location: {
      lat: 32.7715,
      lng: -117.1886,
      address: 'USD Changemaker Hub, San Diego, CA'
    },
    date: '2024-02-25',
    description: 'Learn about sustainable fashion practices and upcycling.',
    points: 40,
    hours: 1.5
  },
  {
    id: '4',
    name: 'Community Garden Volunteer Day',
    type: 'Greater SD',
    location: {
      lat: 32.7157,
      lng: -117.1611,
      address: 'Balboa Park Community Garden, San Diego, CA'
    },
    date: '2024-03-01',
    description: 'Volunteer at the community garden and learn about urban farming.',
    points: 60,
    hours: 2.5
  },
  {
    id: '5',
    name: 'Recycling Drive',
    type: 'USD',
    location: {
      lat: 32.7715,
      lng: -117.1886,
      address: 'USD Student Life Center, San Diego, CA'
    },
    date: '2024-03-05',
    description: 'Drop off recyclables and learn about proper recycling practices.',
    points: 30,
    hours: 1
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'EcoWarrior',
    points: 1250,
    badges: ['Beach Cleaner', 'Tree Planter', 'Early Adopter'],
    eventsAttended: 15,
    hoursLogged: 32,
    friends: ['2', '3']
  },
  {
    id: '2',
    username: 'GreenThumb',
    points: 980,
    badges: ['Garden Master', 'Community Leader'],
    eventsAttended: 12,
    hoursLogged: 28,
    friends: ['1', '3']
  },
  {
    id: '3',
    username: 'OceanGuardian',
    points: 1150,
    badges: ['Beach Cleaner', 'Marine Protector'],
    eventsAttended: 14,
    hoursLogged: 30,
    friends: ['1', '2']
  },
  {
    id: '4',
    username: 'SustainableSam',
    points: 850,
    badges: ['Fashion Forward'],
    eventsAttended: 10,
    hoursLogged: 22,
    friends: []
  },
  {
    id: '5',
    username: 'EcoExplorer',
    points: 720,
    badges: ['Newcomer'],
    eventsAttended: 8,
    hoursLogged: 18,
    friends: []
  }
];

export const mockGalleryImages: GalleryImage[] = [
  {
    id: '1',
    eventId: '1',
    eventName: 'Beach Cleanup - Mission Beach',
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    caption: 'Team effort at Mission Beach cleanup',
    date: '2024-02-15',
    userId: '1'
  },
  {
    id: '2',
    eventId: '1',
    eventName: 'Beach Cleanup - Mission Beach',
    url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800',
    caption: 'Beautiful day for cleaning up!',
    date: '2024-02-15',
    userId: '2'
  },
  {
    id: '3',
    eventId: '2',
    eventName: 'Campus Tree Planting',
    url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800',
    caption: 'New trees on campus',
    date: '2024-02-20',
    userId: '1'
  },
  {
    id: '4',
    eventId: '3',
    eventName: 'Sustainable Fashion Workshop',
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    caption: 'Learning about sustainable fashion',
    date: '2024-02-25',
    userId: '4'
  },
  {
    id: '5',
    eventId: '4',
    eventName: 'Community Garden Volunteer Day',
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
    caption: 'Community garden harvest',
    date: '2024-03-01',
    userId: '2'
  }
];

export const mockRewards: Reward[] = [
  {
    id: '1',
    name: '$10 Campus Cash',
    description: 'Redeem points for campus cash to use at USD locations',
    pointsCost: 500,
    category: 'Campus Cash'
  },
  {
    id: '2',
    name: '$20 Campus Cash',
    description: 'Redeem points for campus cash to use at USD locations',
    pointsCost: 1000,
    category: 'Campus Cash'
  },
  {
    id: '3',
    name: '$15 Dining Dollars',
    description: 'Add dining dollars to your USD account',
    pointsCost: 750,
    category: 'Dining Dollars'
  },
  {
    id: '4',
    name: '$30 Dining Dollars',
    description: 'Add dining dollars to your USD account',
    pointsCost: 1500,
    category: 'Dining Dollars'
  },
  {
    id: '5',
    name: 'USD Sustainability T-Shirt',
    description: 'Eco-friendly cotton t-shirt with Changemaker Map logo',
    pointsCost: 800,
    category: 'Merch'
  },
  {
    id: '6',
    name: 'USD Reusable Water Bottle',
    description: 'Stainless steel water bottle with USD branding',
    pointsCost: 600,
    category: 'Merch'
  },
  {
    id: '7',
    name: 'USD Tote Bag',
    description: 'Canvas tote bag perfect for shopping and events',
    pointsCost: 400,
    category: 'Merch'
  }
];

