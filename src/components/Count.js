import React, { Component } from 'react';
class Counter extends Component {

    // 부모로부터 전달받은 value 출력
    render() {
        return (
            <div> 
                <h1> Value : {this.props.value} </h1> 
            </div>
        );
    }
}

export default Counter