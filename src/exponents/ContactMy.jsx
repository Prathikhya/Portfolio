import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Stack
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ApartmentIcon from '@mui/icons-material/Apartment';

function ContactMy() {
    return (


        <Card
    sx={{
        maxWidth: 500,
        mt: 4,
        borderRadius: '16px',
        boxShadow: 3,
        background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s', // Transition properties
        '&:hover': {
            transform: 'scale(1.05)', // Slightly scale up on hover
            boxShadow: 6, // Increase shadow on hover
        },
    }}
>
    <CardHeader 
        title="INFO" 
        sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.8)', 
            borderRadius: '16px 16px 0 0' 
        }} 
    />
    <CardContent sx={{ padding: 2 }}>
        <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MailOutlineIcon sx={{ mr: 1 }} />
                <Typography variant="h6">info@example.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneInTalkIcon sx={{ mr: 1 }} />
                <Typography variant="h6">+123 456 7890</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ApartmentIcon sx={{ mr: 1 }} />
                <Typography variant="h6">123 Example St, City, Country</Typography>
            </Box>
        </Stack>
    </CardContent>
</Card>
        // <Card sx={{ maxWidth: 500, mt: 4 }}>
        //     <CardHeader title="INFO" />
        //     <CardContent sx={{ padding: 2 }}>
        //         <Stack spacing={2}>
        //             <Box sx={{ display: 'flex', alignItems: 'center' }}>
        //                 <MailOutlineIcon sx={{ mr: 1 }} />
        //                 <Typography variant="h6">info@example.com</Typography>
        //             </Box>
        //             <Box sx={{ display: 'flex', alignItems: 'center' }}>
        //                 <PhoneInTalkIcon sx={{ mr: 1 }} />
        //                 <Typography variant="h6">+123 456 7890</Typography>
        //             </Box>
        //             <Box sx={{ display: 'flex', alignItems: 'center' }}>
        //                 <ApartmentIcon sx={{ mr: 1 }} />
        //                 <Typography variant="h6">123 Example St, City, Country</Typography>
        //             </Box>
        //         </Stack>
        //     </CardContent>
        // </Card>
    );
}

export default ContactMy;