import React from 'react';
import renderer from 'react-test-renderer';
import Drawer from './Drawer';

describe('<Drawer />', () => {
  let props;
  const drawer = () => renderer.create(<Drawer {...props} />);

  beforeEach(() => {
    props = {
      navigation: undefined,
      items: undefined,
      screenProps: undefined
    };
  });

  it('should render correctly', () => {
    props.navigation = {
      navigate: jest.fn(),
      state: {
        index: 0
      }
    };

    props.items = [ {
      key: 'Hello'
    }, {
      key: 'Goodbye'
    } ];

    props.screenProps = {
      Hello: {
        navigationOptions: {
          drawerIcon: 'hey-there',
          drawerLabel: 'Greetings and Salutations'
        }
      },
      Goodbye: {
        navigationOptions: {
          drawerIcon: 'so-long',
          drawerLabel: 'See Ya Later'
        }
      }
    };

    expect(drawer()).toMatchSnapshot();
  });

});
