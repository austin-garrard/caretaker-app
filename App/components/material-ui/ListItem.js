import React from 'react';
import { ThemeProvider } from 'react-native-material-ui';
import { ListItem as MaterialUiListItem } from 'react-native-material-ui';
import theme from '../../config/theme';

export default class ListItem extends React.Component {
  render() {
    return <ThemeProvider uiTheme={theme}><MaterialUiListItem {...this.props} /></ThemeProvider>;
  }
}
