export interface CumulativeItem {
    id: string;
    count: number;
    createdAt: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    goal: number;
    isCompleted: boolean;
    createdAt: string;
    cumulative: CumulativeItem[];
}

export const computeCumulativeTotal = (task: Task): number => {
    return task.cumulative.reduce((acc, curr) => acc + curr.count, 0);
};

export const _database = [
    {
        id: "123e4567-e89b-12d3-a456-426614174000",
        title: "Read 100 pages of a book",
        description: "Read 100 pages of any book of your choice.",
        goal: 100,
        isCompleted: false,
        createdAt: "2025-09-28T10:00:00Z",
        cumulative: [
            {
                id: "123e4567-e89b-12d3-a456-426614174001",
                count: 20,
                createdAt: "2025-09-28T12:00:00Z",
            },
            {
                id: "123e4567-e89b-12d3-a456-426614174002",
                count: 30,
                createdAt: "2025-09-28T15:00:00Z",
            },
        ],
    },
    {
        id: "123e4567-e89b-12d3-a456-426614174003",
        title: "Exercise for 30 minutes",
        description: "Engage in physical exercise for a total of 30 minutes.",
        goal: 30,
        isCompleted: false,
        createdAt: "2025-09-28T11:00:00Z",
        cumulative: [
            {
                id: "123e4567-e89b-12d3-a456-426614174004",
                count: 15,
                createdAt: "2025-09-28T13:00:00Z",
            },
            {
                id: "123e4567-e89b-12d3-a456-426614174005",
                count: 10,
                createdAt: "2025-09-28T16:00:00Z",
            },
        ],
    },
    {
        id: "123e4567-e89b-12d3-a456-426614174006",
        title: "Meditate for 15 minutes",
        description: "Practice meditation for a total of 15 minutes.",
        goal: 15,
        isCompleted: true,
        createdAt: "2025-09-28T09:00:00Z",
        cumulative: [
            {
                id: "123e4567-e89b-12d3-a456-426614174007",
                count: 15,
                createdAt: "2025-09-28T10:30:00Z",
            },
        ],
    },
];

export function validateGoalForm(
    title: string,
    goal: number
): {
    isValid: boolean;
    message: string;
} {
    if (title.trim() === "" || goal <= 1) {
        return {
            isValid: false,
            message: "Title must not be empty and goal must be greater than 1.",
        };
    }

    if (goal < 1) {
        return {
            isValid: false,
            message: "Goal must not be less than 1.",
        };
    }

    return { isValid: true, message: "" };
}
