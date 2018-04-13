import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './app/components/Home/Home'

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
});
