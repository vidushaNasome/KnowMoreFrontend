import React, {Component} from 'react';
import StudentRepository from "./StudentRepository";

class Repositary extends Component {
    render() {
        return (
            <div>
                <br/>
                <h5 align="center">Repository Creation</h5>
                    <StudentRepository/>
            </div>
        );
    }
}

export default Repositary;
