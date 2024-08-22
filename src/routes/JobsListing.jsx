import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { formatDate, truncateString } from '../utilities'
import { JobCategories, endPoint } from '../constraint'

const JobsListing = ({ currentSectors, setCurrentSectors }) => {

    const [jobData, setJobData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);

    const { categorySlug } = useParams();
    const category = categorySlug == null ? "-1" : categorySlug;
    const type = categorySlug == null ? currentSectors : "All";
    const headLabel = categorySlug == null ? "ALL Latest Jobs Here" : JobCategories.find(x => x.value == categorySlug).label


    const fetchData = () => {
        // setIsLoading(true)
        let config = {
            method: 'get',
            url: `${endPoint}/job?page=${currentPage}&size=30&category=${category}&search=-1&type=${type}`

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
                <div className="section-title text-center clearfix">    <h4>{headLabel}</h4>
                    <hr />
                    {category == null && <p className="lead">
                        Find Pakistan Latest job | Govt and Private Jobs
                    </p>}     </div>
                <div className="all-jobs job-listing clearfix">
                    {
                        isLoading ? <> <Loader /> </> :
                            <>
                                {/* {
                                jobData.length > 0 && categorySlug==null && <div className="job-title hidden-sm hidden-xs"><h5> Latest</h5></div>
                                } */}


                                <div style={{ gap: "4px" }} >
                                    {
                                        jobData.length > 0 && jobData?.map((x, index) => {

                                            return    <div>
                                                <div className="col-md-6 double-job double-job-border-side" key={index} style={{ }}>
                                                <div style={{   padding: "24px 22px" , backgroundColor:"white", borderRadius: "20px" }}>
                                                      <h3 className='mt-0' style={{ marginTop: "0px" }}>
                                                        <Link className="navbar-brand" to={`/job/${x?.slug}`} style={{ width: "100%" }}>

                                                            {truncateString(x?.job_name)}</Link>
                                                    </h3>
                                                    <p style={{ marginBottom: "0px" }}>
                                                        <span >In : <a href="#" style={{ marginRight: "4px" }}>{x?.department},</a></span>
                                                        <span>Last Date : {formatDate(x.last_date)}</span>
                                                    </p> </div>
                                                </div>
                                                <div className="col-md-6 double-job double-job-border-side" key={index} style={{ }}>
                                                   <div style={{   padding: "24px 22px" , backgroundColor:"white", borderRadius: "20px" }}> <h3 className='mt-0' style={{ marginTop: "0px" }}>
                                                        <Link className="navbar-brand" to={`/job/${x?.slug}`} style={{ width: "100%" }}>

                                                            {truncateString(x?.job_name)}</Link>
                                                    </h3>
                                                    <p style={{ marginBottom: "0px" }}>
                                                        <span >In : <a href="#" style={{ marginRight: "4px" }}>{x?.department},</a></span>
                                                        <span>Last Date : {formatDate(x.last_date)}</span>
                                                    </p> 
                                                    </div>
                                                </div>
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
