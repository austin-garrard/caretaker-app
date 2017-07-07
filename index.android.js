import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {LoginStack} from './App/config/MainNavigator';

import { COLOR, ThemeProvider } from 'react-native-material-ui';
const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

class App extends Component {
    render() {
        return <LoginStack />;
    }
}

export default App;

class Main extends Component {
  render() {
    return <ThemeProvider uiTheme={uiTheme}>
      <App />
    </ThemeProvider>;
  }
}

AppRegistry.registerComponent('caretaker', () => Main);
