import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" className="navbar-brand p-0">
                    <h1 className="text-primary m-0">React Demo Website</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
                        <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
                    </div>
                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">Book Appointment</a>
                </div>
            </nav>
        </div>
  )
}

export default Navbar
