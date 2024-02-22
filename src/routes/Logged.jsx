import React from 'react'

const Logged = () => {
  return (
    <>
       <div>
              <div className="parallax section parallax-off" style={{ backgroundImage: 'url("fbg.jpg")' }}>
                <div className="container">
                  <div className="page-title text-center">
                    <div className="heading-holder">
                      <h1>Manage Jobs</h1>
                    </div>
                    <p className="lead">Hello there, this is your private dashboard.</p>
                  </div>
                </div>
                {/* end container */}
              </div>
              {/* end section */}
              <div className="section lb">
                <div className="container">
                  <div className="row">
                    <div className="sidebar col-md-4">
                      <div className="post-padding clearfix">
                        <ul className="nav nav-pills nav-stacked">
                          <li>
                            <a href="employer-dashboard.html"><span className="glyphicon glyphicon-off" /> Edit
                              Profile</a>
                          </li>
                          <li className="active">
                            <a href="employer-manage-jobs.html"><span className="glyphicon glyphicon-briefcase" />
                              Manage Jobs</a>
                          </li>
                          <li onClick={() => setCurrentPageInside("createJob")}>
                            <a ><span className="glyphicon glyphicon-star" /> Submit a
                              Jobs</a>
                          </li>
                          <li>
                            <a href="employer-favorites.html"><span className="glyphicon glyphicon-bookmark" />
                              Favorites</a>
                          </li>
                          <li>
                            <a href="employer-transactions.html"><span className="glyphicon glyphicon-edit" />
                              Transactions</a>
                          </li>
                          <li>
                            <a href="employer-change-password.html"><span className="glyphicon glyphicon-refresh" /> Change
                              Password</a>
                          </li>
                          <li>
                            <a href="#"><span className="glyphicon glyphicon-lock" /> Logout</a>
                          </li>
                        </ul>
                      </div>
                      {/* end widget */}
                    </div>
                    {/* end col */}

                    {
                      currentPageInside == "logged" ? <> <div className="content col-md-8">
                        <div className="post-padding">
                          <div className="job-title nocover hidden-sm hidden-xs">
                            <h5>Manage Jobs</h5>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="table-responsive job-table">
                                <table id="mytable" className="table table-bordred table-striped">
                                  <thead>
                                    <tr>
                                      <th>Job Title</th>
                                      <th>Freelancer</th>
                                      <th>Price</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h4>
                                          <a href="#">Hiring Online English Teachers</a><br />
                                          <small>Expired date : 21.12.2016</small>
                                          <small>Last update : 11.12.2016</small>
                                        </h4>
                                      </td>
                                      <td><a href="#">Martin Denson</a></td>
                                      <td>$31.00</td>
                                      <td>
                                        <span data-placement="top" data-toggle="tooltip" title="Approve"><button className="btn btn-success btn-xs">
                                          <i className="fa fa-check" /></button></span>
                                        <span data-placement="top" data-toggle="tooltip" title="Remove"><button className="btn btn-danger btn-xs">
                                          <i className="fa fa-trash" /></button></span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h4>
                                          <a href="#">Looking blog writer for our blog</a><br />
                                          <small>Expired date : 21.12.2016</small>
                                          <small>Last update : 11.12.2016</small>
                                        </h4>
                                      </td>
                                      <td><a href="#">John DOE</a></td>
                                      <td>$775.00</td>
                                      <td>
                                        <span data-placement="top" data-toggle="tooltip" title="Approve"><button className="btn btn-success btn-xs">
                                          <i className="fa fa-check" /></button></span>
                                        <span data-placement="top" data-toggle="tooltip" title="Remove"><button className="btn btn-danger btn-xs">
                                          <i className="fa fa-trash" /></button></span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h4>
                                          <a href="#">Development Team Lead (Group Wide
                                            Technology)</a><br />
                                          <small>Expired date : 21.12.2016</small>
                                          <small>Last update : 11.12.2016</small>
                                        </h4>
                                      </td>
                                      <td><a href="#">Patrick Jane</a></td>
                                      <td>$12.00</td>
                                      <td>
                                        <span data-placement="top" data-toggle="tooltip" title="Approve"><button className="btn btn-success btn-xs">
                                          <i className="fa fa-check" /></button></span>
                                        <span data-placement="top" data-toggle="tooltip" title="Remove"><button className="btn btn-danger btn-xs">
                                          <i className="fa fa-trash" /></button></span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h4>
                                          <a href="#">Make my website responsive device
                                            compatible</a><br />
                                          <small>Expired date : 21.12.2016</small>
                                          <small>Last update : 11.12.2016</small>
                                        </h4>
                                      </td>
                                      <td><a href="#">Lisbon Terrasa</a></td>
                                      <td>$441.00</td>
                                      <td>
                                        <span data-placement="top" data-toggle="tooltip" title="Approve"><button className="btn btn-success btn-xs">
                                          <i className="fa fa-check" /></button></span>
                                        <span data-placement="top" data-toggle="tooltip" title="Remove"><button className="btn btn-danger btn-xs">
                                          <i className="fa fa-trash" /></button></span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h4>
                                          <a href="#">Looking Graphic Designer (Logo + UI)</a><br />
                                          <small>Expired date : 21.12.2016</small>
                                          <small>Last update : 11.12.2016</small>
                                        </h4>
                                      </td>
                                      <td><a href="#">Martin Denson</a></td>
                                      <td>$55.00</td>
                                      <td>
                                        <span data-placement="top" data-toggle="tooltip" title="Approve"><button className="btn btn-success btn-xs">
                                          <i className="fa fa-check" /></button></span>
                                        <span data-placement="top" data-toggle="tooltip" title="Remove"><button className="btn btn-danger btn-xs">
                                          <i className="fa fa-trash" /></button></span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h4>
                                          <a href="#">Are you Typography Expert?</a><br />
                                          <small>Expired date : 21.12.2016</small>
                                          <small>Last update : 11.12.2016</small>
                                        </h4>
                                      </td>
                                      <td><a href="#">Jenny Martines</a></td>
                                      <td>$31.00</td>
                                      <td>
                                        <span data-placement="top" data-toggle="tooltip" title="Approve"><button className="btn btn-success btn-xs">
                                          <i className="fa fa-check" /></button></span>
                                        <span data-placement="top" data-toggle="tooltip" title="Remove"><button className="btn btn-danger btn-xs">
                                          <i className="fa fa-trash" /></button></span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h4>
                                          <a href="#">Looking WordPress Developer for
                                            ThemeForest</a><br />
                                          <small>Expired date : 21.12.2016</small>
                                          <small>Last update : 11.12.2016</small>
                                        </h4>
                                      </td>
                                      <td><a href="#">Martin Denson</a></td>
                                      <td>$11.00</td>
                                      <td>
                                        <span data-placement="top" data-toggle="tooltip" title="Approve"><button className="btn btn-success btn-xs">
                                          <i className="fa fa-check" /></button></span>
                                        <span data-placement="top" data-toggle="tooltip" title="Remove"><button className="btn btn-danger btn-xs">
                                          <i className="fa fa-trash" /></button></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* end table */}
                            </div>
                            {/* end col */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end post-padding */}
                        <nav aria-label="Page navigation">
                          <ul className="pagination">
                            <li>
                              <a href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                              </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                              <a href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div></> : currentPageInside == "createJob" ? <>  <div className="content col-md-8">
                        <div className="post-padding m120">
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
                      </> : <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam quam laborum earum hic sit unde ut eum deleniti cum odio laboriosam repudiandae nostrum fugit dicta quaerat recusandae, incidunt pariatur!</>
                    }





                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </div>
            </div>
    </>
  )
}

export default Logged
