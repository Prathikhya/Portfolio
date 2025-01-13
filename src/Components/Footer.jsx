import { Typography, Box, Container, Link  } from '@mui/material'
import React, { useState } from 'react'



function Footer() {
  return (
    <>
    <footer className='footer'>

      <Box sx={{ height:50,  display:"flex", justifyContent:'center',alignItems:"center",position:"relative",
     width:"100%"}}>

    <Box>

        <Typography variant="body1" sx={{mt:1}}>
          @ {new Date().getFullYear()} Design and Development by <a href="">PD</a>
        </Typography>

    </Box>

    </Box>
    </footer>
    </>
  )
}

export default Footer;