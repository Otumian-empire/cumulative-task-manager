import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../Components/Alert";
import { Header } from "../Components/Header";
import { getNewDate, getNewId, validateGoalForm, type Task } from "../util";

export function GoalForm(props: {
    setDatabase: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
    // for navigation after form submission
    const navigate = useNavigate();

    const [formTitle, setFormTitle] = useState("");
    const [formGoal, setFormGoal] = useState(0);
    const [formDescription, setFormDescription] = useState("");
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validations = validateGoalForm(formTitle, formGoal);

        if (!validations.isValid) {
            setHasError(true);
            setErrorMessage(validations.message);
            setTimeout(() => setHasError(false), 2000);
        } else {
            const newTask: Task = {
                id: getNewId(),
                title: formTitle,
                description: formDescription,
                goal: formGoal,
                isCompleted: false,
                createdAt: getNewDate(),
                cumulative: [],
            };

            props.setDatabase((prevDatabase) => [newTask, ...prevDatabase]);
            setFormTitle("");
            setFormGoal(0);
            setFormDescription("");

            setHasError(false);
            setErrorMessage("");

            navigate(`/goals/${newTask.id}`);
        }
    };

    return (
        <>
            <Header />
            <Alert hasError={hasError} message={errorMessage} />

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
