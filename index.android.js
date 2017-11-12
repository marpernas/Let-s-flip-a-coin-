import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Rotas from './src/Rotas';

export default class app06 extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('app06', () => app06);

