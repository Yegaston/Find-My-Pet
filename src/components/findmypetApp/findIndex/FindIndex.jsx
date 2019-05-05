import React, { Component } from 'react'
import { ToastsContainer, ToastsStore } from 'react-toasts';

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
    this.successToast = this.successToast.bind(this);
  }


  revealPetForm() {
    this.setState({ uploadPet: !this.state.uploadPet });
  }

  successToast(msg) {
    ToastsStore.success(msg)
  }

  async getLostPets() {
    const lostPets = await bdLostPets.get()
    const list = [];
    lostPets.forEach((lostPet) => {
      const lost = {
        title: lostPet.data().title,
        text: lostPet.data().text,
        imageUrl: lostPet.data().imageUrl,
        author: lostPet.data().author,
        id: lostPet.id,
        date: lostPet.data().date,
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
              {this.state.uploadPet ? <UploadLost email={this.props.email} revealPetForm={this.revealPetForm} getLostPets={this.getLostPets} successToast={this.successToast} /> : <div></div>}
            </div>
          </div>

          <div>
            {this.state.lostPets.map((lostPet) => {
              return <Feed key={lostPet.id} title={lostPet.title} imageUrl={lostPet.imageUrl} text={lostPet.text} author={lostPet.author} date={lostPet.date} id={lostPet.id} formateDate={this.formateDate} email={this.props.email}/>
            })}

          </div>

        </div>
        <ToastsContainer store={ToastsStore} />
      </div>
    )
  }
}
