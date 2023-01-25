import * as React from 'react';
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from '@mui/system';
import {Button} from "@mui/material";

import heroImage from '../assets/static/IMG_6786.PNG'

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
        },
        [theme.breakpoints.down("md")]: {
          width: "35%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "50%",
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
    

  return (
    <Box
      sx={{
        mt: 8,
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
        I enjoy <span style={{ color: "rgba(0,199,255,255)" }}>building</span>{" "}
        and <span style={{ color: "rgba(0,199,255,255)" }}>designing</span> for
        the web.
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
          sx={{
            height: 250,
            width: 150,
            mt: 4,
            mb: 4,
            backgroundColor: 'black'
        }}
        src={heroImage}
        //   src={reactImg}
        />

        <CustomButton>Contact Me</CustomButton>
      </Box>
    </Box>
   )
}

