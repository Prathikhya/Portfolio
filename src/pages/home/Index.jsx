import React from 'react'
import Help from '../../Components/Help';
import Intro from './Intro';
import About from './About';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../../styles/Theme';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import '../../index.css';


function Index() {
  
  return (
    <ThemeProvider theme={theme}>
      
      {/* <Help /> */}
      
        <Box > 
          
        <Navbar />
          <Intro />
          <About />
          <Projects />
          <Skills />
          <Contact />

      <Footer />
        </Box>
        
   
    </ThemeProvider>
  );
}

export default Index;
