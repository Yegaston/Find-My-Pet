import React, { Component } from 'react';
import db from '../../../services/db-user';


export default class UserMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: this.props.email,
            user: {}
        }
    }

    async getUserData() {
        try {
            const user = await db.doc(this.state.email).get()
            this.setState({
                user: user.data()
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
                <UserAvatar email={this.state.email} user={this.state.user}  />
            </div>
        )
    }
}

function UserAvatar(props) {
    return (
        <div className="container">
            <div className="row mt-5">
            <div className="col-md-2">
                <h2>Lateral Bar</h2>
            </div>
                <div className="col-md-4 ">
                    <img className="img-fluid" src="https://avatars0.githubusercontent.com/u/39235181?s=460&v=4" alt="Profile ge" />
                </div>
                <div className="div col-md-4">
                    <h4>{props.user.name}</h4>
                    <h5 className="subname">{props.email}</h5>
                    <h5 className="subname">{props.user.state}</h5>
                    <h5 className="subname">Postal Code: {props.user.postalcode}</h5>
                </div>
            </div>
        </div>
    )
}