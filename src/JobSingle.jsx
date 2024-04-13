import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { formatDate, removeUnderscoreAndCapitalize } from './utilities'
import Loader from './Loader'
import './JobTable.css'
import { endPoint } from './constraint'

const JobSingle = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [x, setX] = useState({})
    const [jobInfo, setJobInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [RecentJobs, setRecentJobs] = useState([]);
    const [imagesRecord, setImagesRecord] = useState({});

    const removeEmptyFields = (obj) => {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !== ''));
    };

    const fetchDataSingle = async () => {

        await axios.get(`${endPoint}/job/info/${slug}`)
            .then((response) => {
                console.log(response.data, "data is here")
                setX(response.data.payload)
                var jobInfo_ = {
                    post_name: response?.data?.payload?.post_name,
                    gender: response?.data?.payload?.gender,
                    department: response?.data?.payload?.department,
                    education: response?.data?.payload?.education,
                    age_limit: response?.data?.payload?.age_limit,
                    procedure: response?.data?.payload?.procedure,
                    domicile: response?.data?.payload?.domicile,
                    vacancies: response?.data?.payload?.vacancies,
                    last_date: formatDate(response?.data?.payload?.last_date),
                    salary: response?.data?.payload?.salary,
                    group_link: response?.data?.payload?.join_whatsapp_group,
                }
                var imagesInfo = {
                    image_1: response?.data?.payload?.image_1,
                    image_2: response?.data?.payload?.image_2,
                    image_3: response?.data?.payload?.image_3,
                    image_4: response?.data?.payload?.image_4,
                    image_5: response?.data?.payload?.image_5,
                    image_6: response?.data?.payload?.image_6,
                    image_7: response?.data?.payload?.image_7,
                    image_8: response?.data?.payload?.image_8,
                    image_9: response?.data?.payload?.image_9,
                    image_10: response?.data?.payload?.image_10
                }
                setImagesRecord(removeEmptyFields(imagesInfo))
                setJobInfo(removeEmptyFields(jobInfo_))
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });

        await axios.get(`${endPoint}/job/getLatestJobs`)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setRecentJobs(response.data.payload)
            })
            .catch((error) => {
                console.log(error);
            });


    }

    const processText = (text) => {
        // <list> on top of the text will create an unordered list
        // <link:namehere:actuallink.com> will create a link
        if (text?.includes("<list>")) {
            const items = text
                .split("<list>")
                .map((item) => item.trim())
                .filter(Boolean);
            return (
                <ul>
                    {items.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item?.replace(/<link:(.*?):(.*?)>/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="font-weight: 800">$1</a>') }} />
                    ))}
                </ul>
            );
        } else {
            const replacedText = text?.replace(
                /<link:(.*?):(.*?)>/g,
                '<a href="$2" target="_blank" rel="noopener noreferrer" style="font-weight: 800">$1</a>'
            );
            return <p dangerouslySetInnerHTML={{ __html: replacedText }} />;
        }
    };

    useEffect(() => {
        fetchDataSingle()
    }, [slug])

    return (
        <>
            {
                isLoading ? <><Loader /></>
                    : <>

                        <div className="section wb"  >
                            <div className="container">


                                {/* <div className="single-job">
                        <div className="job-tab"> */}
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
                                            {x?.department && <span>In : <a style={{ marginRight: "5px" }}>{x?.department}</a></span>}
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
                                                            </div> : <div className="tableTbl-dataRgt" style={{ textAlign: 'left', width: "60%" }}>{value}</div>
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
                                                        <h4 className="small-title"> How to Apply</h4>
                                                        <p className="">{processText(x?.how_to_apply)}</p>
                                                        {x?.is_apply_link && <Link />}
                                                    </>
                                                }

                                            </div>
                                        </div>

                                        {
                                            Object.entries(imagesRecord).map(([key, value]) => (

                                                <img src={value} className="" style={{ width: "100%" }} key={key} />
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
                                                            return <li key={index}>
                                                                <div className="post" style={{ border: "1px solid #ededed" }}>
                                                               
                                                             
                                                             <a>  <h4  onClick={() => navigate(`/job/${job?.slug}`)} style={{cursor: "pointer"}}>{job.job_name}</h4></a> 
 
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
                                            </div>{/* end postpager */}
                                        </div>






                                    </div>
                                </div>
                                <br />

                                <div className="row">
                                    <div className="col-md-8">  </div>

                                    <div className='col-md-4'>  </div>

                                </div>




                                {/*    </div> 
                    </div>  */}



                                <div className="row ">
                                    <div className="content col-md-12">
                                        {/* end post-padding */}
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