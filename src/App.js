import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Dashboard from './components/Dashboard';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>Task Manager</Typography>
      <Dashboard tasks={tasks} setTasks={setTasks} />
    </Container>
  );
}

export default App;
