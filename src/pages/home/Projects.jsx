import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Box, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, IconButton, Icon } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pop } from '../../exponents/pop';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';


function Projects() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
  
        },
        
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,

        },
        
      },


    ],
  };


  return (
    <>
      <Box id='projects' sx={{ height: "100%",padding: "2rem", margin: "1rem" }}>
        <SectionTitle title="Projects" />

        <Box className='slider-container' sx={{ width: "100%", margin: "0 auto", }}>

          <Typography variant='h4' component='h4' textAlign='center' py={2}>Something i built..</Typography>

        <Slider {...settings} className='slider'>
          {pop.map((crops) => (

            <Card
              key={crops.id}
              sx={{maxWidth: 345, height: 400, margin: "0 auto", boxShadow: 3, borderRadius: 5, }}>
              
              <CardMedia
                component="img"
                alt={crops.title}
                image={crops.image}
                sx={{ height: 120 }}
              />
              
              <CardContent >
                <Typography gutterBottom variant="h6" component="h6" fontWeight="600" py={1} fontSize="1rem" >
                  {crops.title}
                </Typography>

                <Typography variant='body2' component="p" py={1}>
                  {crops.describe}
                </Typography>

                {/* {crops.technologies.map((e, index) => (
                  <Typography key={index} gutterBottom variant="subtitle2" component="span"

                    sx={{
                      m: 1, border: 1, borderRadius: 50, p: 1, backgroundColor: "darkblue", color: "wheat"
                    }}
                  >
                    {e}
                  </Typography>
                ))} */}

                <Box display="flex"             
                  justifyContent="center"    
                  alignItems="center"                          
                  className='project-link'
                >
                  <a href={crops.link} target="_blank" rel="noopener noreferrer" >
                    <IconButton>
                      <LaptopIcon sx={{fontSize:"1rem",color:"white"}}/>
                    </IconButton>
                  </a>


                  <a href={crops.git} target="_blank" rel="noopener noreferrer" >
                    <IconButton>
                      <GitHubIcon sx={{fontSize:"1rem",color:"white"}}/>
                    </IconButton>
                  </a>


                </Box>
              </CardContent>
            </Card>
          ))}
        </Slider>

        </Box>
      </Box>
    </>
  );
}

export default Projects;
