import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('<EventPage.Header />', () => {
  let props;
  const header = () => renderer.create(<Header {...props} />);

  beforeEach(() => {
    props = {
      title: 'Title',
      onClose: jest.fn()
    };
  });

  it('should render correctly', () => {
    expect(header()).toMatchSnapshot();
  });

});
