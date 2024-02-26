import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './JobTable.css'
import axios from 'axios'
import { formatDate } from './utilities'

const JobSingle = () => {
    const [x, setX] = useState({})
    const {id    } = useParams();
    const [isLoading, setIsLoading] = useState(true);
 

    const fetchDataSingle = () => {

        let config = {
            method: 'get',
            url: `http://localhost:3000/job/${id}`
        };

        axios.request(config)
            .then((response) => {
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
                isLoading ? <>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ut excepturi non quia, laboriosam at tempore nam doloribus enim rerum perferendis aliquam esse quidem expedita autem? Aspernatur alias possimus voluptatibus.</>
                    : <>

                        <div className="section wb">
                            <div className="container">


                                {/* <div className="single-job">
                        <div className="job-tab"> */}
                                <div className="row">
                                    <div className="col-md-4 col-sm-3 col-xs-12">
                                        <div className="post-media">
                                            <a href="job-single.html"><img src={"https://psdconverthtml.com/live/yourjob/yourjob-v1/upload/job_02.jpg"} alt className="img-responsive img-thumbnail" /></a>

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-7 col-xs-12">
                                        <div className="badge freelancer-badge">{x?.type ? x?.type : 'NEW'}</div>
                                        <h3><a href="job-single.html" title>{x?.job_name}</a></h3>
                                        <small>
                                            <span>In : <a href="#">{x?.department}</a></span>
                                            <span>Last Date : {formatDate(x.last_date)}</span>    </small>
                                        <hr className="invis" />
                                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type standard specimen book.</p>
                                        <a href="#contactmodal" role="button" data-toggle="modal" className="btn btn-primary btn-custom">Apple For Job</a>
                                    </div>{/* end col */}
                                    <div className="col-md-2 col-sm-2 col-xs-12">
                                        <div className="job-meta m45">
                                            <p>Employer</p>
                                            <small>PCH Company</small>
                                            <ul className="company-links clearfix">
                                                <li><a href="#"><i className="fa fa-link" /> Website</a></li>
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
                                                <h4 className="small-title">What I am Looking?</h4>
                                                <p className="lead">100% Result Till now  with 5/5 rating with Preferred Freelancer chosen by Freelancer itself..</p>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                <p>Rremaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <h5 className="small-title">Job Features &amp; Overviews</h5>
                                                        <ul className="customlist">
                                                            <li>WordPress Expert</li>
                                                            <li>Opencart listed Partner </li>
                                                            <li>Magento Certified</li>
                                                            <li>Php Larvel ,Zend Framework</li>
                                                            <li>Certified Social Engine</li>
                                                            <li>Prestashop , CS cart and Drupal,  ZenCart developer</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h5 className="small-title">Experience Requirements</h5>
                                                        <ul className="customlist">
                                                            <li>PSD TO HTML5 (  Elite author in themeforest)</li>
                                                            <li>Great experience with Linux, Server Optimizing, Failover Clustering, Security, Virtualization know common used utilites, scripts and services such as Apache, PHP, MySQL, Nginx and many others.</li>
                                                            <li>Donec venenatis ante a imperdiet maximus. Sed in justo porta, rutrum velit non, blandit lorem.</li>
                                                            <li>Aenean pretium tortor eget nisl accumsan posuere. Aliquam congue metus eget quam scelerisque rhoncus.</li>
                                                            <li>Donec vestibulum lectus a nisi vestibulum, sed vehicula est finibus. Proin facilisis tortor sed leo suscipit, quis pellentesque dui luctus.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h5 className="small-title">Education Requirements</h5>
                                                        <ul className="customlist">
                                                            <li>Donec venenatis ante a imperdiet maximus. Sed in justo porta, rutrum velit non, blandit lorem.</li>
                                                            <li>Aliquam congue metus eget quam scelerisque rhoncus.</li>
                                                            <li>Proin facilisis tortor sed leo suscipit, quis pellentesque dui luctus.</li>
                                                        </ul>
                                                    </div>
                                                </div>{/* end row */}
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
