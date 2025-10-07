// Web Dev Simplified
// Learn React With This One Project
// https://www.youtube.com/watch?v=Rh3tobg7hEo

// Austin Davis
// React JS Tutorial - #7 - Multiple Pages
// https://www.youtube.com/watch?v=qi32YwjoN2U&list=PLB4OYaYkKsG6Yd9SPQJNnl0c4HXV3J9Ae&index=7

import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { GoalForm } from "./Pages/GoalForm";
import { GoalList } from "./Pages/GoalList";
import { GoalView } from "./Pages/GoalView";
import { _database, type Task } from "./util";

export default function App() {
    // const [database, setDatabase] = useState<Task[]>([]);
    const [database, setDatabase] = useState<Task[]>(_database);

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
