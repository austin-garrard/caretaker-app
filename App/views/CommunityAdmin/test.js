import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import CommunityAdmin from './index.js';
import UserGateway, {Permissions} from '../../data/UserGateway';
describe('Community Admin', () => {

    const users = [
        {name: 'Sarah', identifier: 'sarah@emailprovider.com', permission: Permissions.FOCUS, roles: []},
        {name: 'Caroline', identifier: 'caroline@woahdude.com', permission: Permissions.ADMIN, roles: ['driver', 'coordinator']},
    ]

    beforeEach(() => {
        jest.spyOn(UserGateway, 'getAll')
            .mockReturnValue(users);
    });

    it('should query the user gateway for all users', () => {
        const screen = renderer
            .create(<CommunityAdmin />)
            .getInstance();

        expect(screen.state.users).toBe(users);
    });

    it('should hide the modal by default', () => {
        const screen = renderer
            .create(<CommunityAdmin />)
            .getInstance();

        expect(screen.state.isModalVisible).toBe(false);
    })

    it('should display the modal when the invite button is pressed', () => {
        const screen = renderer
            .create(<CommunityAdmin />)
            .getInstance();

        screen._onShowModal();

        expect(screen.state.isModalVisible).toBe(true);
    });

    it('should display the modal when the invite button is pressed', () => {
        const screen = renderer
            .create(<CommunityAdmin />)
            .getInstance();

        screen._onHideModal();

        expect(screen.state.isModalVisible).toBe(false);
    });

    it('should hide the modal when the new users email is submitted', () => {
        const screen = renderer
            .create(<CommunityAdmin />)
            .getInstance();

        screen._onSubmitEmail();

        expect(screen.state.isModalVisible).toBe(false);
    });

    it('should update the new user email when typing into the text input', () => {
        const screen = renderer
            .create(<CommunityAdmin />)
            .getInstance();

        screen._onUpdateEmail('email');

        expect(screen.state.newUserEmail).toBe('email');
    })

    it('should invite user through the gateway when the new users email is submitted', () => {
        const spy = jest.spyOn(UserGateway, 'inviteUser')
        const screen = renderer
            .create(<CommunityAdmin />)
            .getInstance();

        screen.state.newUserEmail = 'newUser@gmail.com';
        screen._onSubmitEmail();

        expect(spy).toHaveBeenCalledWith('newUser@gmail.com');
    })
})
