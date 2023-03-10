import * as React from 'react';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import {Button} from "@mui/material";
import { Download } from '@mui/icons-material';

import heroImage from '../assets/static/IMG_0187.jpg'
import resume from '../assets/static/Wooley_Resume.pdf'

export default function Hero() {

    const CustomButton = styled(Button)(({ theme }) => ({
        border: "3px solid transparent",
        backgroundColor: "#00C7FF",
        color: "white",
        width: "20%",
        borderRadius: "25px",
        "&:hover": {
          border: "3px solid white",
          backgroundColor: "transparent",
          transition: 'ease-in-out',
          transitionDuration: '400ms'
        },
        [theme.breakpoints.down("md")]: {
          width: "35%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "45%",
        },
      }));

    const CustomText = styled(Typography)(({theme}) => ({
        color: "white",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
          fontSize: "3.5rem",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "2.5rem",
        },
    }));

    const download = () => {
      const link = document.createElement('a');
      link.download = 'Wooley_Resume' ;
      link.href = resume;
      link.click();
    }
    

  return (
    <Box
      sx={{
        mt: 6,
        mb: 12,
        p: 2,
        maxWidth: "1200px",
        mx: "auto",
        backgroundImage: 'url(../assets/static/IMG_5069.jpg)'
      }}
      id="home"
    >
      <Typography
        sx={{ color: "white", textAlign: "center", mb: 2 }}
        variant="h6"
      >
        Hello, I'm John
      </Typography>
      <CustomText variant="h1" sx={{color:'white',}}>
        If you can <span style={{ color: "rgba(0,199,255,255)" }}>Dream</span>{" "}
        it, 
      </CustomText>
      <CustomText variant='h1' sx={{color:'white'}}>
      I can build it...<span style={{ color: "rgba(0,199,255,255)" }}>Big</span>
      </CustomText>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          component="img"
          src={heroImage}
          className='hero'
          sx={{
            minHeight: 250,
            minWidth: 250,
            maxwidth: 750,
            maxHeight: 750,
            my: 4,
            backgroundColor: 'black'
        }}
        />
        <Box sx={{display: 'flex', justifyContent:'space-around', width:'100%'}}>
          {/* Create functionality for contact me button */}
          <CustomButton href='mailto:john.m.wooley@gmail.com'>Email Me</CustomButton>

          {/* Custom Button for Downloading RESUME!!! */}
          <CustomButton variant='contained' onClick={download}>
            <div className='squeeze2'><Download sx={{mr:1}}/>Resume</div>
          </CustomButton>
          
        </Box>
      </Box>
    </Box>
   )
}

