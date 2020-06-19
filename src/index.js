import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 추가
import { createStore } from 'redux';  // createStore
import counterApp from './reducers';
import { Provider } from 'react-redux';  // react-redux 추가

const store = createStore(counterApp);  // store을 만드는 방법입니다. (createStore 메소드를 이용하면 되는데, createStore의 인자로 reducer를 전달해 줘야 합니다)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Provider 컴포넌트 안에 App 컴포넌트를 둡니다.
// 그리고 Provider 컴포넌트에만 store을 지정해줍니다.