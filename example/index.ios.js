import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import App from './App';

class UUIDExample extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('example', () => UUIDExample);
