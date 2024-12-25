import { Typography,Box } from '@mui/material'
import React, { useState } from 'react'


function Footer() {
  return (
   <>
   <Box sx={{bgcolor:"primary.secondary", height:50,  display:"flex", justifyContent:'center',alignItems:"center",bottom:0,left:0}}>
    <Box>
        <Typography variant="body1" sx={{mt:1}}>@ {new Date().getFullYear()} Design and 
            Development by <a href="">PD</a>
        </Typography>
    </Box>

    </Box>
   </>
  )
}

export default Footer