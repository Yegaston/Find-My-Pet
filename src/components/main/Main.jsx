// Imports of dependecys
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Componets imports

import Header from '../header/Header';
import Features from '../features/Features';
import LoginComponent from '../login/Login'
import RegisterForm from '../register-form/RegisterForm';
import Footer from '../footer/Footer.jsx';
import { auth } from 'firebase';

function Navbar() {
    return (
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
            <a className="navbar-brand" href="/">Find My Pet</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link">Home
                                <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to='/login' className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to='/register' className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function Navigation() {
    return (
        <Router>
            <div>
                <Navbar />
            </div>
            <Route path="/" exact component={Index} />
            <Route path="/login/" component={Login} />
            <Route path="/register/" component={RegisterForm} />
        </Router>
    )
}

class Index extends Component {
    constructor() {
        super()
        this.state = {
            authenticated: '',
            loading: '',
            userEmail: '',
        }
        this.isAuthThisUser = this.isAuthThisUser.bind(this)


    }
    isAuthThisUser() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loading: false, authenticated: true, userEmail: user.email });
                console.log("Auth");
                
            } else {
                this.setState({ loading: false, authenticated: false });
                console.log("No Auth");
            }
        });
    }

    componentWillMount() {
        console.log("Add")
        this.isAuthThisUser();
    }

    render() {
        return (
            <div>
                <Header />
                <Features />
                {this.state.authenticated ? <div>{this.state.userEmail}</div> : <RegisterForm />}
                <div className="mt-5">
                    <Footer />
                </div>
            </div>
        )
    }
}

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            testing: "Hola"
        }

        this.updateTesting = this.updateTesting.bind(this)
    }

    updateTesting(newText) {
        console.log(this.state.testing + " From Parent")
        console.log(newText)
        this.setState({
            testing: newText
        });
        console.log(this.state.testing + " From Parent")
    }
    render() {
        return (
            <div>
                <LoginComponent updateTesting={this.updateTesting} testingText={this.state.testing} />
            </div>
        )

    }
}

export default class Main extends Component {

    render() {
        return (
            <Navigation />
        )
    }
}
