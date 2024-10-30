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
      <SectionTitle title="Skills"  />
    
      <Box className={'skillbox'}
        sx={{
          // backgroundColor:'primary.third',
          display: 'flex',
          flexDirection:'row',
          flexWrap: 'wrap',
          justifyContent:'center',
          alignItems: 'center',

        }}>
          
        {
          SkillsName.map((skill) => 
            (

            <Card className={'skillcard'} key={skill._id} sx={{
              borderRadius: 5,
            }} >
      <CardActionArea>
        <CardMedia
          className='imh'
          component="img"
          image={skill.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div" sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }} >
            {skill.skillName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

          ))}
           

      </Box>

     
    </>
  );
}

export default Skills;
