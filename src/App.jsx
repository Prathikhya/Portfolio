import  './App.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Index from './pages/home';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>,
      errorElement: <Error/>
    },
    // {
    //   path: "/admin",
    //   element: <Admin/>,
    //   errorElement: <Error/>
    // },
  ]);

  return (
    <>      
      <RouterProvider router={router} />
    </>
   
  );

}

export default App;
