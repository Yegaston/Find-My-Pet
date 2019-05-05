import React, { Component } from 'react'

import CardFeed from '../cardFeed/CardFeed'


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
                    id={this.props.id}
                    email={this.props.email}
                />
            </div>
        )
    }
}

