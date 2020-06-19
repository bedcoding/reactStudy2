import React, { Component } from 'react';
import { increment, decrement } from '../actions';  // increment와 decrement라는 action을 import (정확히는 action 객체를 리턴하는 함수)
import { connect } from 'react-redux';  // react-redux 추가

class Button extends Component {

    render() {

        // 이벤트 핸들러를 등록합니다.
        return (
            <div>
                <button onClick={this.props.onIncrement}> + </button>
                <button onClick={this.props.onDecrement}> - </button>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),  // increment action을 dispatch(전달)
        onDecrement: () => dispatch(decrement())   // decrement action을 dispatch(전달)
    }
}

Button = connect(undefined, mapDispatchToProps)(Button);  // props를 store의 state에 매칭시켜주는 connect 함수를 실행

export default Button;