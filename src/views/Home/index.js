import React from 'react';
import './index.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = () => {
        console.log('测试点击');
        console.log(this);
    }
    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Home</h1>
            </div>
        )
    }
}