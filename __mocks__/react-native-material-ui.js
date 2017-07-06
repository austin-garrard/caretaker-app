import React, {Component} from 'react';
const materialUi = jest.genMockFromModule('react-native-material-ui');

materialUi.ActionButton = (props) => React.createElement(
  'ActionButton',
  props,
  props.children
);

module.exports = materialUi;
