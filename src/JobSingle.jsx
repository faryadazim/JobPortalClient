import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './JobTable.css'
import axios from 'axios'
import { formatDate } from './utilities'
import Loader from './Loader'

const JobSingle = () => {
    const [x, setX] = useState({})
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);


    const fetchDataSingle = () => {

        let config = {
            method: 'get',
            url: `http://localhost:3000/job/${id}`
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data, "data is here")
                setX(response.data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    useEffect(() => {
        fetchDataSingle()
    }, [])

    return (
        <>
            {
                isLoading ? <><Loader /></>
                    : <>

                        <div className="section wb">
                            <div className="container">


                                {/* <div className="single-job">
                        <div className="job-tab"> */}
                                <div className="row">
                                    <div className="col-md-4 col-sm-3 col-xs-12">
                                        <div className="post-media">
                                            <Link className="navbar-brand" to="/">
                                                <img src={"https://psdconverthtml.com/live/yourjob/yourjob-v1/upload/job_02.jpg"} alt className="img-responsive img-thumbnail" />
                                            </Link>

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-7 col-xs-12">
                                        <div className="badge freelancer-badge">{x?.type ? x?.type : 'NEW'}</div>
                                        <h3>{x?.job_name}</h3>
                                        <small>
                                            <span>In : <a href="#">{x?.department}</a></span>
                                            <span>Last Date : {formatDate(x.last_date)}</span>    </small>
                                        <hr className="invis" />
                                        <p>{x?.description_1}</p>
                                        {
                                            x?.is_apply_link && <a href="#contactmodal" role="button" data-toggle="modal" className="btn btn-primary btn-custom " style={{ marginRight: "5px" }}>Apple For Job</a>
                                        }
                                        {
                                            x?.is_form_available && <a href="#contactmodal" role="button" data-toggle="modal" className="btn btn-primary btn-custom">Download Form</a>
                                        }
                                    </div>{/* end col */}
                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                        <div className="job-meta m45">
                                            <p>{x?.company_name}</p>
                                            {x?.department && <small>{x.department}</small>}
                                            <ul className="company-links clearfix">
                                                <li><a href="#"><i className="fa fa-google-plus" /> Google+</a></li>
                                                <li><a href="#"><i className="fa fa-twitter" /> Twitter</a></li>
                                                <li><a href="#"><i className="fa fa-facebook" /> Facebook</a></li>
                                                <li><a href="#"><i className="fa fa-linkedin" /> Linkedin</a></li>
                                            </ul>
                                        </div>{/* end meta */}
                                    </div>{/* end col */}
                                </div>
                                <br />


                                <div >
                                    <h2 className='mb-3 text-center'>Important Point | Qualification</h2>

                                    <table className="containerTbl">
                                        <thead>
                                            <tr>
                                                <th><h1>Sites</h1></th>
                                                <th><h1>Views</h1></th>
                                                <th><h1>Clicks</h1></th>
                                                <th><h1>Average</h1></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Google</td>
                                                <td>9518</td>
                                                <td>6369</td>
                                                <td>01:32:50</td>
                                            </tr>
                                            <tr>
                                                <td>Twitter</td>
                                                <td>7326</td>
                                                <td>10437</td>
                                                <td>00:51:22</td>
                                            </tr>
                                            <tr>
                                                <td>Amazon</td>
                                                <td>4162</td>
                                                <td>5327</td>
                                                <td>00:24:34</td>
                                            </tr>
                                            <tr>
                                                <td>LinkedIn</td>
                                                <td>3654</td>
                                                <td>2961</td>
                                                <td>00:12:10</td>
                                            </tr>
                                            <tr>
                                                <td>CodePen</td>
                                                <td>2002</td>
                                                <td>4135</td>
                                                <td>00:46:19</td>
                                            </tr>
                                            <tr>
                                                <td>GitHub</td>
                                                <td>4623</td>
                                                <td>3486</td>
                                                <td>00:31:52</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>




                                {/*    </div> 
                    </div>  */}



                                <hr className="singlejobhr" />
                                <div className="row">
                                    <div className="content col-md-12">
                                        <div className="post-single-job">
                                            <div className="single-content">
                                                <h4 className="small-title">{x?.post_name}</h4>
                                                <p className="lead">{x?.description_2}</p>

                                                {
                                                    x?.is_how_to_apply && <>
                                                        <h4 className="small-title">How to Apply</h4>
                                                        <p className="lead">{x?.how_to_apply}</p>
                                                        {x?.is_apply_link && <Link />}
                                                    </>
                                                }

                                            </div>
                                        </div>{/* end post-padding */}
                                    </div>
                                </div>
                            </div>{/* end container */}
                        </div>{/* end section */}
                    </>
            }

        </>
    )
}

export default JobSingle
