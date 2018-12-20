import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asynComponent from './Bundle';

/**
 * ------路由页面------
 */
import Home from 'bundle-loader?lazy&name=home!views/Home/index';
import Test from 'bundle-loader?lazy&name=test!views/Test/index';

const routes = () => (
  <Switch>
    <Route exact path="/" component={asynComponent(Home)} />
    <Route exact path="/home" component={asynComponent(Home)} />
    <Route exact path="/test" component={asynComponent(Test)} />
  </Switch>
);

export default routes;