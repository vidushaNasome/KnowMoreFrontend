import React from 'react';
import {Nav,NavItem,Navbar,NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import userimg from "../Images/user.png"
import logo from "../Images/logo.png";



function NavigationBar() {

    return(
        <div >
            <br/>

                <Nav className="fixed-top" id="navd">
                    <img src={logo} className="mr-3" alt=""/>
                    <Link to="/newsfeed" id="nn" style={{  textDecoration: 'none' }}>Newsfeed</Link>
                    <Link to="/classmates" id="nn" style={{  textDecoration: 'none' }}>Classmates</Link>
                    <Link to="/repositary" id="nn" style={{  textDecoration: 'none' }}>Repositary</Link>
                    <Link to="/cluster" id="nn" style={{  textDecoration: 'none' }}>Cluster</Link>
                    <Link to="/knowledgebase" id="nn" style={{  textDecoration: 'none' }}>KnowledgeBase</Link>
                    <Link to="/bookmarks" id="nn" style={{  textDecoration: 'none' }}>Bookmarks</Link>


                    {sessionStorage.getItem("Username") === null?
                        <div>
                        </div>
                        :<div id="logged1">
                            <img src={userimg}  alt="" height="20" width="20"/>
                            <Link to="/profile" id="nn" style={{  textDecoration: 'none' }}> <h6>{sessionStorage.getItem("Username")}</h6></Link>
                        </div>}

                </Nav>






        </div>


    );
}
function onClickMethod(){
    sessionStorage.clear();
    window.location.reload();

}
export default NavigationBar;
