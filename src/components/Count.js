import React, { Component } from 'react';
import { connect } from 'react-redux';  // ***** react-redux 추가

class Counter extends Component {
    render() {
        return (
            // [1] counter의 state 구조는 다음과 같다.
            // { counter: { value: 0, diff: 1 } }
            
            // [2] react-redux를 사용하면 store을 통해 state를 가져올 필요 없이 props.value로 store 값을 가져올 수 있게 됨 
            // 이것이 가능한 이유는 밑에 있는 connect 메소드 덕분

            <div>
                {/* <h1>Value : {this.props.store.getState().counter.value}</h1> */}
                <h1>Value : {this.props.value}</h1>
            </div>
        );
    }
}

// ***** [react-redux 추가]
// store의 state를 props로 매핑해주는 부분
let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    }
}

Counter = connect(mapStateToProps)(Counter);

/*
[참고1] connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
1. connect는 react-redux의 API 입니다. 이 함수는 컴포넌트를 store에 연결해 줍니다.
2. connect 함수는 특정 컴포넌트 클래스의 props를 store에 연결시켜주는 함수를 리턴합니다. 
3. 리턴된 함수에 컴포넌트를 인수로 넣어주면 기존 컴포넌트가 수정되는 것이 아니라 새로운 컴포넌트를 리턴합니다.

[참고2] connect의 parameter
1. mapStateToProps(state, [ownProps])
   store의 state를 컴포넌트의 props에 매핑시킵니다. 
   ownProps라는 인자가 명시될 경우 이를 통해 함수 내부에서 컴포넌트의 props 값에 접근할 수 있습니다. (인자: "함수(인자1, 인자2)" 형태임)
   즉, store.state를 props로 접근할 수 있도록 합니다.

2. mapDispatchToPRops(dispatch, [ownProps])
   컴포넌트의 함수형 props를 실행 했을 때, 개발자가 지정한 action을 dispatch(보내기) 하도록 설정합니다. 
   ownProps는 동일 합니다. 즉, props._function_을 통해 action을 dispatch(보내기) 할 수 있도록 합니다.
*/


export default Counter;