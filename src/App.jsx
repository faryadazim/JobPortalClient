import { useState, useEffect } from 'react'
import './App.css'
import Logo from './images/logo.png'
// import Flogo from './images/flogo.png' 
import { Outlet, Link } from "react-router-dom";
import Loader from './Loader'
import Home from './routes/Home'
import { JobCategories } from './constraint'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function App() {
  // const [currentPage, setCurrentPage] = useState("/") 
  return (
    <>
      <div id="wrapper">
        <header className="header ">
          <div className="container-fluid">
            <nav className="navbar navbar-default yamm">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <Link className="navbar-brand" to="/">
                    <img src={Logo} className="img-responsive" style={{ height: "50px" }} /></Link>
                </div>
                {/* end navbar header */}
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    {
                      JobCategories.map((x,index) => {
                        return <li key={index} style={{ fontWeight: "900" }}><Link to={`category/${x.value}`}>{x.label}</Link></li>
                      })

                    }


                  </ul>
                  <ul className="nav navbar-nav navbar-right ">
                    {/* <li>
                      <a role="button" onClick={() => {

                        setCurrentPage("login")
                      }} >Sign in</a>
                    </li> */}
                    {/* <li >
                      <a className="btn btn-primary"  onClick={() => setCurrentPage("login")}>Submit Job</a>
                    </li> */}
                  </ul>
                  {/* end dropdown */}
                </div>
                {/*/.nav-collapse */}
              </div>
              {/*/.container-fluid */}
            </nav>
            {/* end nav */}
          </div>
          {/* end container */}
        </header>
        {/* {
          currentPage == "/" ? <> </> : currentPage === "job" ? <></> : currentPage === "logged" ? <> </> : currentPage == "login" ? <>
              </> : <></>
        } */}


        <Outlet />

        {/* end section */}



        {/* end section */}
        <div className="section footer">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h4>Contact</h4>
                  </div>{/* end widget-title */}
                  <div className="link-widget">
                    <ul className="check">
                      <li><a href="#">Video Tutorials</a></li>
                      <li><a href="#">Live Chat Support</a></li>
                      <li><a href="#">Email Newsletter</a></li>
                      <li><a href="#">Follow on Social</a></li>
                      <li><a href="#">Subscribe to Youtube</a></li>
                      <li><a href="#">Get In Touch</a></li>
                      <li><a href="#">Support Forums</a></li>
                      <li><a href="#">Submit a Ticket</a></li>
                    </ul>{/* end check */}
                  </div>{/* end link-widget */}
                </div>
              </div>{/* end col */}
              <div className="col-md-2 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h4>Network</h4>
                  </div>{/* end widget-title */}
                  <div className="link-widget">
                    <ul className="check">
                      <li><a href="job-search.html">Job Search</a></li>
                      <li><a href="job-search-map.html">Job Search Map</a></li>
                      <li><a href="job-add.html">Add a Job</a></li>
                      <li><a href="employer-dashboard.html">Employer Dashboard</a></li>
                      <li><a href="employer-listing.html">Employer Listing</a></li>
                      <li><a href="employer-edit-profile.html">Employer Edit Profile</a></li>
                      <li><a href="freelancer-profile.html">Freelancer Profile</a></li>
                      <li><a href="freelancer-search.html">Freelancer Search</a></li>
                      <li><a href="freelancer-search-map.html">Freelancer Search Map</a></li>
                      <li><a href="freelancer-add-resume.html">Add a Resume / CV</a></li>
                    </ul>{/* end check */}
                  </div>{/* end link-widget */}
                </div>
              </div>{/* end col */}
              <div className="col-md-2 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h4>Our Pages</h4>
                  </div>{/* end widget-title */}
                  <div className="link-widget">
                    <ul className="check">
                      <li><a href="page-about.html">About us</a></li>
                      <li><a href="page-services.html">Custom Services</a></li>
                      <li><a href="shop.html">Shop Page</a></li>
                      <li><a href="shop-single.html">Shop Single</a></li>
                      <li><a href="shop-single-alt.html">Shop Single Alt</a></li>
                      <li><a href="shop-cart.html">Shop Cart</a></li>
                      <li><a href="shop-checkout.html">Shop Checkout</a></li>
                      <li><a href="page-pricing.html">Plans &amp; Pricing</a></li>
                      <li><a href="page-testimonial.html">Testimonials</a></li>
                    </ul>{/* end check */}
                  </div>{/* end link-widget */}
                </div>
              </div>{/* end col */}
              <div className="col-md-2 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h4>Company</h4>
                  </div>{/* end widget-title */}
                  <div className="link-widget">
                    <ul className="check">
                      <li><a href="#">About YourJob</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Our Team Members</a></li>
                      <li><a href="#">Worldwide Offices</a></li>
                      <li><a href="#">Worldwide Meet Up</a></li>
                      <li><a href="#">Awards &amp; Reviews</a></li>
                      <li><a href="#">YourJob in Press</a></li>
                      <li><a href="#">Carrers</a></li>
                      <li><a href="#">User Guide</a></li>
                      <li><a href="#">Knowledgebase</a></li>
                      <li><a href="#">Affiliate</a></li>
                    </ul>{/* end check */}
                  </div>{/* end link-widget */}
                </div>
              </div>{/* end col */}
              <div className="col-md-4 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title" style={{ backgroundColor:"white", height:"60px"  , borderRadius:"15px", display:"flex" , justifyContent:"center" , paddingTop:"5px"}}> 
                    <Link className="navbar-brand" to="/">
                      <img src={Logo}  className="img-responsive" style={{ height: "50px"  , backgroundColor:"white"}} />
                    </Link>

                  </div>{/* end widget-title */}
                  <div className="text-widget " style={{marginTop:"5px"}}>
                    <p>CareerGrowth: Bridging opportunities between Pakistan's public and private sectors, connecting job seekers with their ideal career paths seamlessly.</p>
                    <ul className="list-inline social-small">
                      <li className='social-media-icon facebook'>
                        <a href="https://www.facebook.com/profile.php?id=61557058526797&mibextid=PtKPJ9/" target="_blank" style={{ color: "white" }}>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li className='social-media-icon twitter'>
                        <a href="https://www.instagram.com/careergateway888/" target="_blank" style={{ color: "white" }}>
                          <FaTwitter />
                        </a>
                      </li>
                      <li className='social-media-icon google'>
                        <a href="https://www.instagram.com/careergateway888/" target="_blank" style={{ color: "white" }}>
                          <FaInstagram />
                        </a>
                      </li>
                      <li className='social-media-icon linkedin'>
                        <a href="http://www.linkedin.com/in/career-gateway-7c5a6r0e5er" target="_blank" style={{ color: "white" }}>
                          <FaLinkedinIn />
                        </a>
                      </li>
                      {/* <li className='social-media-icon facebook'>
                        <a href="https://www.instagram.com/careergateway888/" target="_blank" style={{ color: "white" }}>
                          <FaGooglePlusG />
                        </a>
                      </li> */}
                      <li className='social-media-icon whatsapp'>
                        <a href="https://www.instagram.com/careergateway888/" target="_blank" style={{ color: "white" }}>
                          <FaWhatsapp />
                        </a>
                      </li>

                    </ul>

                  </div>{/* end text-widget */}
                </div>
              </div>{/* end col */}
            </div>{/* end row */}
          </div>{/* end container */}
        </div>

        {/* end footer */}

        {/* /.modal */}
      </div>

    </>
  )
}

export default App
