import React, { useState, useEffect } from 'react'
import { endPoint } from '../constraint';
import axios from 'axios'

import { Outlet, Link, useNavigate } from "react-router-dom";
import { formatDate } from '../utilities';

const ChangePassword = () => {

    const navigate = useNavigate();

    const [managePassword, setManagePassword] = useState({
        oldPassword: "",
        newPassword: ""
    });

    const changePassword = () => {
        console.log(managePassword)
        const email = localStorage.getItem('email');
        let data = JSON.stringify({
            "email": email,
            "oldPassword": managePassword.oldPassword,
            "newPassword": managePassword.newPassword
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${endPoint}/user/changePassword`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => { 
                navigate('/dashboard/manageJobs')
            })
            .catch((error) => {
                console.log(error);
            });

    }
    return (
        <>
            <div className="content col-md-8">
                <div className="post-padding">
                    <div className="job-title nocover hidden-sm hidden-xs"><h5>Change Password</h5></div>
                    <form id="submit" className="submit-form">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Old Password </label>
                                <input type="password" className="form-control" onChange={(e) => setManagePassword({ ...managePassword, oldPassword: e.target.value })} placeholder="*********" />
                                <br />
                                <label className="control-label" >New Password</label>
                                <input type="password" onChange={(e) => setManagePassword({ ...managePassword, newPassword: e.target.value })} className="form-control" placeholder />
                                {/* <br />
                                <label className="control-label">Add New Password</label>
                                <input type="password" className="form-control" placeholder /> */}
                                <br />
                                <a role="button" data-toggle="modal" onClick={changePassword} className="btn btn-primary btn-custom " style={{ paddingTop: "10px" }}>Update Password</a>

                            </div>
                        </div>
                    </form>
                </div>{/* end post-padding */}
            </div>

        </>
    )
}

export default ChangePassword
