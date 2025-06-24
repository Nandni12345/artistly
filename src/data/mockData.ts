
export interface Artist {
  id: string;
  name: string;
  category: string[];
  location: string;
  priceRange: string;
  bio: string;
  imageUrl: string;
  rating: number;
  languages: string[];
  verified: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "singers",
    name: "Singers",
    icon: "🎤",
    description: "Vocal performers across all genres",
    count: 247
  },
  {
    id: "dancers",
    name: "Dancers",
    icon: "💃",
    description: "Professional dance performers",
    count: 189
  },
  {
    id: "speakers",
    name: "Speakers",
    icon: "🎙️",
    description: "Motivational and keynote speakers",
    count: 156
  },
  {
    id: "djs",
    name: "DJs",
    icon: "🎧",
    description: "Music DJs and electronic artists",
    count: 203
  }
];

export const artists: Artist[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    category: ["singers", "performers"],
    location: "New York, NY",
    priceRange: "$500-1000",
    bio: "Professional jazz and pop vocalist with 10+ years of experience. Available for weddings, corporate events, and private parties.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    languages: ["English", "Spanish"],
    verified: true
  },
  {
    id: "2",
    name: "Marcus Chen",
    category: ["dancers", "choreographers"],
    location: "Los Angeles, CA",
    priceRange: "$300-800",
    bio: "Contemporary and hip-hop dancer specializing in wedding choreography and corporate entertainment.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    languages: ["English", "Mandarin"],
    verified: true
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    category: ["speakers", "coaches"],
    location: "Chicago, IL",
    priceRange: "$1000-2500",
    bio: "Motivational speaker and leadership coach. TEDx speaker with expertise in personal development and team building.",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face",
    rating: 5.0,
    languages: ["English", "Spanish"],
    verified: true
  },
  {
    id: "4",
    name: "DJ Alex Storm",
    category: ["djs", "producers"],
    location: "Miami, FL",
    priceRange: "$400-1200",
    bio: "Electronic music producer and DJ specializing in house, techno, and progressive music for clubs and festivals.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
    languages: ["English", "Portuguese"],
    verified: false
  },
  {
    id: "5",
    name: "Isabella Rossi",
    category: ["singers", "performers"],
    location: "Nashville, TN",
    priceRange: "$600-1500",
    bio: "Country and pop singer-songwriter with multiple chart-topping hits. Available for festivals and private events.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    languages: ["English", "Italian"],
    verified: true
  },
  {
    id: "6",
    name: "Carlos Martinez",
    category: ["dancers", "instructors"],
    location: "Austin, TX",
    priceRange: "$250-700",
    bio: "Latin dance specialist offering salsa, bachata, and tango performances and instruction for events.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop&crop=face",
    rating: 4.6,
    languages: ["English", "Spanish"],
    verified: true
  }
];

export const submissions = [
  {
    id: "1",
    name: "Vaishali Singh",
    category: "Singer",
    location: "Delhi, India",
    fee: "RS 50000",
    submittedAt: "2024-01-15",
    status: "pending"
  },
  {
    id: "2", 
    name: "Umang Sharma",
    category: "DJ",
    location: "Bihar, India",
    fee: "RS 30000",
    submittedAt: "2024-01-14",
    status: "approved"
  },
  {
    id: "3",
    name: "Utkarsh Sharma",
    category: "Speaker",
    location: "Mumbai, India", 
    fee: "RS 45000",
    submittedAt: "2024-01-13",
    status: "pending"
  }
];
