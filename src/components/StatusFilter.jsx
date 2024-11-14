import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const StatusFilter = ({ statusFilter, setStatusFilter }) => (
  <FormControl fullWidth variant="outlined" margin="normal">
    <InputLabel>Status</InputLabel>
    <Select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      label="Status"
      sx={{ borderRadius: '8px' }}
    >
      <MenuItem value="All">All Status</MenuItem>
      <MenuItem value="Completed" sx={{ color: 'green' }}>Completed</MenuItem>
      <MenuItem value="Pending" sx={{ color: 'orange' }}>Pending</MenuItem>
    </Select>
  </FormControl>
);

export default StatusFilter;
