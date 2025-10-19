import { Link } from "react-router-dom";
import { computeCumulativeTotal, type Task } from "../util";

export function GoalItem(props: { task: Task }) {
    const { task } = props;

    const totalCompleted = computeCumulativeTotal(task);

    return (
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
                                {totalCompleted}
                            </span>
                            <span className="goal-progress-separator">/</span>
                            <span className="goal-progress-total">
                                {task.goal}
                            </span>
                        </span>
                        <span
                            className={`status-card ${
                                totalCompleted === task.goal
                                    ? "completed"
                                    : "in-progress"
                            }`}
                        >
                            {totalCompleted === task.goal
                                ? "Completed"
                                : "In Progress"}
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
}
