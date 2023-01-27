import * as React from 'react'
import { Box, Divider, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";
import URL from '@mui/material/Link'; /*Had to change name since react-scroll dependency is named as Link*/


export default function Footer() {

  return (
   <Box
      sx={{
        position:'static',
        backgroundColor: '#030929',
        bottom: 0,
        // maxWidth: "1100px",
        borderTop: "1px solid #7B89A8",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          PAGES
        </Typography>
        
            <Link
            to="home"
            className="nav"
            smooth
            style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
            >Home</Link>
            
            <Link
            to="about"
            className="nav"
            smooth
            style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
            >About</Link>

            <Link
            to="projects"
            className="nav"
            smooth
            style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
            >Projects</Link>

        </Box>
{/* Insert Divider Here to Separate and make look Neat */}
      <Divider orientation='vertical' flexItem/>

      {/* Right Side */}
      <Box
        id='contact'
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#7B89A8", fontWeight: "bold", mb: 2 }}
        >
          SOCIAL
        </Typography>

        <URL className='nav' underline='none' href='https://github.com/jaywooski' target='_blank' sx={{ display: "flex", justifyContent: "flex-start", cursor: "pointer", my:1 }}>
          <GitHubIcon sx={{ mr: 2, color: "white" }} />
          <Typography className='footer' variant="body2" sx={{ color: "white",  }}>
            GitHub
          </Typography>
        </URL>

        <URL alt='john.m.wooley@gmail.com' className='nav' underline='none' href='mailto:john.m.wooley@gmail.com' target='_blank' sx={{ display: "flex", /*flexDirection:'column',*/ my:1, justifyContent: "flex-start", cursor: "pointer" }}>
          <EmailIcon sx={{ mr: 2, color: "white" }} />
          <Typography className='footer' variant="body2" sx={{ color: "white", textAlign:'left' }}>
            Email 
            <Divider  />
              <Typography
                // sx={{ mt: 0.5, ml: 9 }}
                color="white"
                // display="block"
                variant="caption"
              >
                john.m.wooley@gmail.com
              </Typography>
          </Typography>
          {/* <Typography variant='caption'>john.m.wooley@gmail.com</Typography> */}
        </URL>

        <URL className='nav' underline='none' href='https://www.linkedin.com/in/john-m-wooley/' target='_blank' sx={{ display: "flex", my:1,  justifyContent: "flex-start", cursor: "pointer" }}>
          <LinkedInIcon sx={{ mr: 2, color: "white" }} />
          <Typography className='footer' variant="body2" sx={{ color: "white",  }}>
            LinkedIn
          </Typography>
        </URL>
      </Box>
    </Box>
    )
}
