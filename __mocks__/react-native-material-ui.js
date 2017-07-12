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

module.exports = materialUi;
