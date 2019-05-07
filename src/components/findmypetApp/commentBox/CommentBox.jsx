import React, { Component } from 'react'

import dbLostPets from '../../../services/db-lostPets';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.sendComment = this.sendComment.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  sendComment(e) {
    e.preventDefault();
    console.log(this.state.text);
    try {
      dbLostPets.doc(this.props.id)
        .collection('comments').add({
          date: new Date().getTime(),
          text: this.state.text,
          author: this.props.email
        })
        this.props.successToast("Comment Added!")
    }
    catch(err){
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendComment}>
          <i className="fas fa-times-circle mr-auto" onClick={this.props.commentSee}></i>
          <div className="form-group purple-border">
            <label htmlFor="textPetLost"></label>
            <textarea className="form-control" name="text" rows="3" placeholder="Description" onChange={this.handleChange}></textarea>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn peach-gradient btn-lg">COMMENT!</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
