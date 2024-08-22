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
import { persistor, store } from './Redux/store';
import UserProfile from './Pages/Dashboard/DashboardComponents/UserProfile/UserProfile';
import { PersistGate } from 'redux-persist/integration/react';
import ProtectedRoute from './Layout/ProtectedRoute/ProtectedRoute';
import { Toaster } from 'sonner'
import CourseDetailsPage from './Pages/Courses/CourseDetails/CourseDetailsPage';
import AddCourse from './Pages/Dashboard/Admin/ManageCourses/AddCourse/AddCourse';
import SeeData from './Pages/Dashboard/Admin/ManageCourses/AddCourse/SeeData';
import SuccessfullEnrollment from './Components/SuccessfullEnrollment/SuccessfullEnrollment';
import AddBlog from './Pages/Dashboard/Admin/ManageBlogs/AddBlog/AddBlog';
import ManageFaq from './Pages/Dashboard/Admin/ManageFaq/ManageFaq';
import Chats from './Pages/Dashboard/DashboardPages/Chats/Chats';


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
        path : "/enroll",
        element: <SuccessfullEnrollment/>
      },
      {
        path : "/courses",
        element: <Courses></Courses>
      },
      {
        path : "/blogDetails/:id",
        element: <BlogDetails/>,
        loader : ({params}) => fetch(`http://localhost:5000/api/blogs/${params.id}`)
      },
      {
        path : "/contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path : '/course/:courseId',
        element : <CourseDetailsPage/>,
        loader : ({params}) => fetch(`http://localhost:5000/api/courses/${params.courseId}`)
      },
    ]
  },

  {
    path : '/admin',
    element : <ProtectedRoute><DashboardLayout/></ProtectedRoute>,
    children : [
      {
        path : 'dashboard',
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
        path : 'blog-details/:id',
        element : <BlogDetailsAdmin/>,
        loader : ({params}) => fetch(`http://localhost:5000/api/blogs/${params.id}`)
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
        path : 'profile',
        element : <UserProfile/>
      },
      {
        path : 'add-course',
        element : <AddCourse/>
      },
      {
        path : 'see-data',
        element : <SeeData/>
      },
      {
        path : 'add-blog',
        element : <AddBlog/>
      },
      {
        path : 'manage-faq',
        element : <ManageFaq/>
      },
      {
        path : 'chats',
        element : <Chats/>
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <RouterProvider router={router} />
    </PersistGate>
    </Provider>
    <Toaster position="top-center" />
  </React.StrictMode>,
)
