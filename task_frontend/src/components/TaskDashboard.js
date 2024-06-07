import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import {
  Grid,
  Typography,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Divider,
} from "@mui/material";

function TaskDashboard({ tasks, addTask, updateTask, deleteTask }) {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter(
    (task) => filter === "all" || task.status === filter
  );

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      px={3}
    >
      <Grid item xs={12} my={4}>
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Task Management Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} my={4}>
        <TaskForm addTask={addTask} />
      </Grid>
      <Divider></Divider>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        py={2}
      >
        <Grid item container alignItems="flex-start" xs={1.2}>
          <InputLabel>Filter:</InputLabel>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth variant="outlined">
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{ height: 30 }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <TaskList
          tasks={filteredTasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </Grid>
    </Grid>
  );
}

export default TaskDashboard;
