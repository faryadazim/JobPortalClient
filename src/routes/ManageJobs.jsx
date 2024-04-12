import React, { useState, useEffect } from 'react'
import { endPoint } from '../constraint';
import axios from 'axios'
import { formatDate } from '../utilities';

const ManageJobs = () => {

    const [jobData, setJobData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);

    const category = "-1";
    const type = "All";


    const fetchData = () => {
        // setIsLoading(true)
        let config = {
            method: 'get',
            url: `${endPoint}/job?page=${currentPage}&size=6&category=${category}&search=-1&type=${type}`

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

    const deleteJob = (id) => {
        const accessToken = localStorage.getItem('token');
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `${endPoint}/job/${id}`,
            headers:  { 
                'Authorization': 'Bearer ' + accessToken
              }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                fetchData();
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
    }, [currentPage])
    return (
        <>
            <div className="content col-md-8">
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
                                            <th>Department</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            jobData.map((job) => {
                                                return <tr>
                                                    <td>
                                                        <h4>
                                                            <a  >{job?.job_name}</a><br />
                                                            <small>Last date : {formatDate(job?.last_date)}</small>
                                                        </h4>
                                                    </td>
                                                    <td><a> {job?.department}</a></td>
                                                    <td className='text-right'>
                                                        <span data-placement="top" data-toggle="tooltip" title="Remove"><button className="btn btn-danger btn-xs" onClick={() => { deleteJob(job?._id) }}>
                                                            <i className="fa fa-trash" /></button></span>
                                                    </td>
                                                </tr>
                                            })
                                        }


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
                {jobData.length > 0 && <nav aria-label="Page navigation" style={{ display: "flex", justifyContent: "right" }}>
                    <ul className="pagination " style={{ margin: " " }}>
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
            </div>
        </>
    )
}

export default ManageJobs
