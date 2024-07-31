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
import ManageCourses from './Pages/Dashboard/Admin/ManageCourses/ManageCourses';
import ManageBlogs from './Pages/Dashboard/Admin/ManageBlogs/ManageBlogs';
import ManageUser from './Pages/Dashboard/Admin/ManageUser/ManageUser';
import ReportsAnalytics from './Pages/Dashboard/Admin/ReportsAnalytics/ReportsAnalytics';
import Announcements from './Pages/Dashboard/Admin/Announcements/Announcements';
import ManageEnrollments from './Pages/Dashboard/Admin/ManageEnrollments/ManageEnrollments';
import ManageTeam from './Pages/Dashboard/Admin/ManageTeam/ManageTeam';
import BlogDetailsAdmin from './Pages/Dashboard/Admin/ManageBlogs/BlogDetailsAdmin';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import AddBlogModal from './Pages/Dashboard/Admin/ManageBlogs/AddBlogModal';
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
    path : '/admin',
    element : <DashboardLayout/>,
    children : [
      {
        path : 'manage dashboard',
        element : <Dashboard/>
      },
      {
        path : 'manage-course',
        element : <ManageCourses/>
      },
      {
        path : 'manage-blogs',
        element : <ManageBlogs/>
      },
      {
        path : 'blog-details',
        element : <BlogDetailsAdmin/>
      },
      {
        path : 'manage-users',
        element : <ManageUser/>
      },
      {
        path : 'reports-analytics',
        element : <ReportsAnalytics/>
      },
      {
        path : 'announcements',
        element : <Announcements/>
      },
      {
        path : 'manage-enrollments',
        element : <ManageEnrollments/>
      },
      {
        path : 'manage-team',
        element : <ManageTeam/>
      },
      {
        path : 'manage-blog/add-blog',
        element : <AddBlogModal/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>

    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
