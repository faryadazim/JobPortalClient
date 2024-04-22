import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { endPoint } from '../constraint';
import { capitalizeFirstLetter } from '../utilities';
const Dashboard = () => {

    const navigate = useNavigate();

    const userName = localStorage.getItem('userName');

    return (
        <>

            <div>
                <div className="parallax section parallax-off" style={{ backgroundColor: '#232323' }}>
                    <div className="container">
                        <div className="page-title text-center">
                            <div className="heading-holder">
                                <h1>Dashboard</h1>
                            </div>
                            <p className="lead">Hello {capitalizeFirstLetter(userName)}, this is your private dashboard.</p>
                        </div>
                    </div>
                    {/* end container */}
                </div>
                {/* end section */}
                <div className="section lb">
                    <div className="container">
                        <div className="row" style={{ marginTop: "40px" }}>
                            <div className="sidebar col-md-4">
                                <div className="post-padding clearfix">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li>
                                  
                                        <Link to={"SubmitJobs"}> Submit a
                                                Jobs</Link>
                                        </li>

                                        <li className="active">
                                            <Link to={"manageJobs"}>
                                                Manage Jobs</Link>
                                        </li>


                                        <li>
                                            <Link to={"changePassword"}>  Change
                                                Password</Link>
                                        </li>
                                        <li>
                                            <a onClick={() => {
                                                localStorage.removeItem('token')
                                                localStorage.removeItem('email')
                                                localStorage.removeItem('userName')
                                                navigate('/');
                                            }}>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* end widget */}
                            </div>

                            <Outlet />


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard
