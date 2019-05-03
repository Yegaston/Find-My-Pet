import React, { Component } from 'react'
import PetPhoto from '../../assets/images/Huella.png'


export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row m-5 align-items-center">
            <div className="col-md-6">
                <img src={PetPhoto} className="img-fluid" alt="Logo de Find My Pet"/>
            </div>
            <div className="col-md-6 ">
                <h4>Find Your Pet </h4>
                <p>We look for your pet. We are built in such a way that we buy the data that our users enter, whether they are lost pets or found, and if any of these coincide with our bookmarks, we put the two parties in contact. Made with Coffe and Love By Gaston Graciani</p>
            </div>
        </div>
      </div>
    )
  }
}
