import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { ActionButton as MaterialUiActionButton } from 'react-native-material-ui';
import theme from '../../config/theme';

export default class ActionButton extends React.Component {
  render() {
    return <ThemeProvider uiTheme={theme}><MaterialUiActionButton {...this.props} /></ThemeProvider>;
  }
}
