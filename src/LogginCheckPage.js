import React, {Component} from 'react';
import FirstPage from "./components/FirstPage";
import NotloggenInPage from "./RegisterAndLogin/NotloggenInPage";


class LogginCheckPage extends Component {
    render() {
        return (
            <div>
                {sessionStorage.getItem("Username") !== null?
                    <div>
                        <FirstPage/>
                    </div>
                    :<div>
                        <NotloggenInPage/>
                    </div>}




            </div>
        );
    }
}

export default LogginCheckPage;
