import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function TaskDashboard({ tasks, addTask, updateTask, deleteTask }) {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => 
    filter === 'all' || task.status === filter
  );

  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <TaskForm addTask={addTask} />
      <div>
        <label>Filter: </label>
        <select onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <TaskList tasks={filteredTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default TaskDashboard;
