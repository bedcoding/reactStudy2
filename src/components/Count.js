import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            // 참고: counter의 state 구조는 다음과 같다.
            // { counter: { value: 0, diff: 1 } }
            
            <div>
                <h1>Value : {this.props.store.getState().counter.value}</h1>
            </div>
        );
    }
}

export default Counter;