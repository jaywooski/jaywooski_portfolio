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
import Icon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { Link } from '@mui/icons-material';
import { Avatar, SvgIcon } from '@mui/material'
import customLogo from "../assets/static/Logo_concept_2.png"


export default function Header() {
  const logoBox = () => styled(Box)(({theme}) => ({
    // add custom stylings to box here if necessary
  }))

  return (
    <Box className='desktop' sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#030929'}}>
        <Toolbar>
          <Box
            component='img'
            sx={{ width: 56, height: 56, mr: 2, objectFit:'cover'}}
            src={customLogo}
          />

            
          <Typography variant="h6" 
                      component="div" 
                      //*******************Outline here******************
                      sx={{ flexGrow: 1, outline: '1px red solid' }}> 
            Jaywooski Desktop
          </Typography>
          <Box>
            {/* Navigation Links here */}
          </Box>
          {/* <Button color="inherit" sx={{outline:'1px solid yellow'}}>Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}