import React, { useState, useEffect } from 'react'
import Job from '../images/job_06.jpg'
import Loader from '../Loader'
import axios from 'axios'
import Home from './Home'
import { Link } from 'react-router-dom'
import { formatDate } from '../utilities'
const Jobs = () => {

    const [jobData, setJobData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
        setIsLoading(true)
        let config = {
            method: 'get',
            url: `http://localhost:3000/job?page=${currentPage + 1}&size=7`
        };

        axios.request(config)
            .then((response) => {
                console.log("response", response);
                setJobData([...response.data])
                setIsLoading(false)
                setCurrentPage(currentPage + 1)

            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Home />
            <div className="section lb d-none">
                <div className="container">
                    <div className="section-title text-center clearfix">
                        <h4>Featured Jobs</h4>
                        <hr />
                        <p className="lead">
                            Find Pakistan Latest job | Govt and Private
                        </p>
                    </div>
                    <div className="all-jobs job-listing clearfix">
                        {
                            isLoading ? <> <Loader /> </> :
                                <>
                                    <div className="job-title hidden-sm hidden-xs"><h5>Featured</h5></div>
                                    {
                                        jobData?.map((x) => {
                                            return <div className="job-tab" style={{ display: 'block' }}>
                                                <div className="row">
                                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                                        <div className="post-media">
                                                            <Link className="navbar-brand" to={`job/${x?._id}`} >
                                                                <img src={Job} alt className="img-responsive img-thumbnail" /></Link>
                                                        </div>
                                                        {/* end media */}
                                                    </div>
                                                    {/* end col */}
                                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                                        <div className="badge freelancer-badge">{x?.type ? x?.type : 'NEW'}</div>
                                                        <h3>
                                                            <Link className="navbar-brand" to={`job/${x?._id}`} >

                                                                {x?.job_name}</Link>
                                                        </h3>
                                                        <small>
                                                            {/* <span>Publisher : <a href="#">Amanda Sun</a></span> */}
                                                            <span>In : <a href="#">{x?.department}</a></span>
                                                            <span>Last Date : {formatDate(x.last_date)}</span>
                                                        </small>
                                                    </div>
                                                    {/* end col */}

                                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                                        <div className="job-meta">
                                                            {x?.location1 && x?.location2 && <>   <p>{x?.location1}</p>
                                                                <small>{x?.location2}</small></>}
                                                        </div>
                                                    </div>

                                                    {/* end col */}
                                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                                        <div className="job-meta text-center">
                                                            <h4>{x?.salary}</h4>
                                                            <Link to={`job/${x?._id}`} className="btn btn-primary btn-sm btn-block">View Detail</Link>
                                                        </div>
                                                    </div>
                                                    {/* end col */}
                                                </div>
                                                {/* end row */}
                                            </div>
                                        })}
                                </>
                        }
                    </div>
                    {/* end alljobs */}
                    <div className="loadmorebutton text-center clearfix">
                        <button className="btn btn-primary" id="loadMore" onClick={() => fetchData()}>Load More Jobs</button>
                    </div>
                    {/* end loadmore */}
                </div>
                {/* end container */}
            </div>
        </>
    )
}

export default Jobs
