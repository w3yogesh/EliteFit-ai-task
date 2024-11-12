import React, { useState } from 'react';
import { TextField, Box, Checkbox, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [search, setSearch] = useState('');

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter((task) =>
    (!priorityFilter || task.priority === priorityFilter) &&
    (filter === '' || (filter === 'completed' ? task.completed : !task.completed)) &&
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <TextField
        label="Search"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Select
        label="Priority"
        fullWidth
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </Select>
      <Select
        label="Filter"
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="not-completed">Not Completed</MenuItem>
      </Select>

      <List>
        {filteredTasks.map((task) => (
          <ListItem key={task.id} sx={{ borderBottom: '1px solid #ccc' }}>
            <Checkbox
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
            />
            <ListItemText
              primary={task.title}
              secondary={`Due: ${task.dueDate} | Priority: ${task.priority}`}
              sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(task.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
