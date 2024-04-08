import React, { useState, useEffect } from 'react'
import { endPoint } from '../constraint';
import axios from 'axios'
import { formatDate } from '../utilities';

const SubmitJobs = () => {


    return (
        <>
            <div className="content col-md-8">
                  
                <div className="post-padding ">
                    <div className="job-title nocover hidden-sm hidden-xs"><h5>Job Details</h5></div>
                    <form id="submit" className="submit-form">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Project Title <small>Enter a short title for your project</small></label>
                                <input type="text" className="form-control" placeholder="My awesome project title.." />
                            </div>
                        </div>{/* end row */}
                        <hr className="invis" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Project Keywords <small>Enter max 10 keywords here</small></label>
                                <input type="text" className="form-control" placeholder="bootstrap, css, html" />
                            </div>
                        </div>{/* end row */}
                        <hr className="invis" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Project Description <small>Enter long description for your project</small></label>
                                <textarea className="form-control" placeholder="My project custom title goes here.. I need to use html codes can I?" defaultValue={""} />
                            </div>
                        </div>{/* end row */}
                        <hr className="invis" />
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <label className="control-label">Job Category <small>Select project category</small></label>
                                <select className="selectpicker" data-style="btn-default" data-live-search="true">
                                    <option>Category 01</option>
                                    <option>Category 02</option>
                                    <option>Category 03</option>
                                    <option>Category 04</option>
                                    <option>Category 05</option>
                                    <option>Category 06</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label className="control-label">Job Type <small>Fulltime, Freelancer etc. (optional)</small></label>
                                <select className="selectpicker" data-style="btn-default" data-live-search="true">
                                    <option>Freelancer</option>
                                    <option>Full Time</option>
                                    <option>Half Time</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                        </div>{/* end row */}
                        <hr className="invis" />
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <label className="control-label">Experience <small>Select freelancer experience</small></label>
                                <select className="selectpicker" data-style="btn-default" data-live-search="true">
                                    <option>Less than 1 Year</option>
                                    <option>Less than 3 Year</option>
                                    <option>Less than 5 Year</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label className="control-label">Gander <small>Select gander experience</small></label>
                                <select className="selectpicker" data-style="btn-default" data-live-search="true">
                                    <option>Male</option>
                                    <option>Famele</option>
                                    <option>Both</option>
                                </select>
                            </div>
                        </div>{/* end row */}
                        <hr className="invis" />
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <label className="control-label">Job Salary <small>Select your max salary</small></label>
                                <select className="selectpicker" data-style="btn-default" data-live-search="true">
                                    <option>$15 - $30</option>
                                    <option>$30 - $50</option>
                                    <option>$50 - $150</option>
                                    <option>$150 - $500+</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label className="control-label">Job Time <small>Select your max time. (optional)</small></label>
                                <select className="selectpicker" data-style="btn-default" data-live-search="true">
                                    <option>10 days</option>
                                    <option>30 days </option>
                                    <option>60 days</option>
                                    <option>Unlimited</option>
                                </select>
                            </div>
                        </div>{/* end row */}
                        <hr className="invis" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Location <small>If you are looking local freelancer (optional)</small></label>
                                <input id="geocomplete" type="text" className="form-control" placeholder="Type in an address" />
                                <br />
                                <input id="find" type="button" className="btn btn-default" defaultValue="Find Address" />
                                <div className="map_canvas" />
                            </div>
                        </div>{/* end row */}
                        <hr className="invis" />
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Thumbnail <small>Please add a thumbnail for the project (800x800)</small></label>
                                <div className="fileupload fileupload-new" data-provides="fileupload">
                                    <div className="fileupload-preview thumbnail" />
                                    <br />
                                    <span className="btn btn-default btn-file">
                                        <span className="fileupload-new">Select Thumbnail</span>
                                        <span className="fileupload-exists">Change</span>
                                        <input type="file" />
                                    </span>
                                    <a href="#" className="btn btn-default fileupload-exists" data-dismiss="fileupload"><i className="fa fa-close" /></a>
                                </div>
                            </div>
                        </div>{/* end row */}
                        <hr />
                        <button className="btn btn-primary">Submit Form</button>
                    </form>
                </div>{/* end post-padding */}
            </div>

        </>
    )
}

export default SubmitJobs
