import './App.css'
import AddTask from './components/AddTask.js';
import TaskList from './components/TaskList.js';
import { TasksProvider } from './components/contexts/TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>To Do List</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}