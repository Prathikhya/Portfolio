import React from 'react'
import SectionTitle from '../../Components/SectionTitle';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from "framer-motion"
import Buttonmy from '../../Components/Buttonmy';

function About() {

  let skills = ["react.js", "mongodb", "nodejs", "express.js", "javascript", "bootstrap"];


  return (
    <>
      <SectionTitle title="About Me" />

      <Container
        sx={{
         
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2
        }}>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

          }}
        >
          <dotlottie-player src="https://lottie.host/ae80c8f9-5e47-4eb5-9fb0-5ce147c0472a/MbMKUfAlEx.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </Box>

        <Box
          sx={{
            flex: 1,
            p: 2,
          }}
        >


          <Typography variant='h5'
            sx={{
              fontWeight: 'bold',
              color: 'primary.third',
              py: 1
            }}>
            A little about myself....
          </Typography>

          <Typography variant='body1'
            sx={{
              pb: 2,
              animationName: "slidein",
            }}>
            I am a fresh graduate with a strong passion for web development, 
            I'm eager to join a dynamic team where I can contribute my skills and learn from experienced professionals. 
            I'm excited about the opportunity to develop efficient, user-friendly applications and stay up-to-date with 
            the latest industry trends."
          </Typography>

          <Buttonmy content="Download CV" />
        </Box>



      </Container>

      <Box sx={{
        m: 5,

      }}>
        <Typography variant='h6' color="primary.fourth">Here are the few Technologies I've been currenty Working:</Typography>

        <Box>
          {
            skills.map((skills, index) => (
              <Button variant='outlined' sx={{
                width:'150px',
                height:'50px',
                fontWeight:600,
                backgroundColor: '',
                color: 'primary.main',
                borderColor: 'primary.main',
                border: 2,
                borderRadius: 7,
                mr: 3,
                mt: 2,
                '&:hover': {
                  backgroundColor: 'primary.fourth',
                  color:'#fff'
                }

              }}>{skills}</Button>
            ))
          }
        </Box>
      </Box>


    </>
  )
}

export default About;

