import React, { Component } from 'react';
import {DrawerNavigator, NavigationActions} from 'react-navigation';
import UserGateway, { Permissions } from '../../data/UserGateway/';
import {adminRoutes, helperRoutes, config} from './config.js';

export default class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            userType: null
        }
    }

    componentDidMount() {
        const permissions = UserGateway.getCurrentPermissions();
        this.setState({userType: permissions});
    }

    _onLogout = () => {
        UserGateway.logout();
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login'})]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        const userType = this.state.userType;
        let result = null;
        const screenProps = {
            routes: routesFor[userType],
            logout: this._onLogout
        }
        if(userType) {
            const Navigator = DrawerNavigator(routesFor[userType], config);
            result = <Navigator screenProps={screenProps} />;
        }
        return result;
    }
}

const routesFor = {
    [Permissions.FOCUS]: adminRoutes,
    [Permissions.ADMIN]: adminRoutes,
    [Permissions.HELPER]: helperRoutes
}
