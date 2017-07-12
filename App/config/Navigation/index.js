import React, { Component } from 'react';
import {DrawerNavigator} from 'react-navigation';
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

    render() {
        const userType = this.state.userType;
        let result = null;
        if(userType) {
            const Navigator = DrawerNavigator(routesFor[userType], config);
            result = <Navigator />;
        }
        return result;
    }
}

const routesFor = {
    [Permissions.FOCUS]: adminRoutes,
    [Permissions.ADMIN]: adminRoutes,
    [Permissions.HELPER]: helperRoutes
}
