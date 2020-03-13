/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 15:56:56
* */
import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import Login from "../pages/login/login";
import LayoutComponent from "../pages/layout";

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path="/" component={LayoutComponent} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
