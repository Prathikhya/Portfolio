import React from 'react';
import { Typography, Box, Container } from '@mui/material';

function SectionTitle({ title }) {
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" sx={{ m: 1, fontWeight: 600,color:'primary.fourth' }}>
            {title}
          </Typography>
          <Typography sx={{ height: '.3rem', backgroundColor: 'primary.secondary', width: '20%', mx: '2rem' }}>

          </Typography>
        </Box>

      </Container>

    </>


  )
}

export default SectionTitle;
