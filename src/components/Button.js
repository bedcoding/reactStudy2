import React, { Component } from 'react';
import { increment, decrement } from '../actions';  // increment와 decrement라는 action을 import (정확히는 action 객체를 리턴하는 함수)

class Button extends Component {
    constructor(props) {
        super(props);

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    // + 버튼을 클릭 했을 때 실행되는 이벤트 핸들러
    onIncrement(event) {
        this.props.store.dispatch(increment())  // 이 이벤트 핸들러는 increment라는 action을 dispatch 합니다.
    }

    // - 버튼을 클릭 했을 때 실행되는 이벤트 핸들러
    onDecrement(event) {
        this.props.store.dispatch(decrement())  // 이 이벤트 핸들러는 decrement라는 action을 dispatch 합니다.
    }

    render() {

        // 이벤트 핸들러를 등록합니다.
        return (
            <div>
                <button onClick={this.onIncrement}> + </button>
                <button onClick={this.onDecrement}> - </button>
            </div>
        );
    }
}

export default Button;