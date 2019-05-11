import React, { Component } from 'react';
import dbUser from '../../../services/db-user';
import { auth } from 'firebase';

import Loading from '../../loading/Loading';
import ChangePassword from '../changePassword/ChangePassword';

export default class UserMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            user: {},
            loading: true,
            authenticated: false,
            ChangePassword: false,
            Main: true,
        }
        this.isAuthThisUser = this.isAuthThisUser.bind(this);
        this.getUserData = this.getUserData.bind(this);
    }


    isAuthThisUser() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loading: false, authenticated: true, email: user.email });
                console.log("Auth Componen " + this.state.email);

            } else {
                this.setState({ loading: false, authenticated: false });
                console.log("No Auth");
            }
        });
    }


    async getUserData() {
        console.log(this.state.email);
        try {
            const user = await dbUser.doc(this.state.email).get()
            this.setState({
                user: {
                    email: user.id,
                    postalCode: user.data().postalCode,
                    address: user.data().address,
                    country: user.data().country,
                    name: user.data().name,
                    phone: user.data().phone,
                    state: user.data().state,
                }
            });
            console.log("Tengo q aparecer despues")
        }
        catch (err) {
            console.warn(err);
            console.log("Estoy en un error")
        }
    }

    componentDidMount() {
        this.isAuthThisUser();
    }

    render() {
        return (
            <div>
                {this.state.loading ? <Loading /> :
                    <UserAvatar
                        email={this.state.user.email}
                        name={this.state.user.name}
                        postalcode={this.state.user.postalCode}
                        getUserData={this.getUserData}
                        loading={this.state.loading}
                    />}
            </div>
        )
    }
}

class UserAvatar extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getUserData();
    }
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-2">
                        <LateralBar />
                    </div>
                    <Main
                        email={this.props.email}
                        name={this.props.name}
                        postalcode={this.props.postalCode}
                        getUserData={this.props.getUserData}
                        loading={this.props.loading}
                    />
                </div>
            </div>
        )
    }
}


function Main(props) {
    return (
        <div className="row m-2">
            <div className="col-md-4">
                <img className="img-fluid" src="https://avatars0.githubusercontent.com/u/39235181?s=460&v=4" alt="Profile ge" />
            </div>

            <div className="div col-md-6">
                <h4>{props.name}</h4>
                <h5 className="subname">{props.email}</h5>
                <h5 className="subname">Postal Code: {props.postalcode}</h5>
            </div>

        </div>
    )
}



function LateralBar() {
    return (

        <div className="row d-flex justify-content-center mb-5">
            <div>
                <nav className="nav flex-column pink lighten-3 py-4 mb-r font-weight-bold z-depth-1">
                    <p className="nav-link white-text" href="#">Change Password</p>
                    <p className="nav-link white-text" href="#">Change Password</p>
                    <p className="nav-link white-text" href="#">Personal Information</p>
                    <p className="nav-link white-text" href="#">Others</p>
                </nav>
            </div>
        </div>
    )
}