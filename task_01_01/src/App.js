import './App.css';
import { useReducer } from 'react';
import AddTask from './components/AddTask.js';
import TaskList from './components/TaskList.js';
import { ACTION_TYPES } from './components/contexts/BoilerPlate.js';

export default function App() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: ACTION_TYPES.ADD,
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: ACTION_TYPES.CHANGE,
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: ACTION_TYPES.DELETE,
      id: taskId
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

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

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];