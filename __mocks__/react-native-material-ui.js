import React, {Component} from 'react';
const materialUi = jest.genMockFromModule('react-native-material-ui');

materialUi.ActionButton = (props) => React.createElement(
  'ActionButton',
  props,
  props.children
);

materialUi.ThemeProvider = (props) => React.createElement(
  'ThemeProvider',
  props,
  props.children
);

materialUi.Drawer = (props) => React.createElement(
  'MuiDrawer',
  props,
  props.children
);

materialUi.Drawer.Section = (props) => React.createElement(
  'MuiDrawer.Section',
  props,
  props.children
);

module.exports = materialUi;
