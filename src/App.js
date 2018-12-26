import React from 'react';
import { BrowserRouter as Router, browserHistory, Switch } from 'react-router-dom';
import routes from 'router/route';

export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <div className="app-container">
                    <Switch>
                        {routes}
                    </Switch>
                </div>
            </Router>
        )
    }
}