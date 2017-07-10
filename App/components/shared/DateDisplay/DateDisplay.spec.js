import React from 'react';
import renderer from 'react-test-renderer';
import DateDisplay from './DateDisplay';

describe('<DateDisplay />', () => {
  const Jul_10_2017 = new Date(1499662800000);

  let props;
  const dateDisplay = () => renderer.create(<DateDisplay {...props} />);

  beforeEach(() => {
    props = {
      date: undefined
    };
  });

  it('should render correctly', () => {
    props.date = Jul_10_2017;
    expect(dateDisplay()).toMatchSnapshot();
  });

});
