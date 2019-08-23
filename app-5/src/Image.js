import React, { Component } from 'react';

export default class Image extends Component {
    render() {
        return (
            <div>
                <img alt="jordan crying meme" src={this.props.url} />
                <caption>911 CRYING</caption>
            </div>
        )
    }
}