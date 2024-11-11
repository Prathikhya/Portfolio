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
    nextArrow: < KeyboardArrowRightIcon color="success" />,
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


        <IconButton aria-label="ArrowLeft">
          <KeyboardArrowLeftIcon />
        </IconButton>

        <IconButton aria-label="ArrowRight">
          <KeyboardArrowRightIcon />
        </IconButton>


        <Slider {...settings} className='slider'>

          {pop.map((crops) => (

            <Card
              key={crops.id} // Use a unique identifier
              sx={{
                color: 'primary.fourth',
                maxWidth: { xs: 250, md: 300 },
               
                boxShadow: '14px 21px 32px -18px rgba(0,0,0,0.38)',
                borderTopRightRadius: '30px',
                borderBottomLeftRadius: '30px',
                '&:hover': {
                  // boxShadow: '-32px 3px 62px -20px rgba(0,0,0,0.62)',
                },
                margin: '0 10px',
              }}
            >
              <CardActionArea>

                <CardMedia
                  component="div"
                  sx={{
                    height: "150px",

                  }}
                  image={crops.image}
                  alt={crops.title}

                />

                <Box sx={{
                  width:"100%",
                  height:50,
                  position: "absolute",
                  top: "100px",
                  left: 0,
                  px:1,
                  color: 'white',
                  backdropFilter: ' blur(15px)',
                  textAlign: "center"
                 

                }}>
                  <Typography component="p" variant="subtitle2">{crops.title}</Typography>

                </Box>

                <CardContent>

                  
                  <Typography variant="body2" sx={{
                    color: 'primary.main',
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



                <CardActions>

                  <IconButton
                    component="a"
                    href={crops.git}
                    target="_blank"
                  >
                    <GitHubIcon />

                  </IconButton>

                </CardActions>

              </CardActionArea>
            </Card>
          ))}
        </Slider>


      </Box>
    </>
  );
}

export default Projects;
