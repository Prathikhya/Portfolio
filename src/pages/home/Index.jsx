import React from 'react'
import Help from '../../Components/Help';
import Intro from './Intro';
import About from './About';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../../styles/Theme';
import Projects from './Projects';
import { motion } from 'framer-motion';
import Contact from './Contact';
import Skills from './Skills';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import '../../index.css';

function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* <Help /> */}
     
        <Box sx={{ height: '100vh', backgroundColor: 'primary.sec',px:"50px", }}>
          <Intro />
        </Box>
        {/* <Box sx={{ height: '100vh' }}>
          <About />
        </Box>
        <Box sx={{ height: '100vh' }}>
          <Projects />
        </Box>
        <Box sx={{ height: '100vh' }}>
          <Skills />
        </Box>
        <Box sx={{ height: '100vh' }}>
          <Contact />
        </Box> */}
   
      <Footer />
    </ThemeProvider>
  );
}

export default Index;
