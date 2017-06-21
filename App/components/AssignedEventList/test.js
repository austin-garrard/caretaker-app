import React from 'react';
import renderer from 'react-test-renderer';
import AssignedEventListContainer from './index.js';
import UserGateway from '../../gateway/user.js';

describe('AssignedEventListContainer', () => {
    beforeEach(() => {
        UserGateway.signIn();
    });

    it('should render correctly', () => {
        const list = renderer.create(
            <AssignedEventListContainer />
        )

        expect(list).toMatchSnapshot();
    });
});
