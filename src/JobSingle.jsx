import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Jobtable.css';
import axios from 'axios';
import { formatDate, removeUnderscoreAndCapitalize } from './utilities';
import Loader from './Loader';
import { endPoint } from './constraint';

const JobSingle = () => {
    const [jobInfo, setJobInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    const removeEmptyFields = (obj) => {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !== ''));
    };

    const fetchDataSingle = async () => {
        try {
            const response = await axios.get(`${endPoint}/job/${id}`);
            const jobPayload = response.data.payload;

            const jobInfo_ = {
                post_name: jobPayload.post_name,
                gender: jobPayload.gender,
                department: jobPayload.department,
                education: jobPayload.education,
                age_limit: jobPayload.age_limit,
                procedure: jobPayload.procedure,
                domicile: jobPayload.domicile,
                vacancies: jobPayload.vacancies,
                last_date: formatDate(jobPayload.last_date),
                salary: jobPayload.salary,
                group_link: "google.com"
            };
            setJobInfo(removeEmptyFields(jobInfo_));
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDataSingle();
    }, []);

    return (
        <>
            {
                isLoading ? <><Loader /></>
                    : <>
                        <div className="section wb"  >
                            <div className="container">
                                {/* <div className="single-job"><div className="job-tab"> */}
                                <div className="row">
                                    {/* <div className="col-md-4 col-sm-3 col-xs-12">
                                        <div className="post-media">
                                        <img src={x.image_1} alt className="img-responsive img-thumbnail"  style={{width:"314px" }}/>
                                      </div>
                                    </div> */}
                                    <div className="col-md-8 col-sm-8 col-xs-8">
                                        <div className="badge freelancer-badge">{x?.type ? x?.type : 'NEW'}</div>
                                        <h3>{x?.job_name}</h3>
                                        <small>
                                            {x?.department && <span>In : <a href="#">{x?.department}</a></span>}
                                            <span>Last Date : {formatDate(x.last_date)}</span>    </small>
                                        <div></div>
                                        <p>{processText(x?.description_1)}</p>
                                        {
                                            x?.is_apply_link && <a href={x?.apply_link} target="_blank" rel="noopener noreferrer" role="button" data-toggle="modal" className="btn btn-primary btn-custom " style={{ marginRight: "5px" }}>
                                                Apply For Job
                                            </a>
                                        }
                                        {
                                            x?.is_form_available && <a href={x?.apply_link} target="_blank" rel="noopener noreferrer" role="button" data-toggle="modal" className="btn btn-primary btn-custom">Download Form</a>
                                        }
                                        <div class="containerTbl" style={{ marginTop: "20px" }}>
                                            <div class="tableTbl">
                                                <div class="tableTbl-header">
                                                    <div class="header__itemTbl" ><a id="name" class="filter__linkTbl text-center" style={{ textAlign: "center" }}>Important Point | Qualification</a></div>
                                                </div>
                                                {Object.entries(jobInfo).map(([key, value]) => (
                                                    <div className="tableTbl-row" key={key}>
                                                        <div className="tableTbl-dataLft" style={{ width: "40%" }}>{removeUnderscoreAndCapitalize(key)}</div>
                                                        {
                                                            key == 'group_link' ? <div className="tableTbl-dataRgt" style={{ textAlign: "left" }}>
                                                                <a href={value} style={{ color: "#2980B9", fontWeight: "700", width: "60%" }}>Click here</a>
                                                            </div> :
                                                                <div className="tableTbl-dataRgt" style={{ textAlign: 'left', width: "60%" }}>{value}</div>
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="post-single-job" style={{ marginTop: "20px" }}>
                                            <div className="single-content">
                                                <h4 className="small-title"  >{x?.post_name}</h4>
                                                <p className="lead">{processText(x?.description_2)}</p>
                                                {
                                                    x?.is_how_to_apply && <>
                                                        <h4 className="small-title">    How to Apply</h4>
                                                        <p className="">{processText(x?.how_to_apply)}</p>
                                                        {x?.is_apply_link && <Link />}
                                                    </>
                                                }
                                            </div>
                                        </div>
                                        {
                                            Object.entries(imagesRecord).map(([key, value]) => (
                                                <img src={value} alt className="" style={{ width: "100%" }} key={key} />
                                            ))
                                        }
                                        <br />
                                        <br />
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-4">
                                        <div className="job-meta m45">
                                            <h3>Lastest Job</h3>
                                        </div>
                                        <div className="widget clearfix">
                                            <div className="postpager liststylepost">
                                                <ul className="post-blog">
                                                    {
                                                        RecentJobs.map((job, index) => {
                                                            return <li>
                                                                <div className="post" style={{ border: "1px solid #ededed" }}>
                                                                    <a href="#">
                                                                        <h4>{job.job_name}</h4>
                                                                    </a>
                                                                    <div className="blog-meta clearfix">
                                                                        <ul className="list-inline">
                                                                            <li><a href="#"><i className="fa fa-clock-o" /> {formatDate(job.last_date)}</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </>
            }

        </>
    )
}

export default JobSingle