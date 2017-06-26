import {AppRegistry} from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Index from '../index.android.js';
import UserGateway from '../App/gateway/user.js';

describe('Android app', () => {
    let navigation;

    beforeEach(() => {
        navigation = jest.fn();
        UserGateway.signIn('sarah@emailprovider.com');
    });

    it('renders correctly', () => {
        const tree = renderer.create(
            <Index navigation={navigation} />
        );

        expect(tree).toMatchSnapshot();
    });
});
