import React, { Component } from 'react'

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
                        <p>5 min ago</p>
                    </div>
                </div>
                <div>
                    <p>{this.props.text}</p>
                </div>
                <hr />
            </div>
        )
    }
}
