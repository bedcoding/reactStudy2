import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onIncrement}> + </button>
                <button onClick={this.props.onDecrement}> - </button>
            </div>
        );
    }
} 

export default Button;