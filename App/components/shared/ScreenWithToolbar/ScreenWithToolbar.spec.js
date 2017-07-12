import React, { Component } from 'react';
import { View, Text } from 'react-native';
import renderer from 'react-test-renderer';
import ScreenWithToolbar from './ScreenWithToolbar';

describe('<ScreenWithToolbar />', () => {
  let props;
  const screenWithToolbar = (children) => renderer.create(<ScreenWithToolbar {...props}>{children}</ScreenWithToolbar>);

  beforeEach(() => {
    props = {
      title: undefined,
      navigation: undefined
    };
  });

  it('should render correctly', () => {
    props.title = 'Schedule';
    props.navigation = { navigate: () => {} };
    expect(screenWithToolbar(<SomeChild />)).toMatchSnapshot();
  });

  const SomeChild = () => {
    return <View>
      <Text>hi</Text>
    </View>
  };

});
