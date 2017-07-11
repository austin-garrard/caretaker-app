import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {LoginStack} from './App/config/MainNavigator';

import { ThemeProvider } from 'react-native-material-ui';
import theme from './theme';

class App extends Component {
    render() {
        return <LoginStack />;
    }
}

export default App;

class Main extends Component {
  render() {
    return <ThemeProvider uiTheme={theme}>
      <App />
    </ThemeProvider>;
  }
}

AppRegistry.registerComponent('caretaker', () => Main);
