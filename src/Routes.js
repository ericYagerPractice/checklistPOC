import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import CreateSchedule from './pages/CreateSchedule'
import LoginForm from './pages/authN/login'
import CreateAccountForm from './pages/authN/createAccount'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/CreateSchedule' component={CreateSchedule} />
        <Route exact path='/Login' component={LoginForm} />
        <Route exact path='/CreateAccount' component={CreateAccountForm} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  } 
}

export default Routes;