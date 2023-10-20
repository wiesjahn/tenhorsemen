import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function MenuBar() {
  return (
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            10Horsemen
          </Typography>
          <Button color="inherit">Create Post</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}