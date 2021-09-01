import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import CreateChecklist from './pages/CreateChecklist'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Create' component={CreateChecklist} />
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