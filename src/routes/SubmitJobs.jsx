import React, { useState, useEffect } from 'react'
import { endPoint } from '../constraint';
import axios from 'axios'
import { formatDate, formatDateForInputJob } from '../utilities';

const SubmitJobs = () => {
    const [jobData, setJobData] = useState({
        job_name: '',
        post_name: '',
        gender: '',
        department: '',
        company_name: '',
        tags: [],
        age_limit: '',
        apply_procedure: '',
        is_apply_link: true,
        apply_link: '',
        is_form_available: true,
        form_availableLink: '',
        domicile: '',
        vacancies: 1,
        last_date: '12-12-2024',
        join_whatsapp_group: '',
        description_1: '',
        description_2: '',
        is_how_to_apply: true,
        how_to_apply: '',
        location1: '',
        location2: 'n',
        salary: 0,
        type: 'Govt',
        education: '',
        procedure: '',
        category: 'All',
        images: [], // Array to store selected images
    });
    const accessToken = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataWithImages = new FormData(); // Create a FormData object for file uploads
        // Append other form data cfields
        console.log(jobData , "jobData")
        
        const formattedLastDate = formatDateForInputJob(jobData.last_date);
        // Update the formData with the formatted date
        const updatedjobData = { ...jobData, last_date: formattedLastDate };
        Object.entries(updatedjobData).forEach(([key, value]) => {
            if (key !== 'images') {
                formDataWithImages.append(key, value);
                console.log(key, value);
            }
        });
        // Append images to FormData
        updatedjobData.images.forEach((image, index) => {
            formDataWithImages.append(`image${index + 1}`, image);
            console.log(`image${index + 1}`, image);
        });

        console.log(formDataWithImages);
        try {

            const response = await axios.post(`${endPoint}/job`, formDataWithImages, {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
            });
            console.log(accessToken);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            // Handle file input change separately
            setJobData({ ...jobData, images: [...jobData.images, e.target.files[0]] });
        } else {
            // Handle other input changes normally
        setJobData({ ...jobData, [e.target.name]: e.target.value });
        }

        console.log(jobData, "jobData")
        
    };



    return (
        <>
            <div className="content col-md-8">
                <div className="post-padding">
                    <div className="job-title nocover hidden-sm hidden-xs">
                        <h5>Job Details</h5>
                    </div>
                    <form id="submit" className="submit-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Job Name</label>
                                <input type="text" className="form-control" name="job_name" value={jobData.job_name} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Post Name</label>
                                <input type="text" className="form-control" name="post_name" value={jobData.post_name} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Gender</label>
                                <select className="form-select form-control" name="gender" value={jobData.gender} onChange={handleChange}>
                                    <option value="Both">Both</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Department</label>
                                <input type="text" className="form-control" name="department" value={jobData.department} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Company Name</label>
                                <input type="text" className="form-control" name="company_name" value={jobData.company_name} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Tags</label>
                                <input type="text" className="form-control" name="tags" value={jobData.tags} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Apply Procedure</label>
                                <textarea className="form-control" name="apply_procedure" value={jobData.apply_procedure} onChange={handleChange}></textarea>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Apply Link</label>
                                <input type="text" className="form-control" name="apply_link" value={jobData.apply_link} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Form Available Link</label>
                                <input type="text" className="form-control" name="form_availableLink" value={jobData.form_availableLink} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Vacancies</label>
                                <input type="number" className="form-control" name="vacancies" value={jobData.vacancies} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                        <label className="control-label">Last Date</label>
                        <input type="date" className="form-control" name="last_date" value={jobData.last_date} onChange={handleChange} />
                  </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Join WhatsApp Group</label>
                                <input type="text" className="form-control" name="join_whatsapp_group" value={jobData.join_whatsapp_group} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Description 1</label>
                                <textarea className="form-control" name="description_1" value={jobData.description_1} onChange={handleChange}></textarea>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Description 2</label>
                                <textarea className="form-control" name="description_2" value={jobData.description_2} onChange={handleChange}></textarea>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">How to Apply</label>
                                <textarea className="form-control" name="how_to_apply" value={jobData.how_to_apply} onChange={handleChange}></textarea>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Location 1</label>
                                <input type="text" className="form-control" name="location1" value={jobData.location1} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Salary</label>
                                <input type="text" className="form-control" name="salary" value={jobData.salary} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Procedure</label>
                                <input type="text" className="form-control" name="procedure" value={jobData.procedure} onChange={handleChange} />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Category</label>
                                <input type="text" className="form-control" name="category" value={jobData.category} onChange={handleChange} />
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <label className="control-label">Job Images <small>Please select images order Wise</small></label>
                                <div className="fileupload fileupload-new" data-provides="fileupload">

                                <span className="btn btn-default btn-file" style={{ marginRight: "3px" }}>
                            <span className="fileupload-new">Select Image 1</span>
                            <span className="fileupload-exists">Change</span>
                            <input type="file" name="image1" onChange={handleChange} />
                        </span>
                        <span className="btn btn-default btn-file" style={{ marginRight: "3px" }}>
                            <span className="fileupload-new">Select Image 2</span>
                            <span className="fileupload-exists">Change</span>
                            <input type="file" name="image2" onChange={handleChange} />
                        </span>
                        <span className="btn btn-default btn-file" style={{ marginRight: "3px" }}>
                            <span className="fileupload-new">Select Image 3</span>
                            <span className="fileupload-exists">Change</span>
                            <input type="file" name="image3" onChange={handleChange} />
                        </span>
                                </div>

                            </div>

                        </div>{/* end row */}
                        <hr className="invis" />
                        <button type="submit" className="btn btn-primary">Submit Form</button>
                    </form>
                </div>{/* end post-padding */}
            </div>

        </>
    )
}

export default SubmitJobs
