import React, { Component } from 'react';
import { setDiff } from '../actions';  // setDiff라는 action을 import 한다.

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
        // 1. store.getState()로 state를 가져온다.
        // 2. counter.diff를 출력
        // 3. 사용자가 값을 입력했을 때 호출되는 이벤트 핸들러를 등록
        return (
            <div>
                <input value={this.props.store.getState().counter.diff} onChange={this.onChange} />
            </div>
        );
    }
}

export default Option;