import React from 'react'
import SectionTitle from '../../Components/SectionTitle';
import { Box, Button, Container, Typography } from '@mui/material';
import Buttonmy from '../../Components/Buttonmy';
// import { motion } from "framer-motion"

function About() {

  let skills = ["react.js", "mongodb", "nodejs", "express.js", "javascript", "bootstrap"];


  return (
    <>
       
      <Box id="about" className="about" sx={{height:"100%", color:"white",  margin:"2rem",padding:"2rem" }}>
      
      <SectionTitle   title="About" />

      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:{xs:"column",sm:"row"} }}>

        <Box>
           <dotlottie-player src="https://lottie.host/ae80c8f9-5e47-4eb5-9fb0-5ce147c0472a/MbMKUfAlEx.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </Box>

        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>

        <Typography variant="h5" sx={{fontWeight:"bold", margin:".5rem" }}>A little about Me...</Typography>
        <Typography variant="body1" sx={{ margin:".5rem"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic typesetting, 
           remaining essentially unchanged. 
       
        </Typography>
        <Buttonmy margin="1rem" text="Get in touch" link="mailto:bts007@gmail.com" content='Find More'/>
        </Box>

      </Box>

      </Box>

      

    </>
  )
}

export default About;

