import React from 'react'
import SectionTitle from '../../Components/SectionTitle';
import { Box, Button, Container, Typography } from '@mui/material';
import Buttonmy from '../../Components/Buttonmy';
// import { motion } from "framer-motion"

function About() {

  let skills = ["react.js", "mongodb", "nodejs", "express.js", "javascript", "bootstrap"];


  return (
    <>
       
      <Box id="about" className="about" sx={{minHeight: "50vh", color:"white",  margin:"2rem",padding:"2rem" }}>
      
      <SectionTitle   title="About" />

      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:{xs:"column",sm:"row"} }}>

        <Box>
           <dotlottie-player src="https://lottie.host/ae80c8f9-5e47-4eb5-9fb0-5ce147c0472a/MbMKUfAlEx.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </Box>

        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"   }}>

        {/* <Typography variant="h5" sx={{fontWeight:"bold", margin:".5rem",textAlign:"end" }}>A little about Me...</Typography> */}
        <Typography variant="body1" sx={{ margin:"1rem", padding:"3rem",  }}>
        Motivated and detail-oriented Computer Science graduate (Class of 2023) with expertise in full-stack web development, 
        including Node.js, Express.js, and MongoDB. 
        Experienced in designing and implementing scalable web solutions, with strong knowledge of data structures and collaborative 
        development using Git. 
        Seeking a challenging role to contribute to impactful projects and leverage skills in building efficient, user-friendly applications. 
        </Typography>
       
        </Box>

      </Box>

      </Box>

      

    </>
  )
}

export default About;

