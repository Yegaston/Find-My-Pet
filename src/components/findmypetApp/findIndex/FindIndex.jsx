import React, { Component } from 'react'

import UploadLost from '../uploadLost/UploadLost';

export default class FindIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadPet: false,
      filter: false,
    }
    this.revealPetForm = this.revealPetForm.bind(this);
  }

  revealPetForm() {
    this.setState({ uploadPet: !this.state.uploadPet });
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="container">

          <div className="row d-flex justify-content-center mt-5">
            <div className="card col-md-6">
              <h4 className="card-title mt-2 text-center" onClick={this.revealPetForm}>Published Lost Pet</h4>
              {this.state.uploadPet ? <UploadLost email={this.props.email} revealPetForm={this.revealPetForm}/> : <div></div>}
            </div>
          </div>

        </div>
      </div>
    )
  }
}
