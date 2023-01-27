import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { FileDownload } from '@mui/icons-material'
import { styled } from '@mui/system'
import Self_Portrait from '../assets/static/IMG_5069.jpg'


export default function About() {

    const CustomOuterBox = styled(Box)(({theme}) => ({
        // insert styles here
        display: 'flex',
        justifyContent: 'center',
        borderTop: "1px solid #7B89A8",
        padding: '32px',
        backgroundColor: '#030929',
        
        
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            padding: '16px',
            justifyContent: 'center',
        }

    }))

    const CustomTextBox = styled(Box)(({theme}) => ({
        // Insert styles here
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-around',
        color: 'white',
        padding: 20,


        [theme.breakpoints.up('sm')]: {
            minWidth:'350px'
        },

        [theme.breakpoints.up('lg')]: {
            justifyContent: 'center'
        }
    }))

    const ImageBox = styled(Box)(({theme}) => ({
        // insert styles here
        [theme.breakpoints.down('sm')]: {
            // height: '',
            // mx: 'auto'
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        }

    }))

  return (
        <Box id='about' sx={{mt:0}}>
            <Box sx={{/*maxWidth: 400,*/display: 'flex', }}>
                <Typography variant='h5' 
                            sx={{
                                    color:'white',
                                    letterSpacing:'10px',
                                    textTransform: 'uppercase',
                                    borderTop: '2px solid white',
                                    // flexGrow: 1
                                    width: '50%'
                                    
                                }}>About</Typography>
                <Typography variant='h5' 
                            sx={{
                                    color:'rgba(0,199,255,255)',
                                    letterSpacing:'10px',
                                    textTransform: 'uppercase',
                                    backgroundColor: 'white',
                                    width: '50%'
                                    
                                }}>Me</Typography>

            </Box>
            <CustomOuterBox id='about'>
                    
                <ImageBox 
                    component='img'
                    src={Self_Portrait}
                />
                <CustomTextBox classes='textBox'>
                    <Typography variant='h4' sx={{padding: 3, borderBottom: '1px solid white'}}> My Experience</Typography>
                    <Typography variant='h6' sx={{ maxHeight: '450px', overflow:'scroll', backgroundColor:'#040d1a', paddingX: 1}}>
                        Hello, My name is John Wooley. 
                        I{`'`}m a full-stack developer, with history in computer engineering (University of Tennessee at Chattanooga) looking to help build more dynamic
                        experiences for users on the web. I earned my certificate in full stack development from Vanderbilt University.
                        I have been building full-stack apps for a little over 2 years, doing freelance work. I look forward to collaborating
                        with a new friend or partner on any project to prove the sky is the limit! 
                        {/* <span style={{letterSpacing: '3px',color:'#045ad6'}}>Reach out to me!</span> */}
                    </Typography>
                </CustomTextBox>
                

            </CustomOuterBox>
        </Box>
  )
}