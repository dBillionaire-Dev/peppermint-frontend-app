
import { Metric, DataSource, LocationData, CardData } from '@/components/types/types';

export const METRICS: Metric[] = [
  { label: 'Total Users', value: '2.5k', trend: 'up', percentage: '12%', progress: 78 },
  { label: 'Avg Session', value: '4m 32s', trend: 'up', percentage: '5%', progress: 65 },
  { label: 'Bounce Rate', value: '42.3%', trend: 'down', percentage: '2%', progress: 24 },
  { label: 'Completion', value: '88%', trend: 'up', percentage: '8%', progress: 60 },
];

export const DATA_SOURCES: DataSource[] = [
  { id: '1', name: 'Sawyer Merritt', date: 'November 20, 2025', avatar: 'https://picsum.photos/32/32?random=1' },
  { id: '2', name: 'Jessibeesocial', date: 'November 20, 2025', avatar: 'https://picsum.photos/32/32?random=2' },
  { id: '3', name: 'Sawyer Merritt', date: 'November 20, 2025', avatar: 'https://picsum.photos/32/32?random=3' },
];

export const LOCATIONS: LocationData[] = [
  { id: '1', city: 'San Francisco', coords: [37.7749, -122.4194], value: 85 },
  { id: '2', city: 'New York', coords: [40.7128, -74.0060], value: 92 },
  { id: '3', city: 'London', coords: [51.5074, -0.1278], value: 78 },
  { id: '4', city: 'Tokyo', coords: [35.6762, 139.6503], value: 64 },
];

export const STACK_CARDS: CardData[] = [
  { 
    id: 1, 
    title: 'Section 2', 
    content: 'Commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    color: 'bg-purple-100'
  },
  { 
    id: 2, 
    title: 'Section 2 - Variation', 
    content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
    color: 'bg-indigo-100'
  },
  { 
    id: 3, 
    title: 'Section 2 - Deep Dive', 
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    color: 'bg-blue-100'
  },
];
