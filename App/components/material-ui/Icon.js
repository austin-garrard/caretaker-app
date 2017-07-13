import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { Icon as MaterialUiIcon } from 'react-native-material-ui';
import theme from '../../config/theme';

export default class ListItem extends React.Component {
  render() {
    return <ThemeProvider uiTheme={theme}><MaterialUiIcon {...this.props} /></ThemeProvider>;
  }
}
