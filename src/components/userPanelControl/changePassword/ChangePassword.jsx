import React, { Component } from 'react'
import firebase from 'firebase'

import LateralBar from '../lateralBar/LateralBar';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      oldPass: '',
      newPass: '',
      newPassConfirm: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.ChangePasswordMethod = this.ChangePasswordMethod.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  async ChangePasswordMethod(e) {
    e.preventDefault()
    const auth = firebase.auth();
    const user = auth.currentUser;
    if (this.state.newPass === this.state.newPassConfirm) {
      console.log("Procedo a hacer la operacion de cambio");

      try {
        // await auth.createUserWithEmailAndPassword(this.props.email, this.state.oldPass)

        await user.updatePassword(this.state.newPass);
        console.log("Password Changed")

      }
      catch (err) {
        console.log(err)
      }

    } else {
      console.log("Err")
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">

              <h5 className="card-header warning-color white-text text-center py-4">
                <strong>Change Your Password</strong>
              </h5>

              <div className="card-body">
                <div className="md-form">
                  <input type="text" name="oldPass" className="form-control" onChange={this.handleChange} />
                  <label htmlFor="oldPass">Change Password</label>
                </div>

                <div className="md-form">
                  <input type="text" name="newPass" className="form-control" onChange={this.handleChange} />
                  <label htmlFor="oldPass">New Password</label>
                </div>

                <div className="md-form">
                  <input type="text" name="newPassConfirm" className="form-control" onChange={this.handleChange} />
                  <label htmlFor="oldPassConfirm">Confirm New Password</label>
                </div>

                <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" onClick={this.ChangePasswordMethod}>Sign in</button>

              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}
