import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div id="login">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody className="mx-4">
                                <div className="text-center">
                                    <h3 className="dark-grey-text mb-5">
                                        <strong>Log in</strong>
                                    </h3>
                                </div>
                                <MDBInput
                                    group
                                    hint="User Name"
                                    type="username"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    hint="Password"
                                    group
                                    type="password"
                                    validate
                                    containerClass="mb-0"
                                />
                                <p className="font-small blue-text d-flex justify-content-end pb-3">
                                    Forgot
                                    <a href="#!" className="blue-text ml-1">
                                        Password?
                                    </a>
                                </p>
                                <div className="text-center mb-3">
                                    <MDBBtn
                                        type="button"
                                        color="primary"
                                        rounded
                                        className="btn-block z-depth-1a"
                                    >
                                        Log in
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Not a member?
                                    <a href="#!" className="blue-text ml-1">

                                        Register
                                    </a>
                                </p>
                            </MDBModalFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </div>
        );
    }
}

export default Login;
