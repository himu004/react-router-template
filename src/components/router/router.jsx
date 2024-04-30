import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import About from "../About/About";
import Contact from "../Contact/Contact";
import User from "../User/User";
import Github from "../Github/Github";
  
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
        },
        {
            path: "/user/:userid",
            element: <User />
        },
        {
            
            path: "/github",
            element: <Github />,
        },
      ]
    },
  ]);

//! Other syntax of router 
// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element={<Root/>}>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/about' element={<About/>}/>
//             <Route path='/contact' element={<Contact/>}/>
//         </Route>
//     )
// );

export default router;