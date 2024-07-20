import { createContext, useReducer } from 'react';
import { ACTION_TYPES } from './BoilerPlate';

function tasksReducer(tasks, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD: {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case ACTION_TYPES.CHANGE: {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case ACTION_TYPES.DELETE: {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialTasks = [
    { id: 0, text: 'Walk', done: true },
    { id: 1, text: 'Read a book', done: false },
    { id: 2, text: 'Complete homework', done: false }
];

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function TasksProvider(props) {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {props.children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}