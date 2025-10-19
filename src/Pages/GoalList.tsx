import { Header } from "../Components/Header";
import type { Task } from "../util";
import { GoalItem } from "./GoalItem";

export function GoalList(props: {
    database: Task[];
    setDatabase: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
    return (
        <div>
            <Header />
            <ul>
                {props.database.map((task) => (
                    <GoalItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
}
