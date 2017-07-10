import React from 'react';
import renderer from 'react-test-renderer';
import EventSummaryBox from './EventSummaryBox';

describe('<EventSummaryBox />', () => {
  let props;
  const eventSummaryBox = () => renderer.create(<EventSummaryBox {...props} />);

  beforeEach(() => {
    props = {
      name: undefined,
      volunteer: undefined
    };
  });

  it('should render correctly', () => {
    props.name = 'Chemotherapy';
    props.volunteer = 'Adept Wilkenson';
    expect(eventSummaryBox()).toMatchSnapshot();
  });

});
