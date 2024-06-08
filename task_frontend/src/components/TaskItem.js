import React from 'react';
import { TableRow, TableCell, Button, Select, MenuItem } from '@mui/material';

function TaskItem({ task, updateTask, deleteTask }) {
  const handleStatusChange = (e) => {
    updateTask(task.id, e.target.value);
  };

  return (
    <TableRow>
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.description}</TableCell>
      <TableCell>{task.assignedTo}</TableCell>
      <TableCell>
        <Select
          value={task.status}
          onChange={handleStatusChange}
          displayEmpty
          variant="outlined"
          fullWidth
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="in progress">In Progress</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
      </TableCell>
      <TableCell>
        <Button 
          variant="contained" 
          color="error" 
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default TaskItem;
