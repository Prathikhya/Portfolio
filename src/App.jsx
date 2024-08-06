import './App.css';
import ProductTab from './ap/ProductTab';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Index from './pages/home/Index';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>,
    },
  ]);

  return (
    <>
      {/* <ProductTab/>  */}
      
      <RouterProvider router={router} />
    </>
   
  );

}

export default App;
