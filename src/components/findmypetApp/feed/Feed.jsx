import React, { Component } from 'react'
import ReactTimeAgo from 'react-time-ago'

export default class Feed extends Component {
    constructor(props) { super(props) }
    render() {
        return (
            <div>
                <CardFeed
                    imageUrl={this.props.imageUrl}
                    title={this.props.title}
                    author={this.props.author}
                    text={this.props.text}
                    date={this.props.date}
                />
            </div>
        )
    }
}

function CardFeed(props) {
    return (
        <div className="row d-flex justify-content-center mt-5">
            <div className="card card-cascade col-md-6 ">

                <div className="view view-cascade overlay p-1">
                    <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="card-body card-body-cascade text-center">
                    <h4 className="card-title"><strong>{props.title}</strong></h4>
                    <h6 className="font-weight-bold indigo-text py-2">{props.author}</h6>
                    <p className="card-text">{props.text}</p>
                </div>
                <div className="card-footer text-muted text-center"><ReactTimeAgo date={props.date} /></div>
            </div>
        </div>
    )
}