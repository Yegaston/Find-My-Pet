import React, { Component } from 'react'
import dbLostPets from '../../../services/db-lostPets';

import Comment from '../comment/Comment';
import Loading from '../../loading/Loading'

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      comments: [],
      loading: true,
      cantComments: 5

    }

    this.handleChange = this.handleChange.bind(this)
    this.sendComment = this.sendComment.bind(this)
    this.getComments = this.getComments.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  async sendComment(e) {
    e.preventDefault();
    try {
      await dbLostPets.doc(this.props.id)
        .collection('comments').add({
          date: new Date().getTime(),
          text: this.state.text,
          author: this.props.email
        })
      this.props.successToast("Comment Added!")
    }
    catch (err) {
      console.log(err)
    }
    this.getComments();
  }

  async getComments() {
    try {
      const docs = await dbLostPets.doc(this.props.id)
        .collection('comments').get();
      const list = [];


      docs.forEach(doc => {
        const el = {
          author: doc.data().author,
          date: doc.data().date,
          text: doc.data().text,
          id: doc.id
        }
        list.push(el)
      });

      this.setState({
        loading: false,
        comments: list,
      })

    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getComments();
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

              <hr />

              {this.state.loading ? <Loading /> :
                <div>
                  {this.state.comments.slice(0, this.state.cantComments).map((comment) => {
                    return (
                      <div key={comment.id} className="comment">
                        <Comment
                          author={comment.author}
                          text={comment.text}
                          date={comment.date}
                          id={comment.id}
                        />
                      </div>
                    )
                  })}
                </div>
              }

            </div>
          </div>
        </form>
      </div>
    )
  }
}
