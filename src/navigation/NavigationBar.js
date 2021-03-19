import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import './navigation.css';
class NavigationBar extends Component {
    render() {
        return (
            <div>

                <Nav variant="pills">
                    <div id="heading">
                        KnowMore
                    </div>
                    <Nav.Item>
                        <Nav.Link href="Home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>ClassMates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Cluster</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>KnowledgeBase</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Repositary
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Notifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Login</Nav.Link>
                    </Nav.Item>
                </Nav>
                
            </div>
        );
    }
}

export default NavigationBar;
