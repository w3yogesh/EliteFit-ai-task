import React, { useState } from 'react';
import { CheckCircle, Edit, Trash2 } from 'lucide-react';
import { Typography, Grid, Card, CardContent, CardActions, Button, IconButton, Chip, Stack } from '@mui/material';

const TaskDashboard = ({
  tasks,
  searchQuery,
  priorityFilter,
  deleteTask,
  setEditingTask,
  updateTask
}) => {
  const [taskFilter, setTaskFilter] = useState('All'); // State to manage filter selection
  const today = new Date();

  // Filter tasks by priority, search query, and selected filter (All, Upcoming, Overdue, Completed)
  const filteredTasks = tasks.filter(task => {
    const isPriorityMatch = priorityFilter === 'All' || task.priority === priorityFilter;
    const isSearchMatch = task.title.toLowerCase().includes(searchQuery.toLowerCase());

    const isFilterMatch = (filter) => {
      switch (filter) {
        case 'Upcoming':
          return new Date(task.dueDate) > today && task.status !== 'Completed';
        case 'Overdue':
          return new Date(task.dueDate) < today && task.status !== 'Completed';
        case 'Completed':
          return task.status === 'Completed';
        default:
          return true;
      }
    };

    return isPriorityMatch && isSearchMatch && isFilterMatch(taskFilter);
  });

  const getPriorityColor = (priority) => {
    const colors = {
      High: 'error',
      Medium: 'warning',
      Low: 'success'
    };
    return colors[priority] || 'default';
  };

  const getStatusColor = (status) => {
    const colors = {
      Pending: 'warning',
      'In Progress': 'primary',
      Completed: 'success'
    };
    return colors[status] || 'default';
  };

  const handleToggleComplete = (task) => {
    const updatedTask = {
      ...task,
      status: task.status === 'Completed' ? 'Pending' : 'Completed'
    };
    updateTask(updatedTask);
  };

  const renderTaskCards = (tasks) => (
    tasks.map(task => (
      <Grid item xs={12} sm={6} md={4} key={task.id}>
        <Card variant="outlined" sx={{ borderColor: task.status === 'Completed' ? 'success.main' : 'grey.300' }}>
          <CardContent>
            <Grid container justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6" color={task.status === 'Completed' ? 'text.secondary' : 'text.primary'} sx={{ textDecoration: task.status === 'Completed' ? 'line-through' : 'none' }}>
                {task.title}
              </Typography>
              <IconButton onClick={() => handleToggleComplete(task)} color={task.status === 'Completed' ? 'success' : 'default'}>
                <CheckCircle />
              </IconButton>
            </Grid>
            <Typography variant="body2" color="text.secondary" mb={2}>
              {task.description}
            </Typography>
            <div>
              <Chip label={task.priority} color={getPriorityColor(task.priority)} size="small" sx={{ mr: 1 }} />
              <Chip label={task.status} color={getStatusColor(task.status)} size="small" />
            </div>
          </CardContent>
          <CardActions>
            <IconButton onClick={() => setEditingTask(task)} color="default">
              <Edit />
            </IconButton>
            <IconButton onClick={() => deleteTask(task.id)} color="error">
              <Trash2 />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    ))
  );

  return (
    <div>
      <Stack direction="row" spacing={2} mb={3}>
        <Button variant={taskFilter === 'All' ? 'contained' : 'outlined'} onClick={() => setTaskFilter('All')}>
          All Tasks
        </Button>
        <Button variant={taskFilter === 'Upcoming' ? 'contained' : 'outlined'} onClick={() => setTaskFilter('Upcoming')}>
          Upcoming
        </Button>
        <Button variant={taskFilter === 'Overdue' ? 'contained' : 'outlined'} onClick={() => setTaskFilter('Overdue')}>
          Overdue
        </Button>
        <Button variant={taskFilter === 'Completed' ? 'contained' : 'outlined'} onClick={() => setTaskFilter('Completed')}>
          Completed
        </Button>
      </Stack>

      <Grid container spacing={2}>
        {filteredTasks.length > 0 ? renderTaskCards(filteredTasks) : <Typography color="text.secondary">No tasks available</Typography>}
      </Grid>
    </div>
  );
};

export default TaskDashboard;
