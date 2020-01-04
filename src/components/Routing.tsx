import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = lazy(() => import('./App/App'));

const Routing = () => (
    <Router>
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                <Route exact path='/' component={App} />
                <Redirect to='/' />
            </Switch>
        </Suspense>
    </Router>
);

export default Routing;