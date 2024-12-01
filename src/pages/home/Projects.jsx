import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Box, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, IconButton, Icon } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pop } from '../../exponents/pop';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';

import ImageListItemBar from '@mui/material/ImageListItemBar';
import { pink } from '@mui/material/colors';


function Projects() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,

        },
      },

    ],
  };


  return (
    <>
      <SectionTitle title="Projects" />

      <Box >


        <Slider {...settings} className='slider'>

          {pop.map((crops) => (

            <Card
              key={crops.id}
              sx={{
                maxWidth: 500, height:{sm: 500, md:450},  borderRadius: 3, overflow: 'hidden'
                , "&:hover": { boxShadow: "10px 27px 39px -5px rgba(0,0,0,0.75)" }, display: "flex", justifyContent: "center",
                alignItems: "center",

              }}>



              <CardMedia
                component="img"
                alt="green iguana"
                image={crops.image}
                sx={{ height: 140, borderRadius: 3 }}
              />

              <CardContent sx={{textAlign:"center"}}>
                
                  <Typography gutterBottom variant="h6" component="h6" fontWeight="600"  py={1}>
                    {crops.title}
                  </Typography>

                <Typography variant='body2' component="p" py={1}>
                  {crops.describe}
                </Typography>

                {crops.technologies.map((e, index) => (
        <Typography key={index} gutterBottom variant="subtitle2" component="span" margin={1}
          border={1} borderRadius={50} padding={1} color='white' backgroundColor="black"
        >
          {e}
        </Typography>
      ))}

                <Box display="flex"             // Flexbox layout for horizontal alignment
                  justifyContent="center"    // Center the items horizontally
                  alignItems="center"        // Align the items vertically
                  margin="0 auto"
                  p={2}
                >
                  <a href={crops.link} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                      <LaptopIcon />
                    </IconButton>
                  </a>


                  <a href={crops.git} target="_blank" rel="noopener noreferrer">
                    <IconButton>
                      <GitHubIcon />
                    </IconButton>
                  </a>


                </Box>

              </CardContent>


            </Card>
          ))}
        </Slider>


      </Box>
    </>
  );
}

export default Projects;
