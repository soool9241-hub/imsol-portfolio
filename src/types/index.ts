export interface Strength {
  icon: string;
  tag: string;
  quote: string;
  pts: string[];
  img: string;
}

export interface Project {
  t: string;
  d: string;
  s: string;
  tag: string;
  hl?: boolean;
}

export interface ProjectGroup {
  y: string;
  items: Project[];
}

export interface Collab {
  name: string;
  sub: string;
  desc: string;
  role: string;
  emoji: string;
}

export interface Revenue {
  y: string;
  v: number;
}

export interface TechCategory {
  c: string;
  i: string[];
  e: string;
}

export interface Lecture {
  t: string;
  d: string;
  y: string;
}

export interface JourneyItem {
  y: string;
  e: string;
  d: string;
}

export interface GalleryItem {
  src: string;
  cap: string;
}

export interface AgentTeam {
  t: string;
  n: string;
  d: string;
  c: string;
}

export interface MetricItem {
  n: string;
  u: string;
  c: string;
}

export interface StatItem {
  value: string;
  label: string;
}
