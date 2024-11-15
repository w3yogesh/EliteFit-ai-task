import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <TextField
  sx={{
    flexGrow: 1, 
    mr: 2
  }}
    label="Search tasks..."
    variant="outlined"
    size='small'
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    fullWidth
    margin="normal"
    InputProps={{
      sx: {
        borderRadius: '8px',
      },
    }}
  />
);

export default SearchBar;