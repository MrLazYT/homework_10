import { useState } from 'react';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    return (
        <div className='add-task-container'>
            <input
                placeholder="Add task"
                value={text}
                onChange={onChangeHandler}
            />

            <button onClick={() => {onAddTask(text)}}>Add</button>
        </div>
    );
}