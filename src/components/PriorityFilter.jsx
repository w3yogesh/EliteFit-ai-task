import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const PriorityFilter = ({ priorityFilter, setPriorityFilter }) => (
  <FormControl fullWidth variant="outlined" margin="normal">
    <InputLabel>Priority</InputLabel>
    <Select
      value={priorityFilter}
      onChange={(e) => setPriorityFilter(e.target.value)}
      label="Priority"
      sx={{ borderRadius: '8px' }}
    >
      <MenuItem value="All">All Priorities</MenuItem>
      <MenuItem value="High" sx={{ color: 'red' }}>High</MenuItem>
      <MenuItem value="Medium" sx={{ color: 'orange' }}>Medium</MenuItem>
      <MenuItem value="Low" sx={{ color: 'green' }}>Low</MenuItem>
    </Select>
  </FormControl>
);

export default PriorityFilter;
