import React, {Component} from 'react';
import { Button } from 'react-native';
import renderer from 'react-test-renderer';
import UserGateway from '../../data/UserGateway';
import Login from './index.js';

describe('Login Screen', () => {

    let navigation;

    beforeEach(() => {
        navigation = {
            navigate: jest.fn()
        }
    });

    it('should set its state to the value of the text box', () => {
        const login = renderer
            .create(<Login navigation={navigation}/>)
            .getInstance();

        login._onUpdateEmail('text');

        expect(login.state.email).toBe('text');
    });

    it('should sign into the user gateway when the button is clicked', () => {
        const spy = jest.spyOn(UserGateway, 'signIn');
        const login = renderer
            .create(<Login navigation={navigation}/>)
            .getInstance();
        login.state.email = 'test@email.com';

        login._onLogin();

        expect(spy).toHaveBeenCalledWith('test@email.com');
    });

    it('should navigate to the home screen when the button is clicked', () => {
        jest.spyOn(UserGateway, 'signIn')
            .mockReturnValue(true);
        const login = renderer
            .create(<Login navigation={navigation}/>)
            .getInstance();

        login._onLogin();

        expect(navigation.navigate).toHaveBeenCalledWith('Home');
    });

    it('should stay on this screen when the sign in fails', () => {
        jest.spyOn(UserGateway, 'signIn')
            .mockReturnValue(false);
        const login = renderer
            .create(<Login navigation={navigation}/>)
            .getInstance();

        login._onLogin();

        expect(navigation.navigate).not.toHaveBeenCalled();
    })

    it('should show an alert when the sign in fails', () => {
        const spy = jest.spyOn(window, 'alert');
        jest.spyOn(UserGateway, 'signIn')
            .mockReturnValue(false);
        const login = renderer
            .create(<Login navigation={navigation}/>)
            .getInstance();

        login._onLogin();

        expect(spy).toHaveBeenCalledWith('Not an approved user.');
    });

    it('should match the snapshot', () => {
        const login = renderer.create(<Login navigation={navigation} />);

        expect(login).toMatchSnapshot();
    });
})
