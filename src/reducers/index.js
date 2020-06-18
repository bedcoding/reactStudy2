import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';  // action에서 정의한 type들을 import 합니다.
import { combineReducers } from 'redux';  // combineReducers: reducer가 여러개 있다면, 하나로 합쳐주는 메소드입니다.

// state의 초기값 정의
const counterInitialState = {
    value: 0,
    diff: 1
};

// counter의 reducer: default parameter를 이용하여 state가 undefined로 넘어올 경우 초기 state를 설정해 줍니다.
const counter = (state = counterInitialState, action) => {
    switch(action.type) {

        // Redux에서 state는 읽기 전용이여야 합니다.
        // 1. state를 변경시키지 않고,
        // 2. Object.assign 메소드를 통해 state를 복사하여,
        // 3. 복사한 객체를 수정하여 리턴합니다.

        // action 파입에 따라 reducer가 동작하는 부분
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });

        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });

        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });

        default:
            return state;
    }
}

// 작성한 reducer를 하나로 합쳐줌
const counterApp = combineReducers({
    counter,
    // etc,   // 여러개의 reducer가 있다면 이렇게 추가
});


// 만약 reducer에 다른 key를 주고 싶다면 이렇게 사용
// const counterApp = combineReducers({
//     a: counter,
//     b: etc
// });


// reducer를 export 합니다.
export default counterApp;