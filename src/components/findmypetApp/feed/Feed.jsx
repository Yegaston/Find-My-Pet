import React, { Component } from 'react'
import ReactTimeAgo from 'react-time-ago'

export default class Feed extends Component {
    constructor(props) {
        super(props);

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
                    </div>
                    <div className="card-footer text-muted text-center">{<ReactTimeAgo date={this.props.date}/>}</div>
                </div>

            </div>
        )
    }
}

