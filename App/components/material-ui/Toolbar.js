import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { Toolbar as MaterialUiToolbar } from 'react-native-material-ui';
import theme from '../../config/theme';

export default class Toolbar extends React.Component {
  render() {
    return <ThemeProvider uiTheme={theme}><MaterialUiToolbar {...this.props} /></ThemeProvider>;
  }
}
