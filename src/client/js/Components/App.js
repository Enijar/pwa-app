import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";

@withRouter
export default class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
      </Switch>
    );
  }
}
