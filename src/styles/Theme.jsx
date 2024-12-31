import { createTheme } from "@mui/material/styles";

export const theme = createTheme({

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 800,
            lg: 1280,
           
        },
    },


    //primary (light shades)/ secondary(dark shades) ~ (main,dark,light, contrastText) 
    // error(//Falu red), warning(Naples yellow), info, success 

    palette: {
        primary: {
            main: "#F8F3EA",
            sec: "#FFDBD1"
        },
        secondary: {
            main: "#0B1957",
            sec: "#FA9EBC"
        },
        error: {
            main: "#D13535"
        },
        warning: {
            main: "#ffba08"
        },
        success: {
            main: "#214e34"
        },
        info: {
            main: "#19212e"
        },
    }
})