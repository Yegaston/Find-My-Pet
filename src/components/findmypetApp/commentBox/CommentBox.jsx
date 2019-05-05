import React, { Component } from 'react'

export default class CommentBox extends Component {
  constructor(props){
    super(props);


  }
  render() {
    return (
      <div>
        <form>
          <i className="fas fa-times-circle mr-auto" onClick={this.props.commentSee}></i>
          <div className="form-group purple-border">
            <label htmlFor="textPetLost"></label>
            <textarea className="form-control" name="text" rows="3" placeholder="Description"></textarea>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn peach-gradient btn-lg">COMMENT!</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
