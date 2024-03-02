import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './images/logo.png'
import Job from './images/job_06.jpg'
import axios from 'axios'
// import Flogo from './images/flogo.png' 
import { Outlet, Link } from "react-router-dom";
import Loader from './Loader'
import Home from './routes/Home'
function App() {
  const [count, setCount] = useState(0)
  // const [currentPage, setCurrentPage] = useState("/")
  const [currentPageInside, setCurrentPageInside] = useState("/logged")

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
                    <img src={Logo} className="img-responsive" /></Link>
                </div>
                {/* end navbar header */}
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li><a href="index.html">Home</a></li>

                    <li><a href="page-contact.html">Supportss</a></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right ">
                    <li>
                      <a role="button" onClick={() => {

                        setCurrentPage("login")
                      }} >Sign in</a>
                    </li>
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



        {/* now put herer job managememnt temprary */}



        {/* end section */}
        <div className="section footer">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h4>Contact</h4>
                  </div>
                  {/* end widget-title */}
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
                    </ul>
                    {/* end check */}
                  </div>
                  {/* end link-widget */}
                </div>
              </div>
              {/* end col */}
              <div className="col-md-2 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h4>Network</h4>
                  </div>
                  {/* end widget-title */}
                  <div className="link-widget">
                    <ul className="check">
                      <li><a href="job-search.html">Job Search</a></li>
                      <li><a href="job-search-map.html">Job Search Map</a></li>
                      <li><a href="job-add.html">Add a Job</a></li>
                      <li>
                        <a href="employer-dashboard.html">Employer Dashboard</a>
                      </li>
                      <li>
                        <a href="employer-listing.html">Employer Listing</a>
                      </li>
                      <li>
                        <a href="employer-edit-profile.html">Employer Edit Profile</a>
                      </li>
                      <li>
                        <a href="freelancer-profile.html">Freelancer Profile</a>
                      </li>
                      <li>
                        <a href="freelancer-search.html">Freelancer Search</a>
                      </li>
                      <li>
                        <a href="freelancer-search-map.html">Freelancer Search Map</a>
                      </li>
                      <li>
                        <a href="freelancer-add-resume.html">Add a Resume / CV</a>
                      </li>
                    </ul>
                    {/* end check */}
                  </div>
                  {/* end link-widget */}
                </div>
              </div>
              {/* end col */}
              <div className="col-md-2 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h4>Our Pages</h4>
                  </div>
                  {/* end widget-title */}
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
                    </ul>
                    {/* end check */}
                  </div>
                  {/* end link-widget */}
                </div>
              </div>
              {/* end col */}
              <div className="col-md-2 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h4>Company</h4>
                  </div>
                  {/* end widget-title */}
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
                    </ul>
                    {/* end check */}
                  </div>
                  {/* end link-widget */}
                </div>
              </div>
              {/* end col */}
              <div className="col-md-4 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    {/* <img className="flogo" src={Flogo} alt /> */}
                  </div>
                  {/* end widget-title */}
                  <div className="text-widget">
                    <p>
                      This is a professional responsive HTML5 job listing, job
                      board and freelancer website template. This template
                      available only Envato marketplace!
                    </p>
                    <ul className="list-inline social-small">
                      <li>
                        <a href="#"><i className="fa fa-facebook" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa fa-twitter" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa fa-google-plus" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa fa-linkedin" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa fa-pinterest" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa fa-rss" /></a>
                      </li>
                    </ul>

                  </div>
                  {/* end text-widget */}
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end footer */}


        {/* /.modal */}
      </div>

    </>
  )
}

export default App
