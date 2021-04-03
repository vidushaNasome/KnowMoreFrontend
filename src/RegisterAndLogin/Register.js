import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary">Student</button>
                    <button type="button" className="btn btn-secondary">Teacher</button>
                    <button type="button" className="btn btn-secondary">School/Institute</button>
                </div>
            </div>
        );
    }
}

export default Register;