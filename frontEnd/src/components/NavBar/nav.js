import React from "react";
import BackgroundSlider from "react-background-slider";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../actions/login";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      token: state.token.token,
    };
  });

  return (
    <>
    <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
        <div className="row">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <a className="text-body pr-3" href=""><i className="fa fa-phone-alt mr-2"></i>000932777777</a>
                    <span className="text-body">|</span>
                    <a className="text-body px-3" href=""><i className="fa fa-envelope mr-2"></i>Info@AutoRental</a>
                </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-body px-3" href="">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-body px-3" href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-body px-3" href="">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-body px-3" href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-body pl-3" href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
      {!state.token ? (
        <div className="container-fluid position-relative nav-bar p-0">
        <div className="position-relative px-lg-5" style={{ zIndex :"9"}}>
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                <a href="" className="navbar-brand">
                    <h1 className="text-uppercase text-primary mb-1">Auto Rental</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                    <Link className="nav-item nav-link active" to="/">Home</Link> 
                        <Link className="nav-item nav-link active" to="/about">About</Link> 
                        <Link className="nav-item nav-link active" to="/contact">Contact</Link> 
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <button className="btn btn-primary btn-block mb-3"  style={{height: "50px"}}>Login</button>
            </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
      ) : (
        <div className="container-fluid position-relative nav-bar p-0">
        <div className="position-relative px-lg-5" style={{ zIndex :"9"}}>
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                <a href="" className="navbar-brand">
                    <h1 className="text-uppercase text-primary">Auto Rental</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                    <Link className="nav-item nav-link active" to="/">Home</Link> 
                    <Link className="nav-item nav-link active" to="/myres"> My Reservation</Link> 
                    <Link className="nav-item nav-link active" to="/mycars"> My Cars</Link> 
                        <Link className="nav-item nav-link active" to="/about">About</Link> 
                        <Link className="nav-item nav-link active" to="/contact">Contact</Link> 
                        <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                <button className="btn btn-primary btn-block mb-3"  style={{height: "50px"}}>Log Out</button>
            </div>

                    </div>
                </div>
            </nav>
        </div>
    </div>
      )}
    </>
  );
};

export default Nav;
  /*<div classNameName="header">
          <Link style={{ textDecoration: "none" }} href="#" classNameName="logo">
            <img src="./images/logo.png" alt="" />
          </Link>
          <div classNameName="bx bx-menu" id="menu-icon"></div>
          <ul style={{ "list-style-type": "none" }} className="navbar">
            <li>
              <Link style={{ textDecoration: "none" }} href="index.html">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} href="about.html">
                About
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} href="#reviews">
                Contact
              </Link>
            </li>
          </ul>
          <div className="header-btn1">
            <Link
              style={{ textDecoration: "none" }}
              className="sign-in"
              to="/login"
            >
              LogIn
            </Link>
          </div>
        </div>*/ 

        /*
        <div className="header">
          <Link style={{ textDecoration: "none" }} href="#" className="logo">
            <img src="./images/logo.png" alt="" />
          </Link>
          <div className="bx bx-menu" id="menu-icon"></div>

          <ul style={{ "list-style-type": "none" }} className="navbar">
            <li>
              <Link style={{ textDecoration: "none" }} href="index.html">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} href="#ride">
                My Reservation
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} href="#services">
                My Cars
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} href="about.html">
                About
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} href="#reviews">
                Contact
              </Link>
            </li>
          </ul>
          <div className="header-btn1">
            <button
              className="sign-in"
              onClick={() => {
                localStorage.clear();
                dispatch(setToken(""));
                //       Appcontext.setToken("");
                history.push("/login");
              }}
            >
              Logout
            </button>
          </div>
        </div>
        */ 