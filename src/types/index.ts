export type LanguageId = 'en' | 'hi' | 'te' | 'mr' | 'ta' | 'ur' | 'r-ur' | 'hin';

export interface LanguageInfo {
  id: LanguageId;
  label: string;
  nativeLabel: string;
  script: string;
  dir: 'ltr' | 'rtl';
  flag: string;
  greeting: string;
}

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'Fundamentals' | 'Neural Networks' | 'Generative AI' | 'NLP' | 'Computer Vision' | 'Ethics & Prompting';
  level: DifficultyLevel;
  translations: Record<LanguageId, {
    nativeTerm: string;
    tagline: string;
    explanation: string;
    analogy: string;
    example: string;
  }>;
  relatedTerms: string[];
}

export interface ResourceLink {
  title: string;
  type: 'YouTube' | 'Article' | 'Course' | 'Interactive Sandbox';
  duration: string;
  url: string;
  language?: string;
}

export interface MindMapNode {
  id: string;
  parentId?: string;
  title: string;
  iconName: string;
  level: DifficultyLevel;
  category: string;
  translations: Record<LanguageId, {
    title: string;
    shortDesc: string;
    analogy: string;
    details: string;
  }>;
  resources: ResourceLink[];
  childrenIds?: string[];
  x?: number;
  y?: number;
}

export type VizType = 'neural-network' | 'ml-pipeline' | 'pattern-matching' | 'transformer' | 'full-workflow';

export interface AITool {
  id: string;
  name: string;
  category: 'Text & Writing' | 'Images & Art' | 'Coding' | 'Audio & Voice' | 'Research' | 'Video';
  description: Record<LanguageId, string>;
  freeTier: boolean;
  link: string;
  badge: string;
  pricing: string;
}

export interface QuizQuestion {
  id: string;
  question: Record<LanguageId, string>;
  options: Record<LanguageId, string[]>;
  correctIndex: number;
  explanation: Record<LanguageId, string>;
}

export interface LearnerProfile {
  name: string;
  avatarSeed: string;
  streakDays: number;
  streakActiveToday: boolean;
  streakDaysList: boolean[]; // 7 days of week Mon-Sun
  xp: number;
  level: number;
  completedNodes: string[];
  bookmarkedTermIds: string[];
  earnedBadgeIds: string[];
  weeklyChallengeCompleted: boolean;
}

export type ActivePage = 'landing' | 'mindmap' | 'visualizer' | 'glossary' | 'dashboard' | 'tools' | 'quiz';
