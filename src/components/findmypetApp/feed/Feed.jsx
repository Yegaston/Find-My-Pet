import React, { Component } from 'react'

export default class Feed extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }
    render() {
        return (
            <div className="row d-flex justify-content-center mt-5">
                <div className="card card-cascade col-md-6 ">

                    <div className="view view-cascade overlay p-1">
                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap" />
                        <a>
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div className="card-body card-body-cascade text-center">
                        <h4 className="card-title"><strong>{this.props.title}</strong></h4>
                        <h6 className="font-weight-bold indigo-text py-2">{this.props.author}</h6>
                        <p className="card-text">{this.props.text}</p>
                    </div>
                    <div className="card-footer text-muted text-center">Hace 2 horas</div>
                </div>
            </div>
        )
    }
}

