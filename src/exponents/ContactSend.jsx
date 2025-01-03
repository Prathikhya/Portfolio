import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography
} from '@mui/material';
import Buttonmy from '../Components/Buttonmy';

// Initial values for the form
const initialValues = {
    name: "",
    email: "",
    message: "",
};

const ContactSend = () => {
    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formValues;

        // Basic validation
        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }

        // Simulate form submission
        console.log("Form submitted:", formValues);
        // Clear form and error on successful submission
        setFormValues(initialValues);
        setError("");
    };

    return (
        <>
        <Box>

        <form onSubmit={handleSubmit}>

                 <Box sx={{ padding: 3 }}>
                     {error && <Typography color="error">{error}</Typography>}

                     <Typography variant='h5' color='primary.third' mb={2} >Feel free to contact</Typography>

                     <Box sx={{ mb: 2 }}>
                         <TextField
                             name="name"
                             label="Name"
                             variant="outlined"
                             fullWidth
                             value={formValues.name}
                             onChange={handleChange}
                             required
                         />
                     </Box>
                     <Box sx={{ mb: 2 }}>
                         <TextField
                             name="email"
                             label="Email"
                             variant="outlined"
                             fullWidth
                             value={formValues.email}
                             onChange={handleChange}
                             required
                         />
                     </Box>
                     <Box sx={{ mb: 2 }}>
                         <TextField
                             name="message"
                             label="Message"
                             variant="outlined"
                             fullWidth
                             value={formValues.message}
                             onChange={handleChange}
                             required
                         />
                     </Box>
                     <Box sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                     <Buttonmy content="Send"/>
                     </Box>
                 </Box>
             </form>      
             </Box>
        </>
        
    );
};

export default ContactSend;
