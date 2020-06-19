import React, { Component } from 'react';

// 보여줄 컴포넌트를 import
import Counter from './components/Count';
import Option from './components/Option';
import Button from './components/Button';

class App extends Component {
  render() {

    // 1. react-redux를 쓰지 않는 경우: 각각의 컴포넌트는 모두 store를 사용하기 때문에 store를 전달해 줍니다.
    // store를 사용하는 모든 child에게 store을 계속해서 전달해 주어야 합니다. 
    // (컴포넌트 갯수가 여러개가 된다면 번거로운 작업이 됨)

    // return (
    //   <div>
    //     <Counter store={this.props.store} />
    //     <Option store={this.props.store} />
    //     <Button store={this.props.store} />
    //   </div>
    // );

    // 2. react-redux를 사용할 경우:
    return (
      <div> 
        <Counter />
        <Option />
        <Button />
      </div>
    );
  }
}

export default App;