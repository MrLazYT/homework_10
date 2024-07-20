import { useState } from "react";

export default function Task({ task, onChangeTask, onDeleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [currTask, setCurrTask] = useState(task);

    let taskContent;

    const editOnChangeHandler = (e) => {
        setCurrTask({
            ...currTask,
            text: e.target.value
        });
    }

    const doneOnChangeHandler = (e) => {
        setCurrTask({
            ...currTask,
            done: e.target.checked
        });

        onChangeTask(currTask);
    }

    const save = () => {
        changeTaskHandler();
        setIsEditing(false);
    }

    const changeTaskHandler = () => {
        setIsEditing(false);
        onChangeTask(currTask)
    }


    const edit = () => {
        setIsEditing(true);
    }

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={currTask.text}
                    onChange={(e) => { editOnChangeHandler(e) }} />
                <button onClick={save}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                <p>{task.text}</p>
                <button onClick={edit}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={currTask.done}
                onChange={doneOnChangeHandler}
            />
            {taskContent}
            <button onClick={() => { onDeleteTask(task.id) }}>
                Delete
            </button>
        </label>
    );
}