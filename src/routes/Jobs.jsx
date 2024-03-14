import React, { useState, useEffect } from 'react' 
import Home from './Home' 
import JobsListing from './JobsListing'

const Jobs = ( ) => { 
    
const [currentSectors , setCurrentSectors] = useState("All")
    return (
        <>
            <Home   currentSectors={currentSectors}  setCurrentSectors={setCurrentSectors}/>
            <JobsListing   currentSectors={currentSectors}  setCurrentSectors={setCurrentSectors}/> 
        </>
    )
}

export default Jobs
