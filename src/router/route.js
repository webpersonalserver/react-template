import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Bundle from './Bundle';

// 异步加载方法
function AsynchronouLoading (url) {
  let name = url.split('/')[1];

  return `bundle-loader?lazy&name=${name}!${url}`;
}
const Loading = function () {
  return <div>Loading...</div>;
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading />
    }
  </Bundle>
);

/**
 * ------路由页面------
 */
import Home from 'bundle-loader?lazy&name=home!views/Home/index';
import Test from 'bundle-loader?lazy&name=test!views/Test/index';

const routes = () => (
  <div>
    <ul>
      <li><Link to="/">首页</Link></li>
      <li><Link to="/test">Test</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={createComponent(Home)} />
      <Route path="/test" component={createComponent(Test)} />
    </Switch>
  </div>
);

export default routes;