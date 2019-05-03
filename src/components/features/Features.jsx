import React, { Component } from 'react'

export default class Features extends Component {
    render() {
        return (
            <div className="container">
                <div className=" row d-flex justify-content-between text-center mt-5">
                    <div className="col-md-3">
                        <h4 className="p-3">Find My Pet</h4>
                        <i className="fas fa-paw fa-8x"></i>
                        <p className="p-3">If your pet was lost, you can post it in our system. We help you find it</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="p-3">Published founded pets</h4>
                        <i className="fas fa-search-location fa-7x"></i>
                        <p className="p-3">Did you find a pet ?, Publish it in our system, we help you find its owner</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="p-3">Adopt a pet :)</h4>
                        <i className="fas fa-hand-holding-heart fa-8x"></i>
                        <p className="p-3">Unfortunately, many of these little pets that are lost, never find their owner, and those who are giving them home, a long time can not have them. We also want these animals to find a new home</p>
                    </div>
                </div>
            </div>
        )
    }
}
