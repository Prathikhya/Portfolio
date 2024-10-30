import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    Typography,
} from '@mui/material';

function ContactMy() {
    return (
        <Box sx={{ perspective: '1000px', width: 300, height: 300 }}>
            <Box className='flip-inner' sx={{ position: 'relative', width: '100%', height: '100%', transition: 'transform 0.6s', transformStyle: 'preserve-3d' }}>
                {/* Front side */}
                <Card className='front' sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    boxShadow: 3,
                    background: 'primary.third',
                    overflow: 'hidden',
                    backfaceVisibility: 'hidden',
                    transition: '1s ease-in-out'
                }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='https://linefriendssquare.com/cdn/shop/files/Brand_MO_002679fe-5881-4e95-a03a-db399c5fb521.jpg?v=1716372082'
                            alt='bt21'
                        />
                    </CardActionArea>
                </Card>

                {/* Back side */}
                <Card className='back' sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    boxShadow: 3,
                    background: 'primary.third',
                    overflow: 'hidden',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)', // Rotate the back side
                }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel consequuntur, voluptatem laboriosam omnis reiciendis placeat earum rerum, sapiente in tempore officia animi necessitatibus nemo rem. Atque illo nulla deserunt dolorem.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>

            {/* Hover effect to flip the cards */}
            <style>
                {`
                .flip-inner:hover {
                    transform: rotateY(180deg);
                }
                `}
            </style>
        </Box>
    );
}

export default ContactMy;
