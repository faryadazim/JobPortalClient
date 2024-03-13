import { useState, useEffect } from 'react' 
import './App.css'
import Logo from './images/logo.png'    
// import Flogo from './images/flogo.png' 
import { Outlet, Link } from "react-router-dom"; 
import { JobCategories } from './constraint';
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
                    <img src={Logo} className="img-responsive" style={{ height: "50px" }} /></Link>
                </div>
                {/* end navbar header */}
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    {
                      JobCategories.map((x) => {
                        return <li style={{ fontWeight: "900" }}><Link   to={`category/${x.value}`}>{x.label}</Link></li>
                      })

                    }


                    <li><a href="page-contact.html">Supportss</a></li>
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



        {/* now put herer job managememnt temprary */}



        {/* end section */}
        <div className="section footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h4>Services</h4>
                  </div>
                  {/* end widget-title */}
                  <div className="link-widget">
                    <ul className="check">
                      <li><a href="/facebook.com">Contact Us</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Home Page</a></li>
                      <li><a href="#">Whatsapp group link</a></li>
                      <li><a href="#">Facebook group link</a></li>
                      
                    </ul>
                    {/* end check */}
                  </div>
                  {/* end link-widget */}
                </div>
              </div>
        
              {/* end col */}
              <div className="col-md-9 col-sm-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    {/* <img className="flogo" src={Flogo} alt /> */}
                  </div>
                  {/* end widget-title */}
                  <div className="text-widget">
                    <p>
                    Career Gateway: Your portal to endless job opportunities. Find, apply, and succeed in your dream career journey today!
                    </p>
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
