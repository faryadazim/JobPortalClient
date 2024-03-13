import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './routes/root'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.jsx'
import Jobs from './routes/Jobs' 
import JobSingle from './JobSingle'
// import Other from './Other.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: < Jobs />,
      }, {
        path:"/job/:id",
        element:<JobSingle/> 
      },
       {
        path:"/category/:categorySlug",
        element: <JobsListing/>, 
      }
    ],
  },
 
  // {
  //   path: "/others",
  //   element: <Other />,

  // },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
