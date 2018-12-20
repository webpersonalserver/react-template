import React, { Component } from 'react';
import { Spin } from 'antd';
import './index.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading-coontainer">
        <Spin tip="加载中..." size="large"></Spin>
      </div>
    )
  }
}