import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const StatusFilter = ({ statusFilter, setStatusFilter }) => (
  <FormControl variant="outlined" margin="normal" sx={{ minWidth: "50%" }}>
  <InputLabel sx={{ fontSize: '0.875rem' }}>Status</InputLabel>
  <Select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    label="Status"
    sx={{
      fontSize: '0.875rem', 
      borderRadius: '8px',
      height: 36, 
      paddingTop: 0,
      paddingBottom: 0,
    }}
    size="small" 
  >
    <MenuItem value="All" sx={{ fontSize: '0.875rem' }}>All Status</MenuItem>
    <MenuItem value="Completed" sx={{ color: 'green', fontSize: '0.875rem' }}>Completed</MenuItem>
    <MenuItem value="Pending" sx={{ color: 'orange', fontSize: '0.875rem' }}>Pending</MenuItem>
  </Select>
</FormControl>

);

export default StatusFilter;