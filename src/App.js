import React, { Component } from 'react';

import Counter from './components/Count';
import Option from './components/Option';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
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

  onIncrement() {  // Button에서 실행되는 이벤트 핸들러 ()
    this.setState(prevState => ({
      value: prevState.value + Number(this.state.diff)
    }));
  }

  onDecrement() {
    this.setState(prevState => ({
      value: prevState.value - Number(this.state.diff)
    }));
  }

  render() {
    return (
      <div>
        <Counter value={this.state.value} />
        <Option diff={this.state.diff} onChange={this.onChange} />
        <Button onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
      </div>
    );
  }
}

export default App;