import React from 'react'

const Login = () => {
    return (
        <>
            <div>
                <div className="db section">
                    <div className="container">
                        <div className="page-title text-center">
                            <div className="heading-holder">
                                <h1>Login &amp; Register</h1>
                            </div>
                            <p className="lead">Hello there, this is your custom login page tagline message.</p>
                        </div>
                    </div>{/* end container */}
                </div>{/* end section */}
                <div className="section wb">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <form className="submit-form customform loginform">
                                    <h4>Login Account</h4>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user" /></span>
                                        <input type="text" className="form-control" placeholder="User name" />
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                        <input type="text" className="form-control" placeholder="Password" />
                                    </div>
                                    <button className="btn btn-custom" onClick={() => {
                                        setCurrentPage("logged")
                                        setCurrentPageInside("logged")
                                    }}>Login Account</button>
                                    <div className="checkbox checkbox-primary">
                                        <input id="checkbox_qu_01" type="checkbox" className="styled" />
                                        <label htmlFor="checkbox_qu_01"><small>Remember me</small></label>
                                    </div>
                                </form>
                            </div>{/* end col */}

                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/*
*/}</div>

        </>
    )
}

export default Login
