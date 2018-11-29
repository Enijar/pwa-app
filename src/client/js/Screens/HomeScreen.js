import React, { Component } from "react";
import Screen from "../Components/Screen";
import NetworkStatus from '../Components/NetworkStatus'
import { Link } from 'react-router-dom'

export default class HomeScreen extends Component {
  render () {
    return (
      <Screen>
        <NetworkStatus/>
        <h1>Home Screen</h1>

        <p>
          Go to the <Link to="/image">image</Link> screen.
        </p>
      </Screen>
    );
  }
}
