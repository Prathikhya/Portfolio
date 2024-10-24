import React from 'react'
import Button from '@mui/material/Button';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';


function Intro() {
  return (
    <>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeIn", duration: .5 }}
      >


        <Container className="bts" sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'start',
          height: {
            xs: '60vh',
            sm: '80vh'
          },
          pt: 2,
          mt: { xs: '70px', sm: '70px' },
          mb: 5
        }}>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'linear' }}
          >


            <Typography variant="h4" gutterBottom sx={{
              m: 1,
              fontSize: {
                xs: '1.2rem',
              },
            }}>
              HI I am,
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'linear' }}
          >
            <Typography variant="h2" sx={{
              m: 1,
              component:"span",
              fontSize: {
                xs: '2rem',
                sm: '4rem',
              },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'primary.third'
            }}>

              Prathikhya Devi

            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'linear' }}
          >
            <Typography variant="h3" sx={{
              m: 1,
              fontWeight: 600,
              fontSize: {
                xs: '2rem',
                sm: '3.5rem',
              },
              color:"primary.secondary"
            }}>

              Web developer

            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'linear' }}
          >
            <Typography variant="body1" sx={{
              m: 1
            }}>

              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus facere, placeat similique dolor assumenda, doloremque,
              officia illo aliquam dolores aperiam dolore laudantium. Omnis perferendis vel totam a, aut quod quam. devi

            </Typography>
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{
              scale: 1.1,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: .2, ease: 'linear' }}
          >
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
              Get started
            </Button>
          </motion.div>
        </Container>
      </motion.div>
    </>
  )
}

export default Intro;
