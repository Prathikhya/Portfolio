import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Box, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, IconButton, Icon } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pop } from '../../exponents/pop';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ImageListItemBar from '@mui/material/ImageListItemBar';


function Projects() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: < KeyboardArrowRightIcon color="success" className='nextarrow'/>,
    prevArrow: <KeyboardArrowLeftIcon color="success" />,
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


      <Box sx={{ m: 2 }}>


        <Slider {...settings} className='slider'>

          {pop.map((crops) => (

            <Card 
            key={crops.id}
            sx={{ maxWidth: 300, p:1, borderRadius:3, backgroundColor:"lavender"
              ,"&:hover": {boxShadow: "10px 27px 39px -5px rgba(0,0,0,0.75)"}
            }}>

              <CardActionArea>

              <CardMedia
                component="img"
                alt="green iguana"
                image={crops.image}
                sx={{ height: 140, borderRadius:3}}
              /> 


              <CardActions sx={{position: 'absolute', top:0, right:0 }}>
              <IconButton>
              <LinkIcon/>
              </IconButton>
              <IconButton>
                
                <GitHubIcon/>
              </IconButton>
              </CardActions>
              
              <CardContent>
              
                <Typography gutterBottom variant="h6" component="div" 
                sx={{ fontWeight:600
                }}
                >
                  {crops.title}
                </Typography>

              
              </CardContent>

              </CardActionArea>
            </Card>
          ))}
        </Slider>


      </Box>
    </>
  );
}

export default Projects;
