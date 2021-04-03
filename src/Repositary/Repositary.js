import React, {Component} from 'react';
import './student.css';

class Repositary extends Component {
    render() {
        return (
            <div><br/><br/><br/><br/>
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
        );
    }
}

export default Repositary;
