import  './index.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Index from './pages/home';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () =>  {

    const getPortfolio  = async() => {
      try {
        const respond = await axios.get("/portfolio-data");
        console.log(respond.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getPortfolio();
    }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>,
      errorElement: <Error/>
    },
    
  ]);

  return (
    <>      
      <RouterProvider router={router} />
    </>
   
  );

}

export default App;
