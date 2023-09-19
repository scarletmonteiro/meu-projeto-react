// src/TaskList.js
import React from 'react';

function TaskList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => deleteTask(task.id)}>Deletar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
