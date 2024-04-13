import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './routes/root'

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from './error-page.jsx'
import Jobs from './routes/Jobs'
import JobSingle from './JobSingle'
import JobsListing from './routes/JobsListing.jsx'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'
import ManageJobs from './routes/ManageJobs.jsx'
import ChangePassword from './routes/ChangePassword.jsx'
import SubmitJobs from './routes/SubmitJobs.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
// import Other from './Other.jsx'



// const router = createBrowserRouter({
//   useHash: true,
//   routes: [
//     {
//       path: "/job-portal/",
//       element: <App />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           path: "/job-portal/",
//           element: <Jobs />,
//         },
//         {
//           path: "/job-portal/job/:id",
//           element: <JobSingle />
//         },
//         {
//           path: "/job-portal/category/:categorySlug",
//           element: <JobsListing />,
//         },
//         {
//           path: "/job-portal/admin",
//           element: <Login />,
//         },
//         {
//           path: "/job-portal/dashboard",
//           element: <Dashboard />,
//           children: [
//             {
//               path: "manageJobs",
//               element: <ManageJobs />,
//             },
//             {
//               path: "changePassword",
//               element: <ChangePassword />,
//             },
//             {
//               path: "SubmitJobs",
//               element: <SubmitJobs />,
//             }
//           ]
//         }
//       ],
//     }
//   ]
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Jobs />} />
          <Route path="job/:slug" element={<JobSingle />} />
          <Route path="category/:categorySlug" element={<JobsListing />} />
          <Route path="admin" element={<Login />} />
          <Route path="dashboard" element={<PrivateRoute> <Dashboard /></PrivateRoute>}>
            <Route path="manageJobs" element={<ManageJobs />} />
            <Route path="changePassword" element={<ChangePassword />} />
            <Route path="SubmitJobs" element={<SubmitJobs />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);