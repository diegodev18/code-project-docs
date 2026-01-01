export type Difficulty = "easy" | "medium" | "hard";

export interface Project {
    author: string;
    difficulty: Difficulty;
    description: string;
    tags?: string[];
}

export interface Locale {
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
    project: {
        data: Project;
        locales: Record<string, Locale>;
        project: {
            stack: Stack;
            phases: Phase[];
        }[];
    };
}
