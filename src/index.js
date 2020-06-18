import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 추가
import { createStore } from 'redux';  // createStore
import counterApp from './reducers';  // reducer인 counterApp을 import 합니다.

const store = createStore(counterApp);  // store을 만드는 방법입니다. (createStore 메소드를 이용하면 되는데, createStore의 인자로 reducer를 전달해 줘야 합니다)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

// store.subscribe(LISTENER) 형태입니다.
// dispatch 메소드가 실행되면 (Button 컴포넌트 또는 Option 컴포넌트에서 dispatch 메소드가 실행 되면) LISTENER 함수가 실행됩니다.
// 그렇기 때문에, 데이터가 변경될 때마다 다시 랜더링하게 됩니다.
store.subscribe(render);
render();