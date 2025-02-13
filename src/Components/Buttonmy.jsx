import React from 'react';
import { Button } from '@mui/material';

function Buttonmy({content}) {
  return (
    <>
    <Button variant="contained" sx={{
              m: 1,
              p: '.8rem',
              fontWeight: 600,
             backgroundColor:"white",
             color:"primary.sec",
             borderRadius:3,
             boxShadow: "rgba(34, 34, 162, 0.1) 0px 4px 16px, rgba(38, 38, 209, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
             '&:hover':{
               backgroundColor:'primary.main',
               color:'white',
               boxShadow:"none"
             
             }

            }}>
              {content}
            </Button>
    </>
  )
}

export default Buttonmy;