import React, { Component } from "react";
import Screen from "../Components/Screen";
import NetworkStatus from '../Components/NetworkStatus'
import { Link } from 'react-router-dom'

export default class ImageScreen extends Component {
  render () {
    return (
      <Screen>
        <NetworkStatus/>
        <h1>Image Screen</h1>

        <p>
          Go to the <Link to="/">home</Link> screen.
        </p>

        <picture className="img-fluid">
          <source srcSet="/img/road.webp" type="image/webp"/>
          <source srcSet="/img/road.jpeg" type="image/jpeg"/>
          <img src="/img/road.jpeg" alt="Road going into distance with trees either side" className="img-fluid"/>
        </picture>
      </Screen>
    );
  }
}
