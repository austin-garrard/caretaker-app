import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { Button as MaterialUiButton } from 'react-native-material-ui';
import theme from '../../config/theme';

export default class Button extends React.Component {
  render() {
    return <ThemeProvider uiTheme={theme}><MaterialUiButton {...this.props} /></ThemeProvider>;
  }
}
