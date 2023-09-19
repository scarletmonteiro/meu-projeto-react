// src/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText) {
      setTasks([...tasks, { id: Date.now(), text: taskText }]);
      setTaskText('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        placeholder="Adicione sua tarefa"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={addTask}>Adicione</button>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
