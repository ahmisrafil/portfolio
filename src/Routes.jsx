import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About/About";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:
      [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"about" ,
            element: <About></About>
        },
        // {
        //     path: ,
        //     element: 
        // }
      ]
    },
  ]);