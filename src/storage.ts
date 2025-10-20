import type { Task } from "./util";

export const Storage = {
    saveDatabase: (database: Task[]) => {
        localStorage.setItem("database", JSON.stringify(database));
    },
    loadStorage: () => {
        const database = localStorage.getItem("database");

        return database ? JSON.parse(database) : ([] as Task[]);
    },
    clearStorage: () => {
        localStorage.clear();
    },
};
