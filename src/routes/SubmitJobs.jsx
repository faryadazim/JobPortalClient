import React, { useState } from 'react';
import axios from 'axios';
import { endPoint } from '../constraint';
import { capitalizeFirstLetter, formatDateForInputJob } from '../utilities';

const SubmitJobs = () => {
    const initialValue = {
        job_name: '',
        post_name: '',
        gender: 'Both',
        department: '',
        company_name: '',
        tags: '',
        age_limit: 'No age limit',
        apply_procedure: '',
        is_apply_link: true,
        apply_link: '',
        is_form_available: true,
        form_availableLink: '',
        domicile: '',
        vacancies: 1,
        last_date: '2024-12-12',
        join_whatsapp_group: '',
        description_1: '',
        description_2: '',
        is_how_to_apply: true,
        how_to_apply: '',
        location1: '',
        location2: '',
        salary: 0,
        type: 'Govt',
        education: '',
        procedure: '' // Array to store selected images
    };

    const [jobData, setJobData] = useState({
        ...initialValue,
        images: []
    });

    const accessToken = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (jobData.job_name === '') {
            alert("Please enter job name")
            return;
        }
        const formDataWithImages = new FormData();
        const formattedLastDate = formatDateForInputJob(jobData.last_date);

        const updatedjobData = { ...jobData, last_date: formattedLastDate };

        for (const [key, value] of Object.entries(updatedjobData)) {
            if (key !== 'images') {
                formDataWithImages.append(key, value);
            }
        }

        // Append images to FormData
        updatedjobData.images.forEach((image, index) => {
            formDataWithImages.append(`image${index + 1}`, image);
        });

        try {
            const response = await axios.post(`${endPoint}/job`, formDataWithImages, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
            });
            setJobData({
                ...initialValue,
                images: []
            });
        } catch (error) {
            alert("Error in submitting job");
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setJobData({ ...jobData, [name]: checked });
        } else if (type === 'file') {
            // Handle file input change separately
            setJobData({ ...jobData, images: [...jobData.images, e.target.files[0]] });
        } else {
            setJobData({ ...jobData, [name]: value });
        }
    };

    return (
        <div className="content col-md-8">
            <div className="post-padding">
                <div className="job-title nocover hidden-sm hidden-xs">
                    <h5>Job Details</h5>
                </div>
                <form id="submit" className="submit-form" onSubmit={handleSubmit}>
                    <div className="row">
                        {Object.keys(initialValue).map((key, index) => (
                            <div key={index} className={`col-md-${['gender', 'department', 'company_name', 'tags', 'age_limit', 'apply_procedure', 'is_apply_link', 'apply_link', 'is_form_available', 'form_availableLink', 'domicile', 'vacancies', 'last_date', 'join_whatsapp_group', 'salary', 'type', 'education', 'procedure'].includes(key) ? '6' : '12'} col-sm-12`}>
                                <label className="control-label">{capitalizeFirstLetter(key.replace(/_/g, ' '))}</label>
                                {key === 'gender' ? (
                                    <select className="form-select form-control" name={key} value={jobData[key]} onChange={handleChange}>
                                        <option value="Both">Both</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                ) : key === 'is_apply_link' || key === 'is_form_available' ? (
                                    <select className="form-select form-control" name={key} value={jobData[key]} onChange={handleChange}>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                    </select>
                                ) : key === 'description_1' || key === 'description_2' || key === 'how_to_apply' ? (
                                    <textarea className="form-control" name={key} value={jobData[key]} onChange={handleChange}></textarea>
                                ) : (
                                    <input type={key === 'last_date' ? 'date' : 'text'} className="form-control" name={key} value={jobData[key]} onChange={handleChange} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <label className="control-label">Job Images <small>Please select images order Wise</small></label>
                            <div className="fileupload fileupload-new" data-provides="fileupload">
                                {[1, 2, 3, 4, 5, 6, 7, 8, , 9, 10].map((index) => (
                                    <span key={index} className="btn btn-default btn-file" style={{ marginRight: "3px" }}>
                                        <span className="fileupload-new">Select Image {index}</span>
                                        <span className="fileupload-exists">Change</span>
                                        <input type="file" name={`image${index}`} onChange={handleChange} />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className="invis" />
                    <button type="submit" className="btn btn-primary">Submit Form</button>
                </form>
            </div>
        </div>
    );
};

export default SubmitJobs;
