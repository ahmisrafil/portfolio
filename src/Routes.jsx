import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About/About";
import Skill from "./pages/Home/Skill/Skill";
import Resume from "./pages/Resume/Israfil_Mia_Resume";
import Projects from "./pages/Projects/Projects";

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
        {
            path:"resume" ,
            element: <Resume></Resume>
        },
        {
            path: "Projects" ,
            element: <Projects></Projects>
        },
        // {
        //     path: ,
        //     element: 
        // }
      ]
    },
  ]);