import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Components/Header";
import {
    computeCumulativeTotal,
    getNewDate,
    getNewId,
    type Task,
} from "../util";
import { ProgressForm } from "./ProgressForm";

export function GoalView(props: {
    database: Task[];
    setDatabase: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
    const [showProgressForm, setShowProgressForm] = useState(false);

    const handleProgressUpdate = (goalId: string, progress: number) => {
        const updatedState = props.database.map((row) => {
            if (row.id === goalId) {
                const newCumulativeRow = {
                    id: getNewId(),
                    count: progress,
                    createdAt: getNewDate(),
                };

                const newCumulativeList = [...row.cumulative, newCumulativeRow];

                const totalProgress = computeCumulativeTotal(row);

                const isCompleted = totalProgress >= row.goal;

                return { ...row, cumulative: newCumulativeList, isCompleted };
            }

            return row;
        });

        props.setDatabase(updatedState);
    };

    // Get the :id from the URL
    const { id } = useParams<{ id: string }>();

    const task = props.database.find((task) => task.id === id);

    return (
        <div className="goal-view-container">
            <Header />
            {task ? (
                <>
                    <h2 className="goal-list-title">
                        {task.title}{" "}
                        <span className="goal-amount">({task.goal})</span>
                    </h2>
                    <div className="progress-row">
                        <span>
                            Progress:
                            <span className="goal-progress-current">
                                {task.cumulative.reduce(
                                    (acc, curr) => acc + curr.count,
                                    0
                                )}
                            </span>
                            <span className="goal-progress-separator">/</span>
                            <span className="goal-progress-total">
                                {task.goal}
                            </span>
                        </span>
                        <span
                            className={`status-card ${
                                task.isCompleted ? "completed" : "in-progress"
                            }`}
                        >
                            {task.isCompleted ? "Completed" : "In Progress"}
                        </span>
                        <span>
                            <button
                                onClick={() => {
                                    setShowProgressForm((prev) => !prev);
                                }}
                            >
                                {showProgressForm ? "Cancel" : "Add Progress"}
                            </button>
                        </span>
                    </div>
                    <p className="goal-description">{task.description}</p>
                    <div>
                        {showProgressForm && (
                            <ProgressForm
                                goalId={task.id}
                                updateProgress={handleProgressUpdate}
                            />
                        )}
                    </div>
                    <ul className="goal-progress-list">
                        {task.cumulative.map((progress) => (
                            <li key={progress.id}>
                                {progress.count} (added on{" "}
                                {new Date(
                                    progress.createdAt
                                ).toLocaleDateString()}
                                )
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Task not found</p>
            )}
        </div>
    );
}
