import React from 'react'
import { Box, Typography} from '@mui/material';
import Buttonmy from '../../Components/Buttonmy';


function Intro() {
  return (
    <>
      <Box id='intro' sx={{display:'flex',flexDirection:{xs:'column',md:'row' }, justifyContent:'space-between',alignItems:'center',
      height:'100vh',width:"100%"}}>
     
      <Box className="right_part"
        sx={{display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'start',
          width: '50%',
          height: '100%',
          
        }}>
          <Typography variant='h5' component='h5'>
       Hi! I am
       </Typography>

       <Typography variant='h3' component='h3'>
        Prathikhya Devi
       </Typography>

       <Typography variant='h4' component='h4'>
        Web Developer
       </Typography>

      </Box>

      <Box className="left_part" sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',width: '50%',height: '100%',}}>
        <Box sx={{width: '500px',height: '500px',}}>

        <img src="https://ih1.redbubble.net/image.5512360888.9330/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" 
        alt="intro" className='img_bg' style={{width: '100%',height: '100%',objectFit: 'cover',}} />
        </Box>
        </Box>
</Box>
   

      

    </>
  )
}

export default Intro;
