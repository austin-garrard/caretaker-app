import React from 'react';
import renderer from 'react-test-renderer';
import UnassignedEventListContainer from './index.js';

describe('UnassignedEventList', () => {
    it('should render correctly', () => {
        const list = renderer.create(
            <UnassignedEventListContainer />
        )
        expect(list).toMatchSnapshot();
    });
});
