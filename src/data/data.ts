
import { Metric, DataSource, LocationData, CardData } from '@/components/types/types';

export const METRICS: Metric[] = [
  { label: 'Total Users', value: '2.5k', trend: 'up', percentage: '12%', progress: 78 },
  { label: 'Avg Session', value: '4m 32s', trend: 'up', percentage: '5%', progress: 65 },
  { label: 'Bounce Rate', value: '42.3%', trend: 'down', percentage: '2%', progress: 24 },
  { label: 'Success Rate', value: '88%', trend: 'up', percentage: '8%', progress: 60 },
];

export const DATA_SOURCES: DataSource[] = [
  { id: '1', name: 'Sandra Bassey', date: 'November 20, 2025', description: 'Lorem ipsum ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { id: '2', name: 'John Ugwu', date: 'December 18, 2025', description: 'Lorem ipsum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: '3', name: 'Matthew Olamide', date: 'January 05, 2026', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export const LOCATIONS: LocationData[] = [
  { id: '1', city: 'New York', coords: [40.7128, -74.0060], value: 85 },     // North America
  { id: '2', city: 'London', coords: [51.5074, -0.1278], value: 92 },        // Europe
  { id: '3', city: 'Lagos', coords: [6.5244, 3.3792], value: 85 }, //  Africa
  { id: '4', city: 'Tokyo', coords: [35.6895, 139.6917], value: 78 },        // Asia
  { id: '5', city: 'Sydney', coords: [-33.8688, 151.2093], value: 64 }       // Australia
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

