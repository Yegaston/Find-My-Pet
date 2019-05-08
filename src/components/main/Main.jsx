// Imports of dependecys
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { auth } from 'firebase';
import { ToastsContainer, ToastsStore } from 'react-toasts';
// Componets imports

import Header from '../header/Header';
import Features from '../features/Features';
import LoginComponent from '../login/Login'
import RegisterForm from '../register-form/RegisterForm';
import Footer from '../footer/Footer.jsx';
import UserMain from '../userPanelControl/UserMain/UserMain';
import FindIndex from '../findmypetApp/findIndex/FindIndex';
import LostFavs from '../findmypetApp/lostFavs/lostFavs';
import Loading from '../loading/Loading';

function ItemsNavWhenNoAuth() {
    return (
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
    )
}

function ItemsNavWhenAuth(props) {
    return (
        <div className="collapse navbar-collapse " id="navbarSupportedContent-555">
            <ul className="navbar-nav ml-auto ml-5">
                <li className="nav-item">
                    <Link to='/' className="nav-link">Feed</Link>
                </li>
                <li className="nav-item">
                    <Link to='/lostFavs' className="nav-link">Losts Pets</Link>
                </li>
                <li className="nav-item dropdown">
                    <i className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Account Settings</i>
                    <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <Link to='/userSettings' className="dropdown-item">Account</Link>
                        <button className="dropdown-item" onClick={props.signOut}>Sign Out</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authenticated: ''
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

    componentDidMount() {
        this.isAuthThisUser();
    }

    render() {
        return (
            <nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
                <a className="navbar-brand" href="/">Find My Pet</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                    aria-controls="navbarSupportedContent-555" aria-expanded="false" arial-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {this.state.authenticated ? <ItemsNavWhenAuth signOut={this.props.signOut} /> : <ItemsNavWhenNoAuth />}
            </nav>
        )
    }
}

function Navigation(props) {
    return (
        <Router>
            <div>
                <Navbar signOut={props.signOut} />
            </div>
            <Route path="/" exact component={Index} />
            <Route path="/login/" component={Login} />
            <Route path="/register/" component={RegisterForm} />
            <Route path="/lostFavs/" component={LostFavs} />
            <Route path="/userSettings/" component={UserMain} />
        </Router>
    )
}

function LandingPage(props) {
    return (
        <div>
            <Header />
            <Features />
            <div className="mt-5">
                <RegisterForm successToast={props.successToast} />
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </div>
    )
}



class Index extends Component {
    constructor() {
        super()
        this.state = {
            authenticated: '',
            loading: true,
            userEmail: '',
        }
        this.isAuthThisUser = this.isAuthThisUser.bind(this);
        this.successToast = this.successToast.bind(this);


    }

    successToast(msg) {
        ToastsStore.success(msg)
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
                {this.state.loading ? <Loading /> : this.state.authenticated ? <FindIndex email={this.state.userEmail} /> : <LandingPage successToast={this.successToast} />}
                <ToastsContainer store={ToastsStore} />
            </div>
        )
    }
}

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }


    }


    render() {
        return (
            <div>
                <LoginComponent />
            </div>
        )

    }
}

export default class Main extends Component {
    constructor() {
        super()
        this.signOut = this.signOut.bind(this)
    }

    async signOut() {
        try {
            await auth().signOut()
            console.log("Out")
        } catch (err) {
            console.log("Error")
        }
    }
    render() {
        return (
            <Navigation signOut={this.signOut} />
        )
    }
}
