import React from 'react';
import {Nav,NavItem,Navbar,NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './style_nav.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/logo.png";
function NavigationBarNotLoggedIn() {

    return(
        <div >
            <br/>
                    <Nav className="fixed-top" id="navd">
                    <img src={logo} className="mr-3" alt=""/>
                    <Link to="/login" id="nn" style={{  textDecoration: 'none' }}>Login</Link>
                    <Link to="/register" id="nn" style={{  textDecoration: 'none' }}>Register</Link>

                </Nav>






        </div>


    );
}
export default NavigationBarNotLoggedIn;
