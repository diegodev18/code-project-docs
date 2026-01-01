export type Difficulty = "easy" | "medium" | "hard";

export interface Project {
    author: string;
    difficulty: Difficulty;
    description: string;
    tags?: string[];
}

export interface Locale {
    slug: string;
    title: string;
    description: string;
}

export interface Stack {
    stack: string[];
}

export interface Phase {
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
        locale: Locale;
        stack: Stack;
        phases: Phase[];
    }[];
}
