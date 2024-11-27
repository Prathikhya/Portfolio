import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Box, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, IconButton, Icon } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pop } from '../../exponents/pop';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { pink } from '@mui/material/colors';


function Projects() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: < KeyboardArrowRightIcon color="success" className='nextarrow' />,
    prevArrow: <KeyboardArrowLeftIcon color="success" />,
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


      <Box sx={{ m: 2 }}>


      <Slider {...settings} className='slider'>

{pop.map((crops) => (

  <Card
    key={crops.id}
    sx={{
      maxWidth: 450,  p: 1, borderRadius: 3, backgroundColor: "lavender", overflow: 'hidden'
      , "&:hover": { boxShadow: "10px 27px 39px -5px rgba(0,0,0,0.75)" }
    }}>



    <CardMedia
      component="img"
      alt="green iguana"
      image={crops.image}
      sx={{ height: 150, borderRadius: 3 }}
    />


    {/* <CardActions sx={{position: 'absolute', top:0, right:0 }}>
    
    </CardActions> */}

    <CardContent>

      <Typography gutterBottom variant="h6" component="div"
        sx={{
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {crops.title}
      </Typography>


      <Typography variant='body1' component="p" padding={2}>
        {crops.describe}
      </Typography>

      {crops.technologies.map((e, index) => (
        <Typography key={index} gutterBottom variant="subtitle2" component="span" margin={1}
          border={1} paddingX={1} borderRadius={2} color='red'
        >
          {e}
        </Typography>
      ))}

      <Box  display="flex"             // Flexbox layout for horizontal alignment
      justifyContent="center"    // Center the items horizontally
      alignItems="center"        // Align the items vertically
      margin="0 auto"   
      >
      <IconButton>
        <LaptopIcon />
      </IconButton>

      <IconButton>

        <GitHubIcon />
      </IconButton>
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
