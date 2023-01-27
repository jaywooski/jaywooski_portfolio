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
import { Link } from 'react-scroll';
import customLogo from "../assets/static/Logo_concept_3.png"


export default function Header() {

  return (
    <Box className='desktop' sx={{ flexGrow: 1, mb: 8 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#030929'}}>
        <Toolbar>
          <Box
            component='img'
            sx={{ width: 120, mr: 2, objectFit:'cover', color:'white'}}
            src={customLogo}
          />

            
          <Typography variant="h6" 
                      component="div" 
                      sx={{ display:'flex', justifyContent:'left', letterSpacing: 7, textTransform:'uppercase', flexGrow: 2, /*outline: '1px red solid'*/ }}> 
            Portfolio
          </Typography>
            {/* Navigation Links here using custom styled Box */}
            <Box sx={{ display:'flex', flexGrow: 1, justifyContent: 'space-around' }}>
              <Link to='home' className='nav' smooth>Home</Link>
              <Link to='about' className='nav' smooth>About</Link>
              <Link to='projects' className='nav' smooth>Projects</Link>
              <Link to='contact' className='nav' smooth>Contact</Link>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}