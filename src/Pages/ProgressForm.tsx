import { useState } from "react";

export function ProgressForm(payload: {
    goalId: string;
    updateProgress: (goalId: string, progress: number) => void;
}) {
    const [progress, setProgress] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Goal ID:", [payload.goalId]);
        console.log("Progress Added:", progress);

        payload.updateProgress(payload.goalId, progress);
        setProgress(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="create-goal">Goal</label>
                <input
                    type="number"
                    name=""
                    id="progress"
                    defaultValue={0}
                    onChange={(event) =>
                        setProgress(Number(event.target.value))
                    }
                    value={progress}
                />
            </div>
            <div>
                <button type="submit">Add Progress</button>
            </div>
        </form>
    );
}
