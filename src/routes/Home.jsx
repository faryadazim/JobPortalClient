import React from 'react'

import Job from '../images/job_06.jpg'
const Home = () => {
    return (    <>
            <div className="parallax section homehero  d-none" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url("demo.jpg")', backgroundPosition: '0px -24px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="home-message">
                                <h1>
                                    A Powerful Website Template
                                </h1>
                                <p>
                                    We're among one of the best Job Listing Bootstrap
                                </p>
                                <div className="svg-wrapper">
                                    <div className="ttext">
                                        <a className="btn btn-custom" href="#">View All Jobs <span className="fa fa-angle-right" /></a>
                                    </div>
                                    <svg height={57} width={200} xmlns="http://www.w3.org/2000/svg">
                                        <rect className="shape" height={57} width={200} />
                                    </svg>
                                </div>
                            </div>
                            {/* end message */}
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </div>   <div className="section lb d-none">
                <div className="container">
                    <div className="section-title text-center clearfix">
                        <h4>Featured Jobs</h4>
                        <hr />
                        <p className="lead">
                            Lorem ipsum dolor sit amet, non odio tincidunt ut ante,
                        </p>
                    </div>
                    <div className="all-jobs job-listing clearfix">
                        <div className="job-title hidden-sm hidden-xs"><h5>Featured</h5></div>

                        {
                            ['', '', '', '', '', '', ''].map((x) => {
                                return <div className="job-tab" style={{ display: 'block' }}>
                                    <div className="row">
                                        <div className="col-md-2 col-sm-2 col-xs-12">
                                            <div className="post-media">
                                                <a href="job-single.html"><img src={Job} alt className="img-responsive img-thumbnail" /></a>
                                            </div>
                                            {/* end media */}
                                        </div>
                                        {/* end col */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="badge freelancer-badge">Freelancer</div>
                                            <h3>
                                                <a href="job-single.html" title>Development Team Lead (Group Wide Technology)</a>
                                            </h3>
                                            <small>
                                                <span>Publisher : <a href="#">Amanda Sun</a></span>
                                                <span>In : <a href="#">Development</a></span>
                                                <span>Date : 21.06.2016</span>
                                            </small>
                                        </div>
                                        {/* end col */}
                                        <div className="col-md-2 col-sm-2 col-xs-12">
                                            <div className="job-meta">
                                                <p>Melbourne</p>
                                                <small>Australia</small>
                                            </div>
                                            {/* end meta */}
                                        </div>
                                        {/* end col */}
                                        <div className="col-md-2 col-sm-2 col-xs-12">
                                            <div className="job-meta text-center">
                                                <h4>$1200 - $1300</h4>
                                                <a href="#" className="btn btn-primary btn-sm btn-block">Make Offer</a>
                                            </div>
                                        </div>
                                        {/* end col */}
                                    </div>
                                    {/* end row */}
                                </div>
                            })
                        }



                        {/* end job-tab */}
                    </div>
                    {/* end alljobs */}
                    <div className="loadmorebutton text-center clearfix">
                        <a href="#" className="btn btn-primary" id="loadMore">Load More Jobs</a>
                    </div>
                    {/* end loadmore */}
                </div>
                {/* end container */}
            </div>
        </>
    )
}

export default Home
