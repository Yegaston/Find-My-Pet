import React, { Component } from 'react'

import UploadLost from '../uploadLost/UploadLost';
import Feed from '../feed/Feed'
import bdLostPets from '../../../services/db-lostPets';

export default class FindIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadPet: false,
      filter: false,

      lostPets: [],

    }
    this.revealPetForm = this.revealPetForm.bind(this);
    this.getLostPets = this.getLostPets.bind(this)
  }

  revealPetForm() {
    this.setState({ uploadPet: !this.state.uploadPet });
  }

  async getLostPets() {
    const lostPets = await bdLostPets.get()
    const list = [];
    lostPets.forEach((lostPet) => {
      const lost = {
        title: lostPet.data().title,
        text: lostPet.data().text,
        author: lostPet.data().author,
        id: lostPet.id
      }
      list.push(lost)
    })
    this.setState({ lostPets: list });
    console.log(this.state.lostPets)
  }

  componentDidMount() {
    this.getLostPets()
  }

  render() {
    return (
      <div>
        <div className="container">

          <div className="row d-flex justify-content-center mt-5">
            <div className="card col-md-6">
              <h4 className="card-title mt-2 text-center" onClick={this.revealPetForm}>Published Lost Pet</h4>
              {this.state.uploadPet ? <UploadLost email={this.props.email} revealPetForm={this.revealPetForm} getLostPets={this.getLostPets}/> : <div></div>}
            </div>
          </div>

          <div>
            {this.state.lostPets.map((lostPet) => {
              return <Feed title={lostPet.title} text={lostPet.text} author={lostPet.author} id={lostPet.id}/>
            })}
            
          </div>

        </div>
      </div>
    )
  }
}
