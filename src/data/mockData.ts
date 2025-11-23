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
  registrationUrl?: string;
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
  friendNames?: Record<string, string>;
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

export interface Badge {
  id: string;
  name: string;
  description: string;
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  category: 'Event' | 'Milestone' | 'Special';
  imageUrl: string;
  requirement: string;
}

// Real events from data file
export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Bayside Food Distribution',
    type: 'USD',
    location: {
      lat: 32.8314,
      lng: -117.1536,
      address: '2202 Comstock St, San Diego, CA 92111'
    },
    date: '2024-12-06',
    description: 'Help distribute food to the community every Friday. Make a difference in food security.',
    points: 60,
    hours: 3,
    registrationUrl: 'https://changemaker.ink/baysideUSD'
  },
  {
    id: '2',
    name: 'Rachel\'s Night Shelter',
    type: 'USD',
    location: {
      lat: 32.7145,
      lng: -117.1611,
      address: '759 8th Ave, San Diego, CA 92101'
    },
    date: '2024-12-05',
    description: 'Volunteer at Rachel\'s Night Shelter to support those experiencing homelessness.',
    points: 75,
    hours: 3,
    registrationUrl: 'https://sandiego.my.salesforce-sites.com/events#/esr?eid=a0KUY00000MAWzf2AH'
  },
  {
    id: '3',
    name: 'The Brunch Club',
    type: 'USD',
    location: {
      lat: 32.7145,
      lng: -117.1611,
      address: '1250 6th Ave, San Diego, CA 92101'
    },
    date: '2024-12-07',
    description: 'Serve brunch to the community every Saturday morning. Build connections while serving others.',
    points: 50,
    hours: 3,
    registrationUrl: 'https://changemaker.ink/brunchclub'
  },
  {
    id: '4',
    name: 'Pancakes Serving Up Hope',
    type: 'USD',
    location: {
      lat: 32.7145,
      lng: -117.1611,
      address: '808 J St, San Diego, CA 92101'
    },
    date: '2024-12-06',
    description: 'Join us for a pancake breakfast event serving hope to the community.',
    points: 40,
    hours: 4,
    registrationUrl: 'https://lp.constantcontactpages.com/su/dEdSjvb/Pancakes'
  },
  {
    id: '5',
    name: 'Prep a Care Kit',
    type: 'USD',
    location: {
      lat: 32.7715,
      lng: -117.1886,
      address: 'USD Ministry Center, San Diego, CA'
    },
    date: '2024-12-13',
    description: 'Help prepare care kits for those in need. Make a tangible difference in someone\'s life.',
    points: 45,
    hours: 3,
    registrationUrl: 'mailto:ccacabelos@sandiego.edu'
  },
  {
    id: '6',
    name: 'USD Tree Planting Day',
    type: 'USD',
    location: {
      lat: 32.7715,
      lng: -117.1886,
      address: 'USD Campus, San Diego, CA'
    },
    date: '2024-11-15',
    description: 'Plant trees on campus to improve air quality and create a greener environment.',
    points: 75,
    hours: 3
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'Sarah Martinez',
    points: 1250,
    badges: ['Food Distribution Hero', 'Tree Planter', 'Early Adopter', 'Community Champion'],
    eventsAttended: 15,
    hoursLogged: 32,
    friends: ['2', '3'],
    friendNames: {
      '2': 'Michael Chen',
      '3': 'Emily Rodriguez'
    }
  },
  {
    id: '2',
    username: 'Michael Chen',
    points: 980,
    badges: ['Shelter Volunteer', 'Community Leader', 'Brunch Club Regular'],
    eventsAttended: 12,
    hoursLogged: 28,
    friends: ['1', '3'],
    friendNames: {
      '1': 'Sarah Martinez',
      '3': 'Emily Rodriguez'
    }
  },
  {
    id: '3',
    username: 'Emily Rodriguez',
    points: 1150,
    badges: ['Care Kit Creator', 'Hope Server', 'Weekend Warrior'],
    eventsAttended: 14,
    hoursLogged: 30,
    friends: ['1', '2'],
    friendNames: {
      '1': 'Sarah Martinez',
      '2': 'Michael Chen'
    }
  },
  {
    id: '4',
    username: 'David Kim',
    points: 850,
    badges: ['Tree Planter', 'Newcomer'],
    eventsAttended: 10,
    hoursLogged: 22,
    friends: [],
    friendNames: {}
  },
  {
    id: '5',
    username: 'Jessica Thompson',
    points: 720,
    badges: ['Food Distribution Hero'],
    eventsAttended: 8,
    hoursLogged: 18,
    friends: [],
    friendNames: {}
  }
];

// Gallery images based on the attached photos - using placeholder URLs that should be replaced with actual uploaded images
export const mockGalleryImages: GalleryImage[] = [
  // Bayside Food Distribution
  {
    id: '1',
    eventId: '1',
    eventName: 'Bayside Food Distribution',
    url: '/images/bayside-food-1.jpg', // Replace with actual uploaded image
    caption: 'USD Volunteers at Bayside Community Center Food Distribution',
    date: '2024-12-06',
    userId: '1'
  },
  {
    id: '2',
    eventId: '1',
    eventName: 'Bayside Food Distribution',
    url: '/images/bayside-food-2.jpg', // Replace with actual uploaded image
    caption: 'Sorting canned goods for distribution',
    date: '2024-12-06',
    userId: '2'
  },
  // Pancakes Serving Up Hope
  {
    id: '3',
    eventId: '4',
    eventName: 'Pancakes Serving Up Hope',
    url: '/images/pancakes-1.jpg', // Replace with actual uploaded image
    caption: 'Community Kitchen - Pancake Breakfast volunteers',
    date: '2024-12-06',
    userId: '3'
  },
  {
    id: '4',
    eventId: '4',
    eventName: 'Pancakes Serving Up Hope',
    url: '/images/pancakes-2.jpg', // Replace with actual uploaded image
    caption: 'Serving pancakes to the community',
    date: '2024-12-06',
    userId: '1'
  },
  // USD Tree Planting Day
  {
    id: '5',
    eventId: '6',
    eventName: 'USD Tree Planting Day',
    url: '/images/tree-planting-1.jpg', // Replace with actual uploaded image
    caption: 'USD students planting trees on campus',
    date: '2024-11-15',
    userId: '1'
  },
  {
    id: '6',
    eventId: '6',
    eventName: 'USD Tree Planting Day',
    url: '/images/tree-planting-2.jpg', // Replace with actual uploaded image
    caption: 'Team effort at USD Tree Planting Day',
    date: '2024-11-15',
    userId: '4'
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
    name: 'USD Changemaker T-Shirt',
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

// Badge definitions
export const mockBadges: Badge[] = [
  // Event-specific badges
  {
    id: 'badge-1',
    name: 'Food Distribution Hero',
    description: 'Volunteered at Bayside Food Distribution',
    tier: 'Bronze',
    category: 'Event',
    imageUrl: 'https://via.placeholder.com/150/00a499/ffffff?text=Food+Hero',
    requirement: 'Attend Bayside Food Distribution event'
  },
  {
    id: 'badge-2',
    name: 'Shelter Volunteer',
    description: 'Volunteered at Rachel\'s Night Shelter',
    tier: 'Silver',
    category: 'Event',
    imageUrl: 'https://via.placeholder.com/150/0074c8/ffffff?text=Shelter+Vol',
    requirement: 'Attend Rachel\'s Night Shelter event'
  },
  {
    id: 'badge-3',
    name: 'Tree Planter',
    description: 'Participated in USD Tree Planting Day',
    tier: 'Gold',
    category: 'Event',
    imageUrl: 'https://via.placeholder.com/150/728c1f/ffffff?text=Tree+Planter',
    requirement: 'Attend USD Tree Planting Day'
  },
  {
    id: 'badge-4',
    name: 'Hope Server',
    description: 'Volunteered at Pancakes Serving Up Hope',
    tier: 'Bronze',
    category: 'Event',
    imageUrl: 'https://via.placeholder.com/150/eeaa2b/ffffff?text=Hope+Server',
    requirement: 'Attend Pancakes Serving Up Hope event'
  },
  {
    id: 'badge-5',
    name: 'Care Kit Creator',
    description: 'Helped prep care kits at Ministry Center',
    tier: 'Silver',
    category: 'Event',
    imageUrl: 'https://via.placeholder.com/150/5a2b81/ffffff?text=Care+Kit',
    requirement: 'Attend Prep a Care Kit event'
  },
  {
    id: 'badge-6',
    name: 'Brunch Club Regular',
    description: 'Regular volunteer at The Brunch Club',
    tier: 'Gold',
    category: 'Event',
    imageUrl: 'https://via.placeholder.com/150/c25219/ffffff?text=Brunch+Club',
    requirement: 'Attend The Brunch Club 3+ times'
  },
  // Milestone badges
  {
    id: 'badge-7',
    name: 'Newcomer',
    description: 'Attended your first changemaking opportunity',
    tier: 'Bronze',
    category: 'Milestone',
    imageUrl: 'https://via.placeholder.com/150/646469/ffffff?text=Newcomer',
    requirement: 'Attend 1 event'
  },
  {
    id: 'badge-8',
    name: 'Community Champion',
    description: 'Attended 5 changemaking opportunities',
    tier: 'Silver',
    category: 'Milestone',
    imageUrl: 'https://via.placeholder.com/150/0074c8/ffffff?text=Champion',
    requirement: 'Attend 5 events'
  },
  {
    id: 'badge-9',
    name: 'Weekend Warrior',
    description: 'Attended 10 changemaking opportunities',
    tier: 'Gold',
    category: 'Milestone',
    imageUrl: 'https://via.placeholder.com/150/eeaa2b/ffffff?text=Warrior',
    requirement: 'Attend 10 events'
  },
  {
    id: 'badge-10',
    name: 'Changemaker Legend',
    description: 'Attended 20+ changemaking opportunities',
    tier: 'Platinum',
    category: 'Milestone',
    imageUrl: 'https://via.placeholder.com/150/003b70/ffffff?text=Legend',
    requirement: 'Attend 20+ events'
  },
  {
    id: 'badge-11',
    name: 'Early Adopter',
    description: 'Joined Changemaker Map in the first month',
    tier: 'Special',
    category: 'Special',
    imageUrl: 'https://via.placeholder.com/150/00a499/ffffff?text=Early',
    requirement: 'Join in first month'
  },
  {
    id: 'badge-12',
    name: 'Community Leader',
    description: 'Invited 5+ friends to join',
    tier: 'Gold',
    category: 'Special',
    imageUrl: 'https://via.placeholder.com/150/728c1f/ffffff?text=Leader',
    requirement: 'Invite 5+ friends'
  }
];
