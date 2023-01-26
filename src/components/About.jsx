import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { FileDownload } from '@mui/icons-material'
import { styled } from '@mui/system'


export default function About() {

    const CustomBox = styled(Box)(({theme}) => ({
        // insert styles here
    }))

  return (
    <Box
        id='about'
        sx={{
        position:'static',
        backgroundColor: '#030929',
        bottom: 0,
        borderTop: "1px solid #7B89A8",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
        }}
    >

    </Box>
  )
}