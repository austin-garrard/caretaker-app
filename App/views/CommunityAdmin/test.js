import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import CommunityAdmin from './index.js';
import UserGateway, {Permissions} from '../../data/UserGateway';
describe('Community Admin', () => {

    const users = [
        {name: 'Sarah', identifier: 'sarah@emailprovider.com', permission: Permissions.FOCUS, roles: []},
        {name: 'Caroline', identifier: 'caroline@woahdude.com', permission: Permissions.ADMIN, roles: ['driver', 'coordinator']},
    ]

    it('should query the user gateway for all users', () => {
        const spy = jest.spyOn(UserGateway, 'getAll')
                        .mockReturnValue(users);
        const screen = renderer
            .create(<CommunityAdmin />)
            .getInstance();

        expect(screen.state.users).toBe(users);
    });

    it
})
