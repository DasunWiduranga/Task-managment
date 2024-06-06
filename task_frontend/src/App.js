import React, { useState, useEffect } from 'react';
import TaskDashboard from './components/TaskDashboard';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = (task) => {
    fetch('http://localhost:8080/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .then(newTask => setTasks([...tasks, newTask]));
  };

  const updateTask = (id, status) => {
    fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
      .then(response => response.json())
      .then(updatedTask => {
        const updatedTasks = tasks.map(task =>
          task.id === id ? updatedTask : task
        );
        setTasks(updatedTasks);
      });
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => {
        const remainingTasks = tasks.filter(task => task.id !== id);
        setTasks(remainingTasks);
      });
  };

  return (
    <div className="App">
      <TaskDashboard 
        tasks={tasks} 
        addTask={addTask} 
        updateTask={updateTask} 
        deleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;

