import React from 'react';
import renderer from 'react-test-renderer';
import EventPage from './EventPage';

describe('<EventPage />', () => {
  let props;
  const eventPage = () => renderer.create(<EventPage {...props} />);

  const mockEvent = {
    name: 'Chemotherapy',
    volunteer: 'East Jones',
    date: '01 Jul',
    location: '800 Rocky Rd, Citytown TX',
    description: 'The description is mighty.'
  };

  beforeEach(() => {
    props = {
      event: mockEvent,
      onClose: jest.fn(),
      onAccept: jest.fn(),
      onDrop: jest.fn(),
      onEdit: jest.fn()
    };
  });

  it('should render correctly', () => {
    expect(eventPage()).toMatchSnapshot();
  });

});
