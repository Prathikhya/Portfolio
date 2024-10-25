import React from 'react';
import { Button } from '@mui/material';

function Buttonmy({content}) {
  return (
    <>
    <Button variant="contained" sx={{
              m: 1,
              p: '.8rem',
              fontWeight: 600,
             backgroundColor:"transparent",
             color:"primary.secondary",
             borderRadius:3,
             '&:hover':{
              backgroundColor:'primary.third',
              color:'#fff',
             
             }

            }}>
              {content}
            </Button>
    </>
  )
}

export default Buttonmy;