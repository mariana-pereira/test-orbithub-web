import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Main from '../pages/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Login} />
    <Route path="/home" exact component={Main} />
  </Switch>
);

export default Routes;
