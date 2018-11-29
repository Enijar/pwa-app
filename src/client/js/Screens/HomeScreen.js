import React, { Component } from "react";
import Screen from "../Components/Screen";
import NetworkStatus from '../Components/NetworkStatus'

export default class HomeScreen extends Component {
  render () {
    return (
      <Screen>
        <NetworkStatus/>
        <h1>Home Screen</h1>
      </Screen>
    );
  }
}
