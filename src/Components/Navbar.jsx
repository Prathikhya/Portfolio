    import React from 'react';
    import { Box, Typography, Button, Toolbar } from '@mui/material';
    import AppBar from '@mui/material/AppBar';
    import AcUnitIcon from '@mui/icons-material/AcUnit';
    import MenuIcon from '@mui/icons-material/Menu';
    import { motion } from 'framer-motion';
    import NavOptions from '../exponents/NavOptions';



    function Navbar() {
        return (
            <>
                {/* <motion.div> */}
            
                <AppBar className='navbarapp' 
                sx={{
                        bgcolor:"primary.main",
                        color: "secondary.main",
                        backdropFilter: 'blur(10px)',
                        boxShadow: "none",
                    }}>
                        <Toolbar 
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            px: {
                                xs: 2,
                                sm: 3,
                                md: 4,
                                lg: 5
                            }
                        }}
                        >
                            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start',}}>

                            <AcUnitIcon sx={{fontSize: "30px"}} />
                            <Typography variant='h4' className='jin'>BTS</Typography>
                           
                            </Box>
                            <Box

                            position={'relative'}>
                                {NavOptions.map((N) => (

                                    <Button key={N.Navid} 
                                    className='navlink'
                                    
                                    sx={{ fontWeight:600, width:'100px',  mx:1, color: 'secondary.main', backgroundColor: 'transparent',
                                        '&:hover': { backgroundColor: 'initial',color: 'secondary.sec'},
                                         
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