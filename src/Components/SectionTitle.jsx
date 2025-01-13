import React from 'react';
import { Typography, Box, Container } from '@mui/material';

function SectionTitle({ title }) {
  return (
    <>
        <Box sx={{  paddingTop:"4rem", textAlign: 'center', }}>
          <Typography variant="h3" sx={{ m: 1, fontWeight: 600, }}>
            {title}
          </Typography>
      
        </Box>

      

    </>


  )
}

export default SectionTitle;
