import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [res, setRes] = useState(false);

  const handlerClick = () => {
    setRes(!res);
  };

  return (
    <>
      <header
        id="header"
        className="fixed-top"
        style={{

          color: "white",
        }}
      >
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="#">
              <span>AK</span> Group
            </a>
          </h1>
          <nav
            id="navbar"
            className="navbar   navbar-expand-lg order-last order-lg-0"
          >
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={res}
          aria-label="Toggle navigation"
          onClick={handlerClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/about"  className="nav-link">About</Link>
                 </li> 
          
                <li className="nav-item">
                  <Link to='/Acadamic'  className="nav-link">
                    Academic 
                  </Link>
                </li>
                <li className="nav-item">
                <Link to='/supportitworks' className="nav-link">Support It Works</Link>
                </li>

                

                


                <li className="nav-item">
                <Link to="/Projects" className="nav-link">
                  Projects
                </Link>
              </li>


                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Technology" className="nav-link">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header-social-links d-flex">
         
            <a href="#" className="facebook">
              <i className="bi bi-whatsapp" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </header>
      <br />
      <br />
      <br />
    
    </>
  );
};

export default Navbar;
