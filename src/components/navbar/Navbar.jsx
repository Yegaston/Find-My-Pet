import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
                    <a className="navbar-brand" href="/">Find My Pet</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                        aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
