import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Main from './Main/main'
import NotFound from 'routes/Index/NotFound/404'

const Routes = ({ user }) => {
  if (user) {
    return (
      <Switch>
        <Route path="/index" component={Main} />
        <Route component={NotFound} />
      </Switch>
    )
  }

  if (!user){
    console.log('NOT USER')
    return (
      <Switch>
        <Route
          path="/"
          render={props => (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          )}
        />
      </Switch>
    )
  }
}

export default Routes