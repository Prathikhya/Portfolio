import  React  from 'react';
import { Box, Typography, Button, Toolbar, IconButton, } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
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
        <Box onClick={handleDrawerToggle} sx={{  textAlign: 'center',color:'secondary.main',  }}>

            {/* logo drawer part start */}

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',bgcolor:'primary.sec', }}>
            <AcUnitIcon sx={{ fontSize: 30, my: 2,color:'error.main' }} />
            <Typography variant="h6" sx={{ my: 2 }}>
                BTS
            </Typography>
            </Box>

            {/* logo drawer part end */}

            <Divider />

            {/* drawer list part start */}

            <List>
                {NavOptions.map((N) => (
                    <ListItem key={N.Navid} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} href={N.NavLink}>
                            <ListItemText primary={N.NavTitle} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            {/* drawer list part end */}

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            {/* <motion.div> */}

            <AppBar component="nav" sx={{bgcolor:'primary.sec', color:'secondary.main',boxShadow:'none',
                width:'100%',  }}>
             <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <AcUnitIcon sx={{ fontSize: 30, color:'error.main' }} />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        BTS
                    </Typography>


                    <Box  position='relative' sx={{ display: { xs: 'none', sm: 'block',} }}>
                        {NavOptions.map((N) => (
                            <Button key={N.Navid} className='navlink' position='absolute' href={N.NavLink} sx={{color:'secondary.main', mx:2, px:2,
                            '&:hover':{ color:'primary.main',fontWeight:600 }}}>
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
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
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