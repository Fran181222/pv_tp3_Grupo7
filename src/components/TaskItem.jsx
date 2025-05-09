import React from 'react';

function TaskItem({ task, onComplete, onDelete }) {
  const handleCompleteClick = () => {
    onComplete(task.id);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={handleCompleteClick}>Realizada</button>
      <button onClick={handleDeleteClick}>Eliminar</button>
    </li>
  );
}

export default TaskItem;