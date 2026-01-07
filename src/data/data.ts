
import { Metric, DataSource, LocationData, CardData } from '@/components/types/types';

export const METRICS: Metric[] = [
  { label: 'Total Users', value: '2.5k', trend: 'up', percentage: '12%', progress: 78 },
  { label: 'Avg Session', value: '4m 32s', trend: 'up', percentage: '5%', progress: 65 },
  { label: 'Bounce Rate', value: '42.3%', trend: 'down', percentage: '2%', progress: 24 },
  { label: 'Success', value: '88%', trend: 'up', percentage: '8%', progress: 60 },
];

export const DATA_SOURCES: DataSource[] = [
  { id: '1', name: 'Sandra Bassey', date: 'January 05, 2026', avatar: 'https://picsum.photos/32/32?random=1' },
  { id: '2', name: 'John Ugwu', date: 'January 05, 2026', avatar: 'https://picsum.photos/32/32?random=2' },
  { id: '3', name: 'Matthew Olamide', date: 'January 05, 2026', avatar: 'https://picsum.photos/32/32?random=3' },
];

export const LOCATIONS: LocationData[] = [
  { id: '1', city: 'Lagos', coords: [6.5244, 3.3792], value: 85 },        // West Africa
  { id: '2', city: 'Nairobi', coords: [-1.2921, 36.8219], value: 92 },  // East Africa
  { id: '3', city: 'Cairo', coords: [30.0444, 31.2357], value: 78 },    // North Africa
  { id: '4', city: 'Cape Town', coords: [-33.9249, 18.4241], value: 64 } // Southern Africa
];


export const STACK_CARDS: CardData[] = [
  { 
    id: 1, 
    title: 'Top Conversation Drivers', 
    content: 'User engagement is primarily driven by pricing clarity, onboarding experience, and response speed. Questions related to feature availability account for 38% of total interactions, while support-related prompts have decreased by 12% compared to last week.',
    color: 'bg-purple-100'
  },
  { 
    id: 2, 
    title: 'Sentiment Shift Analysis', 
    content: 'Positive sentiment increased across recent conversations, especially among returning users. The most common positive signals include faster resolution times and clearer explanations, while frustration signals are mainly tied to delayed responses during peak hours.',
    color: 'bg-indigo-100'
  },
  { 
    id: 3, 
    title: 'Behavioral Deep Dive', 
    content: 'Users who interact with at least three follow-up questions are 2.4× more likely to complete a session. Drop-offs typically occur after long responses, suggesting a preference for concise, step-by-step explanations.',
    color: 'bg-blue-100'
  },
];

