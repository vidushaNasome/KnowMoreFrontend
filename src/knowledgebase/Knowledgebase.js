import React, {Component} from 'react';
import Search from "./search/Search";
import OtherKnow from "./otherknow/OtherKnow";
import "./style_know.css";
import KnowledgeBaseTmp from "./knowledge/KnowledgeBaseTmp";

class Knowledgebase extends Component {
    render() {
        return (
            <div>
                <br/>
                <h5 align="center">My Knowledge Base</h5>
                <div className="rowC">
                <KnowledgeBaseTmp/>
                <Search/>
                <OtherKnow/>
                </div>

            </div>
        );
    }
}

export default Knowledgebase;
