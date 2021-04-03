import React, {Component} from 'react';
import "../style_know.css";
import {Card,Button} from "react-bootstrap";

class Search extends Component {
    render() {
        return (
            <div className="search">
                <form className="navbar-form" role="search">
                    <div className="input-group add-on">
                        <input className="form-control" placeholder="Search through Internet" type="text"/>
                        <Button variant="primary"><img src="https://img.icons8.com/material/24/000000/search--v1.png"/></Button>
                    </div>
                </form>
                <br/>
                <Card style={{ width: '24rem' }}>
                    <Card.Body>
                        <Card.Title>My Knowledgebase</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
                <br/>
                <Card style={{ width: '24rem' }}>
                    <Card.Body>
                        <Card.Title>My Knowledgebase</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Search;
