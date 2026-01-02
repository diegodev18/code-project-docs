export type Difficulty = "easy" | "medium" | "hard";

export interface Project {
  author: string;
  difficulty: Difficulty;
  slug: string;
  tags?: string[];
}

export interface Locale {
  slug: string;
  title: string;
  description: string;
}

export interface Stack {
  stack: string[];
  slug: string;
}

export interface Phase {
  slug: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  steps: Step[];
}

export interface Step {
  title: string;
  description: string;
  file: string;
  content: string;
}

export interface Entry {
  data: Project;
  project: {
    locale: {
      data: Locale;
      project: {
        stack: {
          data: Stack;
          phases: Phase[];
        };
      }[];
    };
  }[];
}
