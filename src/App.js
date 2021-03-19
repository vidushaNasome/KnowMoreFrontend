import logo from './logo.svg';
import './App.css';
import Page from "./Example/Page";
import Page1 from "./Example/Page1";

import Page2 from "./Page2";

import 'bootstrap/dist/css/bootstrap.min.css';
//import PrimarySearchAppBar from "./navigation/PrimarySearchAppBar";
import Footer from "./navigation/Footer";
import React from "react";
import FirstPage from "./FirstPage";
import NotloggenInPage from "./NotloggenInPage";


function App() {
  return (
    <div className="App">
        <FirstPage/>
        <NotloggenInPage/>
    </div>
  );
}

export default App;
