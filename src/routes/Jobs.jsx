import React, { useState, useEffect } from 'react'
import Job from '../images/job_06.jpg'
import Loader from '../Loader'
import axios from 'axios'
import Home from './Home'
import { Link } from 'react-router-dom'
import { formatDate } from '../utilities'
const Jobs = () => {

    const [jobData, setJobData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
        setIsLoading(true)
        let config = {
            method: 'get',
            url: `https://job-portal-server-nine.vercel.app/job?page=${currentPage + 1}&size=7`
        };

        axios.request(config)
            .then((response) => {
                console.log("response", response);
                setJobData([...response.data])
                setIsLoading(false)
                setCurrentPage(currentPage + 1)

            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Home />
          
        </>
    )
}

export default Jobs
