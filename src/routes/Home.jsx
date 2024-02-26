import React from 'react'

const Home = () => {
    return (<>
        <div className="parallax section homehero  d-none" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url("demo.jpg")', backgroundPosition: '0px -24px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="home-message">
                            <h1>
                                A Powerful Website Template
                            </h1>
                            <p>
                                We're among one of the best Job Listing Bootstrap
                            </p>
                            <div className="svg-wrapper">
                                <div className="ttext">
                                    <a className="btn btn-custom" href="#">View All Jobs <span className="fa fa-angle-right" /></a>
                                </div>
                                <svg height={57} width={200} xmlns="http://www.w3.org/2000/svg">
                                    <rect className="shape" height={57} width={200} />
                                </svg>
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
