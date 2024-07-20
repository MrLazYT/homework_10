import Task from './Task.js';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}