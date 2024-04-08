import React, { useState } from 'react'

import {   useNavigate } from "react-router-dom";
import { endPoint } from '../constraint';


import axios from 'axios'

const Login = () => {
    const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });


    const navigate = useNavigate();
    const LogginUser = () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${endPoint}/user/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(userCredentials)
        };

        axios.request(config)
            .then((response) => {
              console.log((response.data));

                localStorage.setItem('token ', response.data.token);
                localStorage.setItem('email', response.data.result.email);
                localStorage.setItem('userName', response.data.result.userName);
             
                navigate('/dashboard/manageJobs');
            })
            .catch((error) => {
                alert("Invalid Credentials")
                console.log(error);
            });
    }


    return (
        <>
            <div>
                <div className="db section">
                    <div className="container">
                        <div className="page-title text-center">
                            <div className="heading-holder">
                                <h1>Welcome to Career Growth</h1>
                            </div>
                            <p className="lead">Please enter your credentials to access the dashboard.</p>

                        </div>
                    </div>{/* end container */}
                </div>{/* end section */}
                <div className="section wb">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <form className="submit-form customform loginform">
                                    <h4>Login Account</h4>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user" /></span>
                                        <input type="text" className="form-control" placeholder="User name" onChange={(e) => setUserCredentials({ ...userCredentials, email: e.target.value })} />
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })} />
                                    </div>
                                    <a role="button" data-toggle="modal" onClick={LogginUser} className="btn btn-primary btn-custom " style={{ paddingTop: "10px" }}>Login</a>

                                </form>
                            </div>{/* end col */}

                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/*
*/}</div>

        </>
    )
}

export default Login
