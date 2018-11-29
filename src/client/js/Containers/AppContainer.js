import React, { Component } from "react";
import App from "../Components/App";
import { BrowserRouter } from "react-router-dom";

export default class AppContainer extends Component {
  render () {
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
  }
}
