import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Grid, Box, Typography } from '@mui/material';

const Dashboard = ({ tasks, setTasks }) => {
  return (
    <Box>
      <TaskForm setTasks={setTasks} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">All Tasks</Typography>
          <TaskList tasks={tasks} setTasks={setTasks} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
