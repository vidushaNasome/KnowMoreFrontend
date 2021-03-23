import React, {Component} from 'react';
import Switch from "react-bootstrap/Switch";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NavigationBarNotLoggedIn from "../navigation/NavigationBarNotLoggedIn";

class NotloggenInPage extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavigationBarNotLoggedIn/>
                    <Switch>
                        <Route  path="/login"   component={Login}/>
                        <Route  path="/register"   component={Register}/>
                    </Switch>

                </Router>

            </div>
        );
    }
}

export default NotloggenInPage;
