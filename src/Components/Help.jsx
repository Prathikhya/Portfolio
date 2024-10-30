import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';


export default function Help() {
  return (

    <>
      <Container maxWidth="xl">
        <Box >
          <AppBar sx={{
            bgcolor: 'transparent',
            color:"black",
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            boxShadow:"0px 0px",
            px: {
              xs: 2,
              sm:3,
              md: 4,
              lg: 5
            },
            backdropFilter:'blur(10px)'

          }}
          >
          
            <Typography variant="h3">B</Typography>
            <Typography variant="h3" >T</Typography>
            <Typography variant="h3">S</Typography>
            


          </AppBar>
        </Box>


      </Container>
    </>
  )
}
