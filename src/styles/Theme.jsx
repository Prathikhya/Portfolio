import { createTheme } from "@mui/material/styles";

export const theme = createTheme({

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1280,
           
        },
    }, 


    palette: {
        primary: {
            main: "#E76F51",
            sec: "#F4A261",
            thi: '#E9C46A'
        },
        secondary: {
            main: "#264653",
            sec: "#2A9D8F"
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