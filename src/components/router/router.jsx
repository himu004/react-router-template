import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import About from "../About/About";
import Contact from "../Contact/Contact";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        }
      ]
    },
  ]);

  export default router;