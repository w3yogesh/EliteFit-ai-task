import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const TaskForm = ({ setTasks, editingTask, setEditingTask, closeForm }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate);
      setPriority(editingTask.priority);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id ? { ...task, title, description, dueDate, priority } : task
        )
      );
      setEditingTask(null);
    } else {
      setTasks((prevTasks) => [
        { id: Date.now(), title, description, dueDate, priority, status:'Pending' },
        ...prevTasks,
      ]);
    }

    closeForm(); 
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Medium');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ bgcolor: '#fff', p: 3, borderRadius: 2, boxShadow: 3 }}>
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        sx={{
          mb: 2,
          '& .MuiInputBase-root': { borderRadius: '10px' },
          '& .MuiInputLabel-root': { color: '#3a3a3a' }
        }}
      />
      <TextField
        label="Description"
        fullWidth
        multiline
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{
          mb: 2,
          '& .MuiInputBase-root': { borderRadius: '10px' },
          '& .MuiInputLabel-root': { color: '#3a3a3a' }
        }}
      />
      <TextField
        type="date"
        label="Due Date"
        fullWidth
        InputLabelProps={{ shrink: true }}
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        sx={{
          mb: 2,
          '& .MuiInputBase-root': { borderRadius: '10px' },
          '& .MuiInputLabel-root': { color: '#3a3a3a' }
        }}
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          label="Priority"
          sx={{
            borderRadius: '10px',
            '& .MuiSelect-icon': { color: '#3a3a3a' },
          }}
        >
          <MenuItem value="High" sx={{ color: 'red' }}>High</MenuItem>
          <MenuItem value="Medium" sx={{ color: 'orange' }}>Medium</MenuItem>
          <MenuItem value="Low" sx={{ color: 'green' }}>Low</MenuItem>
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          width: '100%',
          bgcolor: '#48bb78',
          ':hover': { bgcolor: '#38a169' },
          fontWeight: 600,
          borderRadius: '8px',
          py: 1.5
        }}
      >
        {editingTask ? 'Update Task' : 'Add Task'}
      </Button>
    </Box>
  );
};

export default TaskForm;
