import React, { useState } from "react";
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, assigned_to: assignedTo, status };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setAssignedTo("");
    setStatus("pending");
  };
  const labelColumnRatio = 1.2;
  const inputColumnRatio = 4;

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item container justifyContent="center" alignItems="center" my={1}>
          <Grid item xs={labelColumnRatio} container alignItems="flex-start">
            <InputLabel>Title</InputLabel>
          </Grid>
          <Grid item xs={inputColumnRatio}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" alignItems="center" my={1}>
          <Grid item xs={labelColumnRatio} container alignItems="flex-start">
            <InputLabel>Description</InputLabel>
          </Grid>
          <Grid item xs={inputColumnRatio}>
            <TextField
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" alignItems="center" my={1}>
          <Grid item xs={labelColumnRatio} container alignItems="flex-start">
            <InputLabel>Assigned To</InputLabel>
          </Grid>
          <Grid item xs={inputColumnRatio}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Assigned To"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" alignItems="center" my={1}>
          <Grid item xs={labelColumnRatio} container alignItems="flex-start">
            <InputLabel>Status</InputLabel>
          </Grid>
          <Grid item xs={inputColumnRatio}>
            <FormControl fullWidth variant="outlined">
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{ height: 30 }}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="in progress">In Progress</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" my={1}>
          <Grid
            item
            xs={labelColumnRatio + inputColumnRatio}
            container
            justifyContent="center"
          >
            <Grid item container justifyContent="flex-end">
              <Button type="submit" variant="contained" color="primary">
                Add Task
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default TaskForm;
