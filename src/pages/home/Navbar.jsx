import React from 'react';
import { Box, Container, Typography, Button, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import NavOptions from '../../exponents/NavOptions';



function Navbar() {
    return (
        <>
            {/* <motion.div> */}
            <AppBar sx={{
                    bgcolor:"white",
                    color: "primary.main",
                    backdropFilter: 'blur(10px)'
                }}>
                    <Toolbar sx={{
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        px: {
                            xs: 2,
                            sm: 3,
                            md: 4,
                            lg: 5
                        }
                    }}>
                        <Typography variant='h4' className='jin'>
                            BTS
                        </Typography>

                        <Box>
                            {NavOptions.map((N) => (

                                <Button key={N.Navid} 
                                 sx={{ fontWeight:600, width:'100px',  mx:1,

                                    '&:hover':{
                                        backgroundColor:'primary.secondary',
                                        color:'#fff'
                                    }
                                  }} 
                                 href={N.NavLink}>{N.NavTitle} </Button>
                            ))}
                    
                        </Box>
                    </Toolbar>
                </AppBar>

                
            {/* </motion.div> */}
        </>
    )
}

export default Navbar;