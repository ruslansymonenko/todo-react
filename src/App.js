import { useState } from 'react';
import { AppHeader } from './components/app-header/AppHeader';
import { TaskList } from './components/task-list/TaskList';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Go to the shop'},
    {id: 2, text: 'Gym today'},
    {id: 3, text: 'learn english'},
    {id: 4, text: 'whatch movie'},
    {id: 5, text: 'study JS'},
  ])

  function onAddTasks(newTask) {
    const newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <AppHeader
        onAddTasks={onAddTasks}
      />
      <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

export default App;
