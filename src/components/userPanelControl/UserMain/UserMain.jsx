import React, { Component } from 'react';
import dbUser from '../../../services/db-user';

import Loading from '../../loading/Loading';
import { auth } from 'firebase';

export default class UserMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            user: {},
            loading: true,
            authenticated: false,
        }
        this.isAuthThisUser = this.isAuthThisUser.bind(this);
        this.getUserData = this.getUserData.bind(this);
    }


    isAuthThisUser() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loading: false, authenticated: true, email: user.email });
                console.log("Auth");

            } else {
                this.setState({ loading: false, authenticated: false });
                console.log("No Auth");
            }
        });
    }


    async getUserData() {
        this.isAuthThisUser();
        console.log(this.state.email);
        try {
            const user = await dbUser.doc(this.state.email).get()
            this.setState({
                user: {
                    email: user.data().email,
                    postalCode: user.data().postalCode,
                    address: user.data().address,
                    country: user.data().country,
                    name: user.data().name,
                    phone: user.data().phone,
                    state: user.data().state,
                }
            });
            console.log(this.state.user)
        }
        catch (err) {
            console.warn(err);
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    render() {
        return (
            <div>
                {this.state.loading ? <Loading /> : 
                <UserAvatar
                    email={this.state.user.email}
                    name={this.state.user.name}
                    postalcode={this.state.postalCode}
                />}
            </div>
        )
    }
}

function UserAvatar(props) {
    return (
        <div className="m-3">
            <div className="row mt-5">
                <div className="col-md-2">
                    <h2>Lateral Bar</h2>
                </div>
                <div className="col-md-4 ">
                    <img className="img-fluid" src="https://avatars0.githubusercontent.com/u/39235181?s=460&v=4" alt="Profile ge" />
                </div>
                <div className="div col-md-4">
                    <h4>{props.name}</h4>
                    <h5 className="subname">{props.email}</h5>
                    <h5 className="subname">{props.name}</h5>
                    <h5 className="subname">Postal Code: {props.postalcode}</h5>
                </div>
            </div>
        </div>
    )
}