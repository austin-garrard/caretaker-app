import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {AdminTabs, Tabs} from '../../config/MainNavigator';

import UserGateway, { Permissions } from '../../data/UserGateway';

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
        var tab = null
        switch (this.state.userType) {
            case Permissions.FOCUS:
                tab = <AdminTabs />;
                break;
            case Permissions.ADMIN:
                tab = <AdminTabs />;
                break;
            case Permissions.HELPER:
                tab = <Tabs />;
                break;
        }
        return tab;
    }
}

const screenFor = {
    [Permissions.FOCUS]: (<Tabs />),
    [Permissions.ADMIN]: (<Tabs />),
    [Permissions.HELPER]: (<Tabs />)
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 15,
  },
});