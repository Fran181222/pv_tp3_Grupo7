import React, { useState } from 'react';
import TaskInput from './components/TaskInput.jsx';
import TaskList from './components/TaskList.jsx'; // Importa el componente TaskList

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    console.log('Tarea agregada:', newTask);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(`Tarea con ID ${taskId} marcada como realizada en App`);
  };

  const handleDeleteTask = (taskId) => {
    // Creamos un nuevo array de tareas que contiene todas las tareas
    // excepto la que tiene el ID que recibimos.
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    // Actualizamos el estado 'tasks' con este nuevo array filtrado.
    setTasks(updatedTasks);
    console.log(`Tarea con ID ${taskId} eliminada en App`);
  };

  return (
    <div>
      <h1>Mi Lista de Tareas</h1>
      <TaskInput onAddTask={handleAddTask} />
      {/* Ahora le pasamos la función handleCompleteTask a TaskList */}
      <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;