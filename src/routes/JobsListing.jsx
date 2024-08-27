import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { formatDate, truncateString } from '../utilities'
import { JobCategories, endPoint } from '../constraint'
import { useOutletContext } from 'react-router-dom';

const JobsListing = ({ currentSectors, setCurrentSectors }) => {

    const [jobData, setJobData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);

    const { categorySlug , search } = useParams();
    const search_ = search == null ? "-1" : search;
    const category = categorySlug == null ? "-1" : categorySlug;
    const type = categorySlug == null ? currentSectors : "All";
    const headLabel = categorySlug == null ? "ALL Latest Jobs Here" : JobCategories.find(x => x.value == categorySlug).label
    var temp = -1
    const context = useOutletContext();
    console.log("context", context)
    const fetchData = () => {
        // setIsLoading(true)
        let config = {
            method: 'get',
            url: `${endPoint}/job?page=${currentPage}&size=30&category=${category}&search=${search_}&type=${type==null?"All":type}`,

        };

        axios.request(config)
            .then((response) => {
                console.log("response", response);
                setJobData([...response.data.data])
                setIsLoading(false)
                // setCurrentPage(currentPage + 1)

                setTotalPages(Math.ceil(response.data.total_record / 7));


            })
            .catch((error) => {
                console.log(error);
            });





    }


    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };



    useEffect(() => {
        fetchData()
    }, [currentPage, categorySlug, currentSectors])

    return (

        <div className="section lb d-none">
            <div className="container">
                <div className="section-title text-center clearfix">    <h4>
                    
                    {
                        search_ == "-1" ? <span>{headLabel}</span>: <span>your search results for: {search_}</span>
                    } 
                    
                    </h4>
                    <hr />
                    {category == null && <p className="lead">
                        Find Pakistan Latest job | Govt and Private Jobs 
                        {/* your seach rhis: {context} */}
                    </p>}     </div>
                <div className="all-jobs job-listing clearfix">
                    {
                        isLoading ? <> <Loader /> </> :
                            <>
                                {/* {
                                jobData.length > 0 && categorySlug==null && <div className="job-title hidden-sm hidden-xs"><h5> Latest</h5></div>
                                } */}


                                {/* w-50  double-job double-job-border-side */}
                                <div style={{ gap: "4px" }} >
                                    {

                                        jobData.length > 0 && Array.from({ length: Math.ceil(jobData.length / 2) }, (_, index) => {
                                            temp = temp + 2
                                            console.log(jobData[temp - 1]?.job_name)
                                            return <div className='d-flex-direction' >
                                                <div className='card-job' >
                                                    <div className='card-inner'>

                                                        <div>
                                                            <h3 className='headingJob' >
                                                                <Link className="navbar-brand" to={`/job/${jobData[temp - 1]?.slug}`} style={{ width: "100%" }}>

                                                                    {truncateString(jobData[temp - 1]?.job_name)}
                                                                </Link>
                                                            </h3>
                                                            <p className='headingJobInner'>
                                                                <span>In:        <Link to={`/job/${jobData[temp - 1]?.slug}`}  > {jobData[temp - 1]?.department}, </Link> </span>
                                                                <span>Last Date: <Link to={`/job/${jobData[temp - 1]?.slug}`}  > {formatDate(jobData[temp - 1]?.last_date)}</Link> </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>


                                                {jobData[temp]!=undefined && <div className='card-job'>
                                                    <div className='card-inner'>
                                                        <div className='inner-most'>
                                                            <h3 className='headingJob' >
                                                                <Link className="navbar-brand" to={`/job/${jobData[temp]?.slug}`} style={{ width: "100%" }}>

                                                                    {truncateString(jobData[temp]?.job_name)}
                                                                </Link>
                                                            </h3>
                                                            <p className='headingJobInner'>
                                                                <span>In:        <Link to={`/job/${jobData[temp]?.slug}`}  > {jobData[temp]?.department}, </Link> </span>
                                                                <span>Last Date: <Link to={`/job/${jobData[temp]?.slug}`}  > {formatDate(jobData[temp]?.last_date)}</Link> </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>}


                                            </div>

                                        })}
                                </div>
                            </>
                    }
                </div>
                {/* end alljobs */}
                {jobData.length == 0 && <p>No positions available at the moment. Please stay updated or explore alternative categories. Thank you.</p>}
                {jobData.length > 0 && <nav aria-label="Page navigation" style={{ display: "flex", justifyContent: "right" }}>
                    <ul className="pagination ">
                        <li>
                            <a aria-label="Previous" onClick={() => currentPage !== 1 && handlePrevPage()} disabled={currentPage === totalPages} style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer   " }}>

                                <span aria-hidden="true"    >«</span>
                            </a>
                        </li>

                        {/* <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li> */}

                        <li><p className='PageStatusShower'>{currentPage} of {totalPages}</p></li>
                        {/* {
                         Array.from(Array(totalPages), (e, i) => {
                            return    <li><a href="#" key={i}>{i+1}</a></li>
                          })} */}
                        <li>
                            <a aria-label="Next" onClick={() => currentPage !== totalPages && handleNextPage()} disabled={currentPage === totalPages} style={{ cursor: currentPage == totalPages ? "not-allowed" : "pointer   " }}>
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>}

                {/* <div className="loadmorebutton text-center clearfix d-flex  justify-content-end"> */}
                {/* <div>
=======
                <div className="loadmorebutton text-center clearfix d-flex  justify-content-end">
                    <div> 
                        <button onClick={() => handlePrevPage()} disabled={currentPage === 1} className='btn-custom-navigation' style={{ marginRight: "15px" }}>Previous</button>
                        <span>{currentPage} of {totalPages}</span>
                        <button onClick={() => handleNextPage()} disabled={currentPage === totalPages} className='btn-custom-navigation ' style={{ marginLeft: "15px" }}>Next</button>
      {/* end loadmore */}
            </div>
            {/* end container */}
        </div>
    )
}

export default JobsListing
