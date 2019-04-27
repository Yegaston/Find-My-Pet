import React, { Component } from 'react';

import userCollection from '../../services/db-user'


export default class RegisterForm extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      country: '',
      postalcode: '',
      state: '',
      address: '',
      phone: '',
      password: '',
      confirmPassword: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.formHandler = this.formHandler.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  async formHandler(e) {
    e.preventDefault();
    console.log("Reacciono!.");
    try {
      await userCollection.doc(this.state.email).set({
        name: this.state.name,
        country: this.state.country,
        postalcode: this.state.postalcode,
        state: this.state.state,
        address: this.state.address,
        phone: this.state.phone
      })
      console.log("Document Write");
    }
    catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="card-header info-color white-text text-center py-4 orange lighten-1">
              <strong>Registrese :)</strong>
            </div>
            <form onSubmit={this.formHandler}>
              <div className="card-body px-lg-5 pt-0">
                <div className="form-row">
                  <div className="col">
                    <div className="md-form">
                      <input type="text" name="name" className="form-control" onChange={this.handleChange} />
                      <label htmlFor="name">Name</label>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="md-form">
                      <input type="email" name="email" className="form-control" onChange={this.handleChange} />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="md-form">
                      <input type="text" name="password" className="form-control" onChange={this.handleChange} />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form">
                      <input type="text" name="confirmPassword" className="form-control" onChange={this.handleChange} />
                      <label htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="md-form">
                      <input type="text" name="country" className="form-control" onChange={this.handleChange} />
                      <label htmlFor="country">Country</label>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-4">
                    <div className="md-form">
                      <input type="text" name="postalcode" className="form-control" onChange={this.handleChange} />
                      <label htmlFor="postalcode">Postal Code</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="md-form">
                      <input type="text" name="state" className="form-control" onChange={this.handleChange} />
                      <label htmlFor="state">State</label>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="md-form">
                      <input type="text" name="address" className="form-control" onChange={this.handleChange} />
                      <label htmlFor="address">Address</label>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="md-form">
                      <input type="text" name="phone" className="form-control" onChange={this.handleChange} />
                      <label htmlFor="phone">Phone Numbre</label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Register</button>
                <p>or sign up with:</p>
                <p>By clicking <em>Sign up</em> you agree to our <a href="/" target="_blank">terms of service</a></p>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
}
