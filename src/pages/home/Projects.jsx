import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Box, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, IconButton } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pop } from '../../exponents/pop';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: < KeyboardArrowRightIcon color="success"/>,
    prevArrow: <KeyboardArrowLeftIcon color="success"/>,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
         
        },
      },
    ],
  };

  return (
    <>
      <SectionTitle title="Projects" />
      <Box sx={{ m: 3 }}>
        <Slider {...settings}>
          {pop.map((crops) => (


            <Card
              key={crops.id} // Use a unique identifier
              sx={{
                bgcolor: 'primary.fourth',
                maxWidth: 350,
                height: 400,
                boxShadow: '14px 21px 32px -18px rgba(0,0,0,0.38)',
                borderTopRightRadius: '30px',
                borderBottomLeftRadius: '30px',
                '&:hover': {
                  boxShadow: '-32px 3px 62px -20px rgba(0,0,0,0.62)',
                },
                margin: '0 10px',
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: "150px" }}
                  image={crops.image}
                  alt={crops.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {crops.title} ({crops.period})
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: 'text.secondary',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4, // Adjust as necessary
                  }}>
                    {crops.describe}
                  </Typography>
                  {crops.technologies.map((e, index) => (
                    <Typography key={index} gutterBottom variant="subtitle2" component="span">
                      {e}
                    </Typography>
                  ))}
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained"  href={crops.link} 
                  target="_blank" sx={{ borderRadius: "1rem", m: 1 }}>
                  View Project
                </Button>
                <IconButton
                component="a"
                href={crops.git}
                target="_blank"
                >
                <GitHubIcon/>
                </IconButton>
                
              </CardActions>
            </Card>
          ))}
        </Slider>
      </Box>
    </>
  );
}

export default Projects;
