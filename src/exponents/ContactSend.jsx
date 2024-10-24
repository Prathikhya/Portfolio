import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Button,
    Typography
} from '@mui/material';

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
        <form onSubmit={handleSubmit}>
                 <Box sx={{ padding: 3 }}>
                     {error && <Typography color="error">{error}</Typography>}
                     <Typography variant='h4'>Flee free to contact</Typography>
                     <Box sx={{ mb: 2 }}>
                         <TextField
                             name="name"
                             label="Name"
                             variant="standard"
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
                             variant="standard"
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
                             variant="standard"
                             fullWidth
                             value={formValues.message}
                             onChange={handleChange}
                             required
                         />
                     </Box>
                     <Box sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                         <Button type="submit" variant="contained" sx={{
                             bgcolor: 'primary.fourth',
                             color: 'white',
                             border: 'primary.fourth',
                             width: '25%',
                             
                             
                         }}>Send</Button>
                     </Box>
                 </Box>
             </form>      
        </>
        // <Card sx={{ maxWidth: 500, mt: 4 }}>
        //     <CardHeader title="Feel Free to Contact Us" />
        //     <form onSubmit={handleSubmit}>
        //         <CardContent sx={{ padding: 2 }}>
        //             {error && <Typography color="error">{error}</Typography>}
        //             <Box sx={{ mb: 2 }}>
        //                 <TextField
        //                     name="name"
        //                     label="Name"
        //                     variant="standard"
        //                     fullWidth
        //                     value={formValues.name}
        //                     onChange={handleChange}
        //                     required
        //                 />
        //             </Box>
        //             <Box sx={{ mb: 2 }}>
        //                 <TextField
        //                     name="email"
        //                     label="Email"
        //                     variant="standard"
        //                     fullWidth
        //                     value={formValues.email}
        //                     onChange={handleChange}
        //                     required
        //                 />
        //             </Box>
        //             <Box sx={{ mb: 2 }}>
        //                 <TextField
        //                     name="message"
        //                     label="Message"
        //                     variant="standard"
        //                     fullWidth
        //                     value={formValues.message}
        //                     onChange={handleChange}
        //                     required
        //                 />
        //             </Box>
        //             <Box>
        //                 <Button type="submit" variant="contained">Send</Button>
        //             </Box>
        //         </CardContent>
        //     </form>
        // </Card>
    );
};

export default ContactSend;
