import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import type { Task } from "../util";

export function GoalList(props: {
    database: Task[];
    setDatabase: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
    return (
        <div>
            <Header />
            <ul>
                {props.database.map((task) => (
                    <li key={task.id}>
                        <div className="goal-list-card">
                            <h2 className="goal-list-title">
                                <Link to={`/goals/${task.id}`}>
                                    {task.title} ({task.goal})
                                </Link>
                            </h2>
                            <div className="goal-list-progress-row">
                                <div className="progress-row">
                                    <span>
                                        Progress:
                                        <span className="goal-progress-current">
                                            {task.cumulative.reduce(
                                                (acc, curr) => acc + curr.count,
                                                0
                                            )}
                                        </span>
                                        <span className="goal-progress-separator">
                                            /
                                        </span>
                                        <span className="goal-progress-total">
                                            {task.goal}
                                        </span>
                                    </span>
                                    <span
                                        className={`status-card ${
                                            task.isCompleted
                                                ? "completed"
                                                : "in-progress"
                                        }`}
                                    >
                                        {task.isCompleted
                                            ? "Completed"
                                            : "In Progress"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
