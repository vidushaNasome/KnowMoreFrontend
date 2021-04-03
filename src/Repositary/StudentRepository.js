import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './student.css';

class StudentRepository extends Component {
    render() {
        return (
            <div>
                <div><br/><br/><br/><br/>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <Link to={"/repositary"} className="btn btn-secondary btn-block">Student</Link>
                        <Link to={"/"} className="btn btn-secondary btn-block">Teacher</Link>
                        <Link to={"/"} className="btn btn-secondary btn-block">School/Institute</Link>
                    </div>
                    <br/>
                    <div id="student">
                        <h4 className="text-center text-secondary">Student</h4>
                        <form>
                            <h6 className="text-left text-danger">Created Clusters</h6>
                            <div className="form-group text-left">
                                <label>Cluster Name</label>
                                <button type="submit" className="btn btn-primary">Add Topics</button>
                            </div>
                            <div className="form-group text-left">
                                <label>Topics</label>
                                -><label>Topic1</label>
                                <button type="submit" className="btn btn-primary">Add Sessions</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default StudentRepository;