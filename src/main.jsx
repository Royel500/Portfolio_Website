import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
}  from "react-router";

import HomeLayOut from './Home/HomeLayOut.jsx';
import Home from './Home/Home.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Details from './Components/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayOut></HomeLayOut>,
    children:[
      {
        index:true,
        element: <Home></Home>,
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path:'/details/:id',
        element:<Details></Details>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} >

   </RouterProvider>
  </StrictMode>,
)
