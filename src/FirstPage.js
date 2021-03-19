import React, {Component} from 'react';
import Footer from "./navigation/Footer";
import NavigationBar from "./navigation/NavigationBar";
import MainPage from "./components/MainPage";
//import PrimarySearchAppBar from "./navigation/PrimarySearchAppBar";

class FirstPage extends Component {
    render() {
        return (
            <div>
              <NavigationBar/>

              <MainPage/>


              <br/><br/>
              <Footer/>
            </div>
        );
    }
}

export default FirstPage;
