import React from 'react'
import Help from '../../Components/Help';
import Intro from './Intro';
import About from './About';
import { Container } from '@mui/material';
import { ThemeProvider} from "@mui/material/styles";
import { theme } from '../../styles/Theme';
import Projects from './Projects';

import Contact from './Contact';
import Skills from './Skills';
import Footer from './Footer';
import * as motion from "framer-motion/client";
import Exaple from './Exaple';
import Navbar from './Navbar';
import '../../index.css';


function index() {
    return (
      <>
      <ThemeProvider theme={theme}>
        
      <Help/>
      {/* <Navbar/> */}
      {/* <motion.div
    initial={{opacity: 0,y:20}}
    animate={{ opacity:1, y:0}}
    transition={{ease: "easeIn", duration:1.5}}
    exit={{opacity:0, y:-20}}
    > */}
            
      <Container>
        <Intro/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </Container>
      <Footer/>
      </ThemeProvider>
      
      </>
      
    )
  }
export default index;