import React, { Component } from "react";

export default class NetworkStatus extends Component {
  state = {
    status: navigator.onLine ? 'online' : 'offline',
  };

  componentDidMount () {
    window.addEventListener('online', this.updateStatus);
    window.addEventListener('offline', this.updateStatus);
  }

  componentWillUnmount () {
    window.removeEventListener('online', this.updateStatus);
    window.removeEventListener('offline', this.updateStatus);
  }

  updateStatus = event => {
    this.setState({status: event.type});
  };

  render () {
    return (
      <div className="NetworkStatus">
        Network Status: {this.state.status}
      </div>
    );
  }
}
