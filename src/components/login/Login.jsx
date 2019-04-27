import React, { Component } from 'react'



export default class Login extends Component {
    render() {
        return (
            <div>
                <form className="text-center border border-light p-5">
                    <p className="h4 mb-4">Sign in</p>
                    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />
                    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
                    <div className="d-flex justify-content-around">
                        <div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <a href="/">Forgot password?</a>
                        </div>
                    </div>
                    <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
                    <p>Not a member?<a href="/">Register</a></p>
                    <p>or sign in with:</p>
                        <i className="fab fa-facebook-f mx-5 fa-3x"></i>
                        <i className="fab fa-twitter mx-5 fa-3x"></i>
                        <i className="fab fa-linkedin-in mx-5 fa-3x"></i>
                        <i className="fab fa-github mx-5 fa-3x"></i>
                </form>
            </div >
        )
    }
}
