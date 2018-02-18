import React, { Component } from 'react';

class Label extends Component
{
    render()
    {
        return <span className="label">
            <strong>{ this.props.title }</strong>: { this.props.children }
        </span>;
    }
}

export default Label;