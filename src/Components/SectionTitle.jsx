import React from 'react';
import { Typography, Box, Container } from '@mui/material';

function SectionTitle({ title }) {
  return (
    <>
        <Box sx={{ display: 'flex', justifyContent: {sm:'center', md:'flex-start'}, alignItems: "center", paddingTop:"4rem" }}>
          <Typography variant="h3" sx={{ m: 1, fontWeight: 600, }}>
            {title}
          </Typography>
      
        </Box>

      

    </>


  )
}

export default SectionTitle;
