import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={handleChange}
      />
      <button onClick={handleAddTask}>Agregar</button>
    </div>
  );
}

export default TaskInput;