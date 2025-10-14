import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Components/Header";
import type { Task } from "../util";

export function GoalForm(props: {
    setDatabase: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
    // for navigation after form submission
    const navigate = useNavigate();

    const [formTitle, setFormTitle] = useState("");
    const [formGoal, setFormGoal] = useState(0);
    const [formDescription, setFormDescription] = useState("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newTask: Task = {
            id: crypto.randomUUID(),
            title: formTitle,
            description: formDescription,
            goal: formGoal,
            isCompleted: false,
            createdAt: new Date().toISOString(),
            cumulative: [],
        };

        props.setDatabase((prevDatabase) => [newTask, ...prevDatabase]);
        setFormTitle("");
        setFormGoal(0);
        setFormDescription("");

        navigate(`/goals/${newTask.id}`);
    };

    return (
        <>
            <Header />
            <form onSubmit={handleFormSubmit} className="form-row">
                <div>
                    <label htmlFor="label-for-title">Title</label>
                    <input
                        type="text"
                        name=""
                        id="title"
                        placeholder="Enter task title"
                        onChange={(event) => setFormTitle(event.target.value)}
                        value={formTitle}
                    />
                </div>
                <div>
                    <label htmlFor="create-goal">Goal</label>
                    <input
                        type="number"
                        name=""
                        id="goal"
                        defaultValue={0}
                        onChange={(event) =>
                            setFormGoal(Number(event.target.value))
                        }
                        value={formGoal}
                    />
                </div>
                <div>
                    <label htmlFor="create-description">Description</label>
                    <textarea
                        name=""
                        id="description"
                        placeholder="Enter task description ..."
                        onChange={(event) =>
                            setFormDescription(event.target.value)
                        }
                        value={formDescription}
                    ></textarea>
                </div>
                <div>
                    <button type="submit">Create Goal</button>
                </div>
            </form>
        </>
    );
}
