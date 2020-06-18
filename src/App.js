import React, { Component } from 'react';

import Counter from './components/Count';
import Option from './components/Option';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      my_value: 0,
      diff: 1
    };
    
    this.onChange = this.onChange.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onChange(diff) {  // Option에서 실행되는 이벤트 핸들러 (사용자의 입력 값을 state.diff에 저장)
    this.setState({
      diff: diff
    });
  }

  onIncrement() {  // Button에서 실행되는 이벤트 핸들러 (본래 값 + 사용자가 입력한 값)
    this.setState(prevState => ({
      my_value: prevState.my_value + Number(this.state.diff)
    }));
  }

  onDecrement() {  // Button에서 실행되는 이벤트 핸들러 (본래 값 - 사용자가 입력한 값)
    this.setState(prevState => ({
      my_value: prevState.my_value - Number(this.state.diff)
    }));
  }

  render() {
    return (
      <div>
        <Counter my_value={this.state.my_value} />  {/* 사용자가 버튼을 누르면 나오는 최종 결과값 표시 */}
        <Option diff={this.state.diff} onChange={this.onChange} />  {/* 사용자가 입력창에 입력한 값 */}
        <Button onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
    {/* <button onClick={this.onIncrement}> + </button>
        <button onClick={this.onDecrement}> - </button> */}
      </div>
    );
  }
}

export default App;