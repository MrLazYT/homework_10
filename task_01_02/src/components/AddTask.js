import { useState, useContext } from 'react';
import { TasksDispatchContext } from './contexts/TasksContext';
import { ACTION_TYPES } from './contexts/BoilerPlate';

let nextId = 3;

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    const dispatch = useContext(TasksDispatchContext);

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    const addTask = () => {
        setText('');
        dispatch({
            type: ACTION_TYPES.ADD,
            id: nextId++,
            text: text,
        });
    }

    return (
        <div className='add-task-container'>
            <input
                placeholder="Add task"
                value={text}
                onChange={onChangeHandler}
            />

            <button onClick={addTask}>Add</button>
        </div>
    );
}