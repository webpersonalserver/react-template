import React from 'react';
import { Lifecycle } from 'react-router-dom';
import './index.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}