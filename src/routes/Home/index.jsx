import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './Landing/landing'
import Login from './Login/login'

const Routes = ({ history }) => (
  <Switch>
    <Route path="/" component={Landing} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default Routes
