// --------- action ---------
// action의 type을 정의하여 export
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

// [action 함수 3개]
// 1. action은 어떤 변화가 일어나야 할지 알려주는 객체이다.
// 2. type은 action이 무엇을 해야 하는지~ ID와 같은 개념으로 사용됨.
// 3. 이후의 필드는 개발자가 임의로 추가할 수 있다 -> setDiff에는 diff라는 필드가 추가되어 있다 -> 나중에 reducer에서 diff를 store에 저장한다.
export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

// 어떤 값을 더할 것인지(혹은 뺄 것인지) diff에 저장 -> 나중에는 reducer에 의해 store에 저장됨
export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value
    };
}