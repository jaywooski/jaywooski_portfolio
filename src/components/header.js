// import React from 'react'

// function header() {
//   return (
//     <div></div>
//   )


// export default 

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, outline: '1px solid purple'  }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, outline: '1px red solid' }}>
            News
          </Typography>
          <Button color="inherit" sx={{outline:'1px solid yellow'}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}