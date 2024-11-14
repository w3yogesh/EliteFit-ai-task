import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Chip, Stack } from '@mui/material';

const Task = ({ task, deleteTask, setEditingTask }) => (
  <Card variant="outlined" sx={{ borderRadius: 2, p: 2, mb: 2 }}>
    <CardContent>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
        {task.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {task.description}
      </Typography>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Due Date:
        </Typography>
        <Typography variant="body2">{task.dueDate}</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" color="text.secondary">
          Priority:
        </Typography>
        <Chip
          label={task.priority}
          color={
            task.priority === 'High' ? 'error' : task.priority === 'Medium' ? 'warning' : 'success'
          }
          size="small"
        />
      </Stack>
    </CardContent>
    <CardActions sx={{ justifyContent: 'flex-end' }}>
      <Button variant="outlined" color="primary" size="small" onClick={() => setEditingTask(task)}>
        Edit
      </Button>
      <Button variant="contained" color="error" size="small" onClick={() => deleteTask(task.id)}>
        Delete
      </Button>
    </CardActions>
  </Card>
);

export default Task;
