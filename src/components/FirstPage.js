import React, {Component} from 'react';
import Footer from "../navigation/Footer";
import NavigationBar from "../navigation/NavigationBar";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Switch from "react-bootstrap/Switch";
import MainPage from "./MainPage";
import Classmates from "../classmates/Classmates";
import Repositary from "../Repositary/Repositary";
import Cluster from "../cluster/Cluster";
import Knowledgebase from "../knowledgebase/Knowledgebase";
import Profile from "../profile/Profile";
import Bookmarks from "../bookmarks/Bookmarks";
//import PrimarySearchAppBar from "./navigation/PrimarySearchAppBar";

class FirstPage extends Component {
    render() {
        return (
            <div>

                <Router>
                    <NavigationBar/>
                    <Switch>
                        <Route  path="/newsfeed" exact  component={MainPage}/>
                        <Route  path="/classmates" exact  component={Classmates}/>
                        <Route  path="/repositary" exact  component={Repositary}/>
                        <Route  path="/cluster" exact  component={Cluster}/>
                        <Route  path="/knowledgebase" exact  component={Knowledgebase}/>
                        <Route  path="/profile" exact  component={Profile}/>
                        <Route  path="/bookmarks" exact  component={Bookmarks}/>
                    </Switch>

                </Router>

            </div>
        );
    }
}

export default FirstPage;
