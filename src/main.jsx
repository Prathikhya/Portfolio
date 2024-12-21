import React, {useEffect, useState} from 'react'; //go
import ReactDOM from 'react-dom/client'//go
import App from './App.jsx';//go
import './index.css';//go
import { ThemeProvider, CssBaseline } from '@mui/material';//dout
import { theme } from './styles/Theme.jsx';//dout


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
