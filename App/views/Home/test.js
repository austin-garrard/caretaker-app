import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from './index.js';
import UserGateway, {Permissions} from '../../data/UserGateway';
import PatientDashboard from './PatientDashboard/';
import AdminDashboard from './AdminDashboard/';
import HelperDashboard from './HelperDashboard/';

describe('Home Screen', () => {

    beforeEach(() => {
        UserGateway.signIn('sarah@emailprovider.com');
    });

    it('should use the patient dashboard when the user is the focus', () => {
        const spy = jest.spyOn(UserGateway, 'getCurrentPermissions')
                        .mockReturnValue(Permissions.FOCUS);

        const homeScreen = renderer
            .create(<HomeScreen />)
            .getInstance();

        expect(homeScreen.state.screen.type).toBe(PatientDashboard);
    });

    it('should use the admin dashboard when the user is an admin', () => {
        const spy = jest.spyOn(UserGateway, 'getCurrentPermissions')
                        .mockReturnValue(Permissions.ADMIN);

        const homeScreen = renderer
            .create(<HomeScreen />)
            .getInstance();

        expect(homeScreen.state.screen.type).toBe(AdminDashboard);
    });

    it('should use the helper dashboard when the user is a helper', () => {
        const spy = jest.spyOn(UserGateway, 'getCurrentPermissions')
                        .mockReturnValue(Permissions.HELPER);

        const homeScreen = renderer
            .create(<HomeScreen />)
            .getInstance();

        expect(homeScreen.state.screen.type).toBe(HelperDashboard);
    });

    it('should render the correct screen', () => {
        const spy = jest.spyOn(UserGateway, 'getCurrentPermissions')
                        .mockReturnValue(Permissions.HELPER);

        const homeScreen = renderer
            .create(<HomeScreen />);

        expect(homeScreen).toMatchSnapshot();
    });
});
