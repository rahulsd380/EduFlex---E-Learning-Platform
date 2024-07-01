import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/Blog/BlogDetails';
import Courses from './Pages/Courses/Courses';
import ContactUs from './Components/ContactUs/ContactUs';
import DashboardLayout from './Layout/DashboardLayout/DashboardLayout';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ErrorPage from './Components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : "/",
        element: <Home></Home>
      },
      {
        path : "/blog",
        element: <Blog></Blog>
      },
      {
        path : "/courses",
        element: <Courses></Courses>
      },
      {
        path : "/blogDetails",
        element: <BlogDetails></BlogDetails>
      },
      {
        path : "/contactUs",
        element: <ContactUs></ContactUs>
      },
    ]
  },

  {
    path : '/dashboard',
    element : <DashboardLayout/>,
    children : [
      {
        path : '/dashboard',
        element : <Dashboard/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
