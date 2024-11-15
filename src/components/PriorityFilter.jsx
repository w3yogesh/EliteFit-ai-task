import React, { useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const PriorityFilter = ({ priorityFilter, setPriorityFilter }) => {
  useEffect(() => {
    const savedPriorityFilter = localStorage.getItem('priorityFilter');
    if (savedPriorityFilter) {
      setPriorityFilter(savedPriorityFilter);
    }
  }, [setPriorityFilter]);

  const handlePriorityChange = (event) => {
    const selectedPriority = event.target.value;
    setPriorityFilter(selectedPriority);
    localStorage.setItem('priorityFilter', selectedPriority);
  };

  return (
    <FormControl variant="outlined" margin="normal" sx={{ mr: 1, minWidth: "49%" }}>
  <InputLabel sx={{ fontSize: '0.875rem' }}>Priority</InputLabel>
  <Select
    value={priorityFilter}
    onChange={handlePriorityChange}
    label="Priority"
    sx={{
      fontSize: '0.875rem',
      borderRadius: '8px',
      height: 36,
      paddingTop: 0,
      paddingBottom: 0,
    }}
    size="small" 
  >
    <MenuItem value="All" sx={{ fontSize: '0.875rem' }}>All Priorities</MenuItem>
    <MenuItem value="High" sx={{ color: 'red', fontSize: '0.875rem' }}>High</MenuItem>
    <MenuItem value="Medium" sx={{ color: 'orange', fontSize: '0.875rem' }}>Medium</MenuItem>
    <MenuItem value="Low" sx={{ color: 'green', fontSize: '0.875rem' }}>Low</MenuItem>
  </Select>
</FormControl>

  );
};

export default PriorityFilter;
