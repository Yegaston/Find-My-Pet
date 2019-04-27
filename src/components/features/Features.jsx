import React, { Component } from 'react'

export default class Features extends Component {
    render() {
        return (
            <div className="container">
                <div className=" row d-flex justify-content-between text-center mt-5">
                    <div className="col-md-3">
                        <h4 className="p-3">Find My Pet</h4>
                        <i className="fas fa-paw fa-8x"></i>
                        <p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, minus?</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="p-3">Published founded pets</h4>
                        <i className="fas fa-search-location fa-7x"></i>
                        <p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, minima.</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="p-3">Adopt a pet :)</h4>
                        <i className="fas fa-hand-holding-heart fa-8x"></i>
                        <p className="p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, dolorum.</p>
                    </div>
                </div>
            </div>
        )
    }
}
