import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './routes/root'

import {
  createBrowserRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.jsx'
import Jobs from './routes/Jobs'
import JobSingle from './JobSingle'
import JobsListing from './routes/JobsListing.jsx'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'
import ManageJobs from './routes/ManageJobs.jsx'
import ChangePassword from './routes/ChangePassword.jsx'
import SubmitJobs from './routes/SubmitJobs.jsx'
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
      },
      {
        path: "/job/:id",
        element: <JobSingle />
      },
      {
        path: "/category/:categorySlug",
        element: <JobsListing />,
      },
      {
        path: "/admin",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "manageJobs",
            element: <ManageJobs />,
          },
          {
            path: "changePassword",
            element: <ChangePassword />,
          },
          {
            path: "SubmitJobs",
            element: <SubmitJobs />,
          }
        ]
      }
    ],
  },

]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
