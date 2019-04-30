import React, { Component } from 'react'
import { auth } from 'firebase';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            user: ''
        }
        this.inputsHandler = this.inputsHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
        this.isAuthThisUser = this.isAuthThisUser.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    inputsHandler(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    async loginHandler(e) {
        e.preventDefault()

        try {
            await auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            console.log("Login");
        }
        catch (err) {
            console.log(err);
        }
    }

    async signOut() {
        try {
            await auth().signOut()
            console.log("Out")
        } catch (err) {
            console.log("Error")
        }
    }

    isAuthThisUser() {
        const user = auth().currentUser
        if (user) {
            console.log("auth")
        } else {
            console.log("no auth")
        }
    }

    componentWillMount() {

    }

    componentDidUpdate() {
        // console.log("Updating")
    }

    render() {
        return (
            <div>
                <form className="text-center border border-light p-5" >
                    <p className="h4 mb-4">Sign in</p>
                    <input type="email" name="email" className="form-control mb-4" placeholder="E-mail" onChange={this.inputsHandler} />
                    <input type="password" name="password" className="form-control mb-4" placeholder="Password" onChange={this.inputsHandler} />
                    <div className="d-flex justify-content-around">
                        <div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                                <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
                            </div>
                        </div>
                        <div>
                            <a href="/">Forgot password?</a>
                        </div>
                    </div>
                    <button className="btn btn-info btn-block my-4" type="submit" onClick={this.loginHandler}>Sign in</button>
                    <p>Not a member?<a href="/">Register</a></p>
                    <p>or sign in with:</p>
                    <i className="fab fa-facebook-f mx-5 fa-3x"></i>
                    <i className="fab fa-twitter mx-5 fa-3x"></i>
                    <i className="fab fa-linkedin-in mx-5 fa-3x"></i>
                    <i className="fab fa-github mx-5 fa-3x"></i>
                </form>

                <button onClick={this.isAuthThisUser}>Is Auth The User??</button>
                <button onClick={this.signOut}>SignOut</button>
            </div >
        )
    }
}
