import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import PrimarySearchAppBar from "./navigation/PrimarySearchAppBar";
import Footer from "./navigation/Footer";
import React from "react";
import FirstPage from "./components/FirstPage";
import NotloggenInPage from "./RegisterAndLogin/NotloggenInPage";
import LogginCheckPage from "./LogginCheckPage";

function App() {
  return (
    <div className="App">
        <LogginCheckPage/>
        <br/><br/>
        <Footer/>
    </div>
  );
}

export default App;
