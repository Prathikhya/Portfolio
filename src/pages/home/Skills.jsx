import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Box, Button } from '@mui/material';
import { SkillsName } from '../../exponents/SkillsName';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



function Skills() {
  
  return (
    <>
    <Box id='skills' sx={{height: '100vh'}}>
      <SectionTitle title="Skills"  />
    
      <Box className={'skillbox'}
        sx={{
          // backgroundColor:'primary.third',
          display: 'flex',
          flexDirection:'row',
          flexWrap: 'wrap',
          justifyContent:'center',
          alignItems: 'center',
          my: 4    

        }}>
          
        {
          SkillsName.map((skill) => 
            (

            <Card className={'skillcard'} key={skill._id} sx={{
              borderRadius: 5, m: {xs:1, md: 3}, backgroundColor:'primary.fourth', color:'primary.third',
            }} >
      <CardActionArea>
        <CardMedia
          className='imh'
          component="img"
          image={skill.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontWeight:700
          }} >
            {skill.skillName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

          ))}
           

      </Box>

    </Box>
    </>
  );
}

export default Skills;
