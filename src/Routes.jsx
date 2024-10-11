import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About/About";
import Skill from "./pages/Home/Skill/Skill";
  
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
        {
            path: "skills" ,
            element: <Skill></Skill>
        },
        // {
        //     path: ,
        //     element: 
        // }
      ]
    },
  ]);