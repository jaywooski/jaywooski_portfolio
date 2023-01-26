import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-scroll';

export default function MobileHeader() {

  // Initialize state using hook
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl); // Originally is set to false because it is null

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); //the menu icon button becomes the event target
    console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Create style for menu items in object
  const menu_style = {
    justifyContent:'center',
    borderTop:'1px solid #0B24B6',
    borderBottom:'1px solid #0B24B6',
    letterSpacing: 4,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'white',
    backgroundColor:'#1B3B91'
}

  return (
    <Box className='mobile' sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#030929'}}/*add styling here*/ >
        <Toolbar>
          <IconButton
            id='basic-button'
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={{ mr: 2,}}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          {/* Menu component for mobile usage */}

          {/* Work on functionality of menu!!!!!!!!!!!!! */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            className='mobile'
          >
            {/* Add Links to pages to visit throughout portfolio */}
            <Paper className='menu mobile'>
              <MenuItem sx={menu_style} onClick={handleClose}>
                <Link to='home'>Home</Link>
              </MenuItem>
              <MenuItem sx={menu_style} onClick={handleClose}>
                <Link to='about'>About Me</Link>
                </MenuItem>
              <MenuItem sx={menu_style} onClick={handleClose}>
                <Link to='projects'>Projects</Link>
                </MenuItem>
              <MenuItem sx={menu_style} onClick={handleClose}>
                <Link to='contact'>Contact</Link>
                </MenuItem>
            </Paper>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: 7, textTransform: 'uppercase' }}>
            Jaywooski
          </Typography>
          {/* <Button color="inherit" sx={{outline:'1px solid yellow'}}>Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}