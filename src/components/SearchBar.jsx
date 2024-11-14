import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <TextField
    label="Search tasks..."
    variant="outlined"
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
