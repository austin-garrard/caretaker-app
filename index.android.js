import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {LoginStack} from './App/config/MainNavigator';

class App extends Component {
    render() {
        return <LoginStack />;
    }
}

export default App;

AppRegistry.registerComponent('caretaker', () => App);
