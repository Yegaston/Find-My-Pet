import React, { Component } from 'react'
import ReactTimeAgo from 'react-time-ago'


export default class Comment extends Component {
    constructor(props){
        super(props);


    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <p>{this.props.author}</p>
                    </div>
                    <div className="col-4">
                        <p><ReactTimeAgo date={this.props.date} /></p>
                    </div>
                </div>
                <div>
                    <p>{this.props.text}</p>
                </div>
                {this.props.email == this.props.author ? <div className="actions d-flex justify-content-around mt-2">
                    <i className="far fa-trash-alt" onClick={e => this.props.deleteComment(this.props.id)}></i>
                    <i className="far fa-edit"></i>
                </div> : <div><i className="far fa-thumbs-up"></i></div>}
                <hr />
            </div>
        )
    }
}
