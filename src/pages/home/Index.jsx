import React from 'react'
import Help from '../../Components/Help';
import Intro from './Intro';
import About from './About';
import { Container } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from '../../styles/Theme';
import Projects from './Projects';
import { motion } from 'framer-motion';
import Contact from './Contact';
import Skills from './Skills';
import Footer from './Footer';
import Exaple from './Exaple';
import Navbar from './Navbar';
import '../../index.css';


function index() {
  return (

    <ThemeProvider theme={theme}>

      <Help />
      
      <Container >
            <Navbar />
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>


  )
}
export default index;