import React, { Component } from 'react';

class Box extends Component
{
    render()
    {
        return <section className="box">
            <header>
                <h1>{ this.props.title }</h1>
            </header>
            { this.props.children }
            <footer>
                { this.props.footer }
            </footer>
        </section>;
    }
}

export default Box;