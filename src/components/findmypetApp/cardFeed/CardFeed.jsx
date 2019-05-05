import React, { Component } from 'react'
import dbUser from '../../../services/db-user'
import ReactTimeAgo from 'react-time-ago'

import CommentBox from '../commentBox/CommentBox'
// Components



export default class CardFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentBox: false,
        }

        this.clickIcon = this.clickIcon.bind(this);
        this.favIcon = this.favIcon.bind(this);
        this.commentSee = this.commentSee.bind(this);
    }

    clickIcon() {
        console.log("Clicking xd")
    }

    async favIcon(e, id) {
        console.log("Fav: " + id);
        try {
            dbUser.doc(this.props.email).update({
                userFavsPets: [{
                    date: new Date().getTime(),
                    id: id
                }]
            })
            console.log("Updated Succesfully")
        }
        catch (err) {
            console.log(err)
        }
    }

    commentSee(){
        this.setState({
            commentBox: !this.state.commentBox
        })
    }

    render() {
        return (
            <div className="row d-flex justify-content-center mt-5">
                <div className="card card-cascade col-md-6 ">

                    <div className="view view-cascade overlay p-1">
                        <img className="card-img-top" src={this.props.imageUrl} alt="Card image cap" />
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div className="card-body card-body-cascade text-center">
                        <h4 className="card-title"><strong>{this.props.title}</strong></h4>
                        <h6 className="font-weight-bold indigo-text py-2">{this.props.author}</h6>
                        <p className="card-text">{this.props.text}</p>
                        <hr />
                        {this.state.commentBox ? 
                            <CommentBox commentSee={this.commentSee} /> : 
                            <Icons 
                                clickIcon={this.clickIcon}
                                favIcon={this.favIcon}
                                id={this.props.id}
                                commentSee={this.commentSee}
                            /> }
                    </div>

                    <div className="card-footer text-muted text-center"><ReactTimeAgo date={this.props.date} /></div>
                </div>
            </div>
        )
    }

}

function Icons(props) {
    return (
        <div className="d-flex justify-content-around p-2">
            <i className="fas fa-heart fa-2x pl-2 pr-2" onClick={e => props.favIcon(e, props.id)}></i>
            <i className="fas fa-hands-helping fa-2x pl-2 pr-2" onClick={props.clickIcon}></i>
            <i className="fas fa-comment fa-2x pl-2 pr-2" onClick={props.commentSee}></i>
        </div>
    )
}