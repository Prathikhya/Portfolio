import  React  from 'react';
import { Box, Typography, Button, Toolbar, IconButton, } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
// import { motion } from 'framer-motion';
import NavOptions from '../exponents/NavOptions';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const drawerWidth = 250;


function Navbar(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{  textAlign: 'center', backgroundColor:'secondary.main',color:'secondary.sec', height: '100%', width: drawerWidth, }}>

            {/* logo drawer part start */}

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',bgcolor:'secondary.sec', }}>
            
            <img src="https://gimgs2.nohat.cc/thumb/f/350/bts-sticker-mang-bts-bt21-bt21--m2H7d3H7i8d3A0H7.jpg" 
            alt="intro" className='img_bg' style={{width: '10%',height: '10%',objectFit: 'cover', borderRadius:'50%'}} />
       
            <Typography variant="h6" sx={{ my: 2 }}>
            <span className='port'>PORTFolio</span>
            
            </Typography>
            </Box>


            <Divider />

           

            <List>
                {NavOptions.map((N) => (
                    <ListItem key={N.Navid} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} href={N.NavLink}>
                            <ListItemText primary={N.NavTitle} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>


        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            {/* <motion.div> */}

            <AppBar className='navbar' position='fixed' component="nav" sx={{boxShadow:'none',backdropFilter:'blur(10px)',}} >
             <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <img src="https://gimgs2.nohat.cc/thumb/f/350/bts-sticker-mang-bts-bt21-bt21--m2H7d3H7i8d3A0H7.jpg" 
        alt="intro" className='img_bg' style={{width: '25px',height: '25px',objectFit: 'cover', borderRadius:'50%'}} />
       
                    
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }, fontWeight: 600,  }}
                    >
                        <span className='port'>PORTFolio </span>
                        
                        
                    </Typography>




                    <Box  position='relative' sx={{ display: { xs: 'none', md: 'block',} }}>
                        {NavOptions.map((N) => (
                            <Button key={N.Navid} className='navlink' position='absolute' href={N.NavLink} sx={{ mx:2, px:2, color:'secondary.sec', fontWeight: 600,                           }}>
                                {N.NavTitle}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </AppBar>


            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, 
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

            {/* </motion.div> */}
        </>

    )
}

export default Navbar;