import React, { Component } from 'react';

class Option extends Component {
    constructor(props) {
        super(props); 
        this.onChange = this.onChange.bind(this);
    }

    // 사용자가 입력한 값을 부모 컴포넌트로 전달
    onChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            // 부모 컴포넌트로부터 전달받은 diff 값을 출력
            <div>
                <input
                    value={this.props.diff}
                    onChange={this.onChange}
                />
            </div>
        );
    }
} export default Option;