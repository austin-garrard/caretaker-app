import React, {Component} from 'react';
import { Button } from 'react-native';
import renderer from 'react-test-renderer';
import UserGateway from '../../gateway/user.js';
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
        const login = renderer
            .create(<Login navigation={navigation}/>)
            .getInstance();

        login._onLogin();

        expect(navigation.navigate).toHaveBeenCalledWith('Home');
    });

    it('should match the snapshot', () => {
        const login = renderer.create(<Login navigation={navigation} />);

        expect(login).toMatchSnapshot();
    });
})
