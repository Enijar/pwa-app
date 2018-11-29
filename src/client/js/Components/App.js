import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";
import ImageScreen from '../Screens/ImageScreen'

@withRouter
export default class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/image" component={ImageScreen}/>
      </Switch>
    );
  }
}
