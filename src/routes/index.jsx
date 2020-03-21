import React, { lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

const Index = lazy(() => import('./Index'))
const Home = lazy(() => import('./Home'))
// import Index from './Index'
// import Home from './Home'

const Routes = ({ user }) => {
  console.log('user', user)
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route path="/index" component={Index} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
        {/* <Switch>
          <Route path="/index" component={Index} />
          <Route path="/" component={Home} />
        </Switch> */}
      </BrowserRouter>
    )
}
export default Routes