
export interface Metric {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
  percentage: string;
  progress: number;
}

export interface DataSource {
  id: string;
  name: string;
  date: string;
  avatar: string;
}

export interface LocationData {
  id: string;
  city: string;
  coords: [number, number];
  value: number;
}

export interface SectionContent {
  title: string;
  description: string;
  tag?: string;
}

export interface CardData {
  id: number;
  title: string;
  content: string;
  color: string;
}
