import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// 引用 normalize.css
import 'normalize.css';
// 程序页面路由主入口文件App
import App from './App';
// 全局引用自定义公共样式
import 'assets/style/common.scss';
// 全局引用自定义公共变量和方法
import request from 'assets/js/require.js';
import commonFun from 'assets/js/commonFun.js';
import commonVar from 'assets/js/commonVar.js';

/**
 * 在开发环境中注入请求数据拦截，模拟请求数据
 */
MOCK && require('mock/mock');

// 注入全局变量和全局方法
window.GLOBAL = {
  ...request,
  ...commonFun,
  ...commonVar
};

/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderWithHotReload(NextApp);
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <RootElement />
    </AppContainer>,
    document.getElementById('app')
  )
}