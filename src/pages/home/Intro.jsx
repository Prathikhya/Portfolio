import React from 'react'
import { Box, Typography} from '@mui/material';
import Buttonmy from '../../Components/Buttonmy';
import { motion } from "framer-motion";

function Intro() {
  return (
    <>
     <Box  id="intro" className="intro" sx={{ 
      marginTop:"2rem",padding:"2rem",  
      display:"flex", flexDirection:{xs:"column-reverse",sm:"row"}, alignItems:"center", justifyContent:"center", 
      textAlign:"center", height:"100vh", 
    }}>

      <Box>
      <Typography variant="h4" sx={{fontWeight:"bold", }}>Hello, I'm </Typography>
      <Typography variant="h3" sx={{fontWeight:"bold",color:"secondary.main" }}><span>Prathikhya Devi</span></Typography>
      <Typography variant="h5" sx={{fontWeight:"bold", }}>I'm a Full Stack Developer</Typography>
      
      <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}>
      <Buttonmy text="Get in touch" link="mailto:bts007@gmail.com" content='Find More'/>
      
       </motion.div>
        </Box>  

       <Box>
       <img src="https://mystickermania.com/cdn/stickers/k-pop/koya-books-512x512.png" 
        alt="intro" className='img_bg' style={{width: '30%',height: '50%',objectFit: 'cover',}} />
        </Box> 
     </Box>

     
   

      

    </>
  )
}

export default Intro;
