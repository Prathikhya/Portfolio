import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { Box, Button, Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ContactSend from '../../exponents/ContactSend';
import ContactMy from '../../exponents/ContactMy';
function Contact() {
  return (
    <>
      <SectionTitle title="Contact Me" />

      <Container sx={{ mt: 4, mb:2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ContactSend />
          </Grid>
          <Grid item xs={12} md={6}>

            <ContactMy />

          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contact