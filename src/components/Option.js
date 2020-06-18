import React, { Component } from 'react';

class Option extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            // 부모 컴포넌트로부터 전달받은 diff 값을 출력
            <div>
                <input
                    value={this.props.diff}
                    onChange={(event) => {
                        this.props.onChange(event.target.value)
                    }}
                />
            </div>
        );
    }
} 

export default Option;