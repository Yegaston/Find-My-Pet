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
                <h4>Lorem ipsum dolor sit.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellat reprehenderit ullam magnam ipsam id autem vero, deserunt quas beatae aperiam porro aspernatur velit totam optio quod enim quia doloribus, hic voluptas omnis praesentium animi eius. Fugit soluta alias dolor earum harum molestiae atque sit quo magnam, dicta quos!</p>
            </div>
        </div>
      </div>
    )
  }
}
