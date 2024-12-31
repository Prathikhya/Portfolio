import { Typography, Box, Container, Link  } from '@mui/material'
import React, { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


function Footer() {
  return (
    <>
      {/* <Box sx={{bgcolor:"primary.sec", height:50,  display:"flex", justifyContent:'center',alignItems:"center",position:"relative",
     width:"100%"}}>

    <Box>

        <Typography variant="body1" sx={{mt:1}}>
          @ {new Date().getFullYear()} Design and Development by <a href="">PD</a>
        </Typography>

    </Box>

    </Box> */}

      <Box sx={{
        width: '100%', backgroundColor: 'secondary.main', color: 'primary.main', padding: '1rem 0',
        position: 'relative', bottom: 0, textAlign: 'center', 
      }} >
        <Container maxWidth="lg"> 
          <Typography variant="h6" component="p" sx={{fontWeight: 600, color:'primary.sec'}}> © 2024 made with  PD </Typography>
           <Box> 
            {/* <Typography>Follow me on </Typography>
            <Link href="#home" color="inherit" sx={{ margin: '0 1rem' }}> Home </Link>
             <Link href="#about" color="inherit" sx={{ margin: '0 1rem' }}> About </Link> 
             <Link href="#projects" color="inherit" sx={{ margin: '0 1rem' }}> Projects </Link>
              <Link href="#skills" color="inherit" sx={{ margin: '0 1rem' }}> Skills </Link>
               <Link href="#contact" color="inherit" sx={{ margin: '0 1rem' }}> Contact </Link>  */}
               </Box> 
               </Container> 
               </Box>
    </>
  )
}

export default Footer;