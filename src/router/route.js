import React from 'react';
import { Route } from 'react-router-dom';
import asynComponent from './Bundle';

/**
 * ------路由页面------
 */
import Home from 'bundle-loader?lazy&name=home!views/Home/index';
import Test from 'bundle-loader?lazy&name=test!views/Test/index';

/**
 * 路由配置数组
 * 注意：不能配置子组件，都是单层配置
 */
const config = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/test',
  component: Test
}];

// 处理渲染路由配置数组
const exaggerate = (routeConfig) => {
  let routeArray = routeConfig.map((ele, index) => {
    return (<Route exact key={`${ele.path}${Math.random()}`} path={ele.path} component={asynComponent(ele.component)} />)
  });

  return routeArray;
};
const routes = exaggerate(config);

export default routes;