import React from 'react'

const Home = ({ currentSectors, setCurrentSectors }) => {
    return (<>
        <div className="parallax section homehero  d-none image-bg" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url("demo.jpg")' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 home-message-height">
                        <div className="home-message">
                            <h1>
                                A way toward your Growth Career success
                            </h1>
                            <p>
                                Explore Opportunities in Government and Private Sectors!
                            </p>
                            <div className="d-flex justify-content-centers">
                            {currentSectors !== "All" && <div className="svg-wrapper">
                                    <div className="ttext">
                                        <a className="btn btn-custom  custom-width-sectors" onClick={()=>setCurrentSectors("All")}>View All Jobs <span className="fa fa-angle-right" /></a>
                                    </div>
                                    <svg height={57} width={200} xmlns="http://www.w3.org/2000/svg">
                                        <rect className="shape" height={57} width={200} />
                                    </svg>

                                </div>}
                                {currentSectors !== "Private" && <div className="svg-wrapper">
                                    <div className="ttext">
                                        <a className="btn btn-custom  custom-width-sectors"  onClick={()=>{setCurrentSectors("Private")
                                    }}>Private Sector <span className="fa fa-angle-right" /></a>
                                    </div>
                                    <svg height={57} width={200} xmlns="http://www.w3.org/2000/svg">
                                        <rect className="shape" height={57} width={200} />
                                    </svg>

                                </div>}
                                {currentSectors !== "Govt" && <div className="svg-wrapper" style={{marginTop:"-80px"}}>
                                    <div className="ttext">
                                        <a className="btn btn-custom  custom-width-sectors" onClick={()=>setCurrentSectors("Govt")}>Govt Sector <span className="fa fa-angle-right" /></a>
                                    </div>
                                    <svg height={57} width={200} xmlns="http://www.w3.org/2000/svg">
                                        <rect className="shape" height={57} width={200} />
                                    </svg>

                                </div>}
                               
                            </div>
                        </div>
                        {/* end message */}
                    </div>
                    {/* end col */}
                </div>
                {/* end row */}
            </div>
            {/* end container */}
        </div>

    </>
    )
}

export default Home
