import React from 'react';
import renderer from 'react-test-renderer';
import Detail from './Detail';

describe('<EventPage.Detail />', () => {
  let props;
  const detail = () => renderer.create(<Detail {...props} />);

  beforeEach(() => {
    props = {
      text: 'The text',
      icon: 'icon',
      center: true
    };
  });

  it('should render correctly', () => {
    expect(detail()).toMatchSnapshot();
  });

});
