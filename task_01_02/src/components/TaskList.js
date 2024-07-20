import { useContext } from 'react';
import Task from './Task.js';
import { TasksContext } from './contexts/TasksContext.js';

export default function TaskList() {
    const tasks = useContext(TasksContext);

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}