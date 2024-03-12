import React, { useState, useEffect } from 'react'
import Job from '../images/job_06.jpg'
import Loader from '../Loader'
import axios from 'axios'
import Home from './Home'
import { Link } from 'react-router-dom'
import { formatDate } from '../utilities' 
import { endPoint } from '../constraint'
import JobsListing from './JobsListing'

const Jobs = () => { 
    return (
        <>
            <Home />
            <JobsListing /> 
        </>
    )
}

export default Jobs
