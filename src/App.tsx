// Web Dev Simplified
// Learn React With This One Project
// https://www.youtube.com/watch?v=Rh3tobg7hEo

// Austin Davis
// React JS Tutorial - #7 - Multiple Pages
// https://www.youtube.com/watch?v=qi32YwjoN2U&list=PLB4OYaYkKsG6Yd9SPQJNnl0c4HXV3J9Ae&index=7

// Kent C. Dodds
// Store Values in localStorage with the React useEffect Hook
// https://egghead.io/lessons/react-store-values-in-localstorage-with-the-react-useeffect-hook

// Aditya Saxena
// How to create a custom debounce react hook using useEffect
// https://adityasaxena.hashnode.dev/how-to-create-a-custom-debounce-react-hook-using-useeffect

import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { GoalForm } from "./Pages/GoalForm";
import { GoalList } from "./Pages/GoalList";
import { GoalView } from "./Pages/GoalView";
import { Storage } from "./storage";
import { type Task } from "./util";

export default function App() {
    const [database, setDatabase] = useState<Task[]>(() =>
        Storage.loadStorage()
    );

    useEffect(() => {
        const id = setTimeout(() => Storage.saveDatabase(database), 200);

        return () => clearTimeout(id);
    }, [database]);

    return (
        <>
            <HashRouter>
                <Routes>
                    {/* /goals -> list the goals*/}
                    <Route
                        path="/"
                        element={
                            <GoalList
                                database={database}
                                setDatabase={setDatabase}
                            />
                        }
                    />

                    {/* /goals/new -> create a new goal */}
                    <Route
                        path="/goal-form"
                        element={<GoalForm setDatabase={setDatabase} />}
                    />

                    {/* /goals/:id -> view a specific goal */}
                    <Route
                        path="/goals/:id"
                        element={
                            <GoalView
                                database={database}
                                setDatabase={setDatabase}
                            />
                        }
                    />
                </Routes>
            </HashRouter>
        </>
    );
}
