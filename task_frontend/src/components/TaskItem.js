import React from 'react';

function TaskItem({ task, updateTask, deleteTask }) {
  const handleStatusChange = (e) => {
    updateTask(task.id, e.target.value);
  };

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Assigned to: {task.assignedTo}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>



  );
}

export default TaskItem;
