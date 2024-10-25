import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Box, Button } from '@mui/material';
import { SkillsName } from '../../exponents/SkillsName';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';


function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsPerSlide = 7;
  const totalSlides = Math.ceil(SkillsName.length / skillsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <SectionTitle title="Skills" />


      <Box sx={{ padding: 2 }}>
        {/* Carousel for skills */}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
          
          <Button onClick={prevSlide} disabled={currentIndex === 0}>
            <ChevronLeftOutlinedIcon />
          </Button>

          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 ,backgroundColor:'burlywood'}}>
            {SkillsName.slice(currentIndex * skillsPerSlide, (currentIndex + 1) * skillsPerSlide).map((s, index) => (

              <Box key={index} sx={{ width: 100,height:50,border: 2, borderRadius: "8px", p: 1, m: 1, textAlign: 'center' }}>

                {s.skillName}

              
              </Box>


            ))}
          </Box>

          <Button onClick={nextSlide} disabled={currentIndex === totalSlides - 1}>
            <ChevronRightOutlinedIcon />
          </Button>
        </Box>

        {/* Dots Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>

          {Array.from({ length: totalSlides }).map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: currentIndex === index ? 'primary.third':'primary.main',
                margin: '0 4px',
                cursor: 'pointer',
              }}
            />
          ))}
        </Box>

        
      </Box>
    </>
  );
}

export default Skills;
