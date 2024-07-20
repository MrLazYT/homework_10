import { useContext, useState } from "react";
import { TasksDispatchContext } from "./contexts/TasksContext";
import { ACTION_TYPES } from './contexts/BoilerPlate';

export default function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(TasksDispatchContext);

    let taskContent;

    const editOnChangeHandler = (e) => {
        dispatch({
            type: ACTION_TYPES.CHANGE,
            task: {
                ...task,
                text: e.target.value
            }
        });
    }

    const doneOnChangeHandler = (e) => {
        dispatch({
            type: ACTION_TYPES.CHANGE,
            task: {
                ...task,
                done: e.target.checked
            }
        });
    }

    const deleteOnChangeHandler = (e) => {
        dispatch({
            type: ACTION_TYPES.DELETE,
            id: task.id
        });
    }

    const save = () => {
        setIsEditing(false);
    }

    const edit = () => {
        setIsEditing(true);
    }
    
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={editOnChangeHandler} />
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
                checked={task.done}
                onChange={doneOnChangeHandler}
            />
            {taskContent}
            <button onClick={deleteOnChangeHandler}>
                Delete
            </button>
        </label>
    );
}