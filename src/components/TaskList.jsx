import React from 'react';
import TaskItem from './TaskItem.jsx';
import './TaskList.css';

function TaskList({ tasks, onCompleteTask, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onCompleteTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
