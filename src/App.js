import logo from './logo.svg';
import './App.css';
import Page from "./Example/Page";
import Page1 from "./Example/Page1";

import Page2 from "./Page2";

import 'bootstrap/dist/css/bootstrap.min.css';
//import PrimarySearchAppBar from "./navigation/PrimarySearchAppBar";
import Footer from "./navigation/Footer";
import React from "react";
import LogginCheckPage from "./LogginCheckPage";
import "./App.css";
import "./background.css";


function App() {
  return (
    <div className="background">
        <LogginCheckPage/>
        <br/>
        <br/>
        {/*<Footer/>*/}

    </div>
  );
}

export default App;
