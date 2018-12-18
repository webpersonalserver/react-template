import React, {Component} from 'react';
import routes from 'router/route';

export default class App extends Component {
  render() {
      return (
          <div className="app-container">
              {routes()}
          </div>
      )
  }
}