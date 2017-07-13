import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import UserGateway, { NotificationTypes, createAdminUser } from '../../data/UserGateway/';
import UserProfile from './index.js';

describe('User Profile', () => {

    beforeEach(() => {
        jest.spyOn(UserGateway, 'getCurrentUser')
            .mockReturnValue(createAdminUser());
    });

    it('should process the raw notification types', () => {
        const profile = renderer.create(<UserProfile />).getInstance();
        expect(profile.state.currentUser.notificationTypes).toEqual({
            [NotificationTypes.PUSH]: {
                name: 'Push',
                value: true
            },
            [NotificationTypes.EMAIL]: {
                name: 'Email',
                value: false
            },
            [NotificationTypes.SMS]: {
                name: 'SMS',
                value: false
            }
        });
    })

    it('should toggle the notification types', () => {
        const profile = renderer.create(<UserProfile />).getInstance();

        profile.toggle(NotificationTypes.EMAIL)();

        expect(profile.state.currentUser.notificationTypes).toEqual({
            [NotificationTypes.PUSH]: {
                name: 'Push',
                value: true
            },
            [NotificationTypes.EMAIL]: {
                name: 'Email',
                value: true
            },
            [NotificationTypes.SMS]: {
                name: 'SMS',
                value: false
            }
        });
    })

    xit('should process the raw notification triggers', () => {
        const profile = renderer.create(<UserProfile />).getInstance();
        expect(profile.state.currentUser.notificationTriggers).toEqual([{
            name: 'push',
            value: true
        }, {
            name: 'email',
            value: false
        }, {
            name: 'sms',
            value: false
        }]);
    })
})
