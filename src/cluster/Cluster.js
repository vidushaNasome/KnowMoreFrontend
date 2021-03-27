import React, {Component} from 'react';
import "./style.css";
import Comments from "./comments/Comments";
import VideoCluster from "./Video/VideoCluster";
import Other from "./Other/Other";

class Cluster extends Component {
    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <h5 align="center">My Cluster</h5>
                <div className="rowC">
                    <VideoCluster/>
                    <Comments/>
                    <Other/>
                </div>

            </div>
        );
    }
}

export default Cluster;
