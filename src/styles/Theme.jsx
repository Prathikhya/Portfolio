import { createTheme } from "@mui/material/styles";

export const theme = createTheme({

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            // xl: 1920,
        },
    },

    palette: {
        background:{
            default: "#3a405a",
        },
        
        primary: {
            main: "#3b3b3f",
            secondary: "#4163b4",
            third: "#ff8552",
            fourth: "#020329",
        },
    }
})