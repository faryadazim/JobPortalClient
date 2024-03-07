import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Jobtable.css'
import axios from 'axios'
import { formatDate } from './utilities'
import Loader from './Loader'
import { endPoint } from './constraint'

const JobSingle = () => {
    const [x, setX] = useState({})
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);


    const fetchDataSingle = () => {

        let config = {
            method: 'get',
            url: `${endPoint}/job/${id}`
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data, "data is here")
                setX(response.data.payload)
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

                                <div className="row">
                                    <div className="col-md-6">
                                        <div class="containerTbl">

                                            <div class="tableTbl">
                                                <div class="tableTbl-header">
                                                    <div class="header__itemTbl" ><a id="name" class="filter__linkTbl text-center" style={{textAlign:"center"}}>Important Point | Qualification</a></div>
                                                </div>
                                                <div class="tableTbl-content">
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Post Name</div>
                                                        <div class="tableTbl-dataRgt">{x?.post_name}</div>

                                                    </div>
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Gender</div>
                                                        <div class="tableTbl-dataRgt">{x?.gender}</div>

                                                    </div>
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Department</div>
                                                        <div class="tableTbl-dataRgt">{x?.department}</div>
                                                    </div>
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Education</div>
                                                        <div class="tableTbl-dataRgt">{x?.education}</div>
                                                    </div>
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Age Limit</div>
                                                        <div class="tableTbl-dataRgt">{x?.age_limit}</div>
                                                    </div>
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Procedure</div>
                                                        <div class="tableTbl-dataRgt">{x?.procedure}</div>
                                                    </div>
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Domicile</div>
                                                        <div class="tableTbl-dataRgt">{x?.domicile}</div>
                                                    </div>
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Vacancies</div>
                                                        <div class="tableTbl-dataRgt">{x?.vacancies}</div>
                                                    </div>
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Last Date</div>
                                                        <div class="tableTbl-dataRgt">{x?.last_date}</div>
                                                    </div>
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Salary</div>
                                                        <div class="tableTbl-dataRgt">{x?.salary}</div>
                                                    </div>
                                                    <div class="tableTbl-row">
                                                        <div class="tableTbl-dataLft">Join our whatsapp group</div>
                                                        <div class="tableTbl-dataRgt">Group Link here</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-md-6">
image will be here

                                    </div>
                                </div>




                                {/*    </div> 
                    </div>  */}


 
                                <div className="row ">
                                    <div className="content col-md-12">
                                        <div className="post-single-job">
                                            <div className="single-content">
                                                <h4 className="small-title" style={{marginTop:"20px"}}>{x?.post_name}</h4>
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
