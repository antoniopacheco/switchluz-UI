import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FakeAuth } from '../utils/FakeAuth';
console.log("heere",FakeAuth.isAuthenticated);
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      FakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )

export default PrivateRoute;