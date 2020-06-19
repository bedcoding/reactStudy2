import React, { Component } from 'react';
import { setDiff } from '../actions';   // setDiff라는 action을 import 한다.
import { connect } from 'react-redux';  // ***** react-redux 추가

class Option extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    // 사용자가 값을 입력할 경우 실행되는 이벤트 핸들러. 
    // 1. 이벤트 핸들러: dispatch로 setDiff라는 action을 보내게 된다 (setDiff의 인자는 사용자의 입력값이 된다)
    // 2. dispatch는 reducer로 action을 전달
    // 3. reducer는 store에 state를 저장
    onChange(event) {
        this.props.store.dispatch(setDiff(parseInt(event.target.value)));
    }

    render() {
        // [기존 방식]
        // 1. store.getState()로 state를 가져온다.
        // 2. counter.diff를 출력
        // 3. 사용자가 값을 입력했을 때 호출되는 이벤트 핸들러를 등록

        // [react-redux]로 변경
        // 1. 이벤트 핸들러는 props.onUpdateDiff 함수를 실행시킵니다.
        // 2. onUpdateDiff 함수는 밑에서 정의됩니다.
        return (
            <div>
                {/* <input value={this.props.store.getState().counter.diff} onChange={this.onChange} /> */}
                <input value={this.props.diff} onChange={this.onChange} />
            </div>
        );
    }
}


// store.state를 props로 매핑하는 코드
let mapStateToProps = (state) => {
    return {
        diff: state.counter.diff
    }
}

// props.onUpdateDiff를 실행할 경우 dispatch할 action을 정의하는 코드
let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value))
    };
}

// 위에 있는 mapStateToProps와 아래 있는 mapDispatchToProps에서 작성한 내용을 적용하는 connect 메소드를 호출
Option = connect(mapStateToProps, mapDispatchToProps)(Option);

export default Option;