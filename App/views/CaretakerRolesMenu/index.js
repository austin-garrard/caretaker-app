import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CaretakerRolesContainer from '../../components/CaretakerRolesList/';
import UserGateway, { Permissions } from '../../data/UserGateway';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';
import renderif from '../../utils/renderif.js';

import styles from './styles';

export default class CaretakerRolesMenu extends Component {
    constructor() {
        super();
        this.state = {
            isAdmin: false,
            activeRoles: []
        }
    }

    componentDidMount() {
        const permissions = UserGateway.getCurrentPermissions();
        if( permissions == Permissions.FOCUS || permissions == Permissions.ADMIN ) {
            this.setState({isAdmin: true});
        } else {
            this.setState({isAdmin: false});
        }
        var roles = UserGateway.getRoles();
        this.setState({activeRoles: roles})
    }

    static navigationOptions = {
        title: 'Caretaker Role Screen'
    };

    createNewCaretakerRole = () => alert('Insert Caretaker Role Creation Screen Here!');

    render() {
        return <ScreenWithToolbar title='Roles' navigation={this.props.navigation}>
            <View style={styles.container}>
                <Text style={styles.title}>Caretaker Roles</Text>
                    {renderif(this.state.isAdmin,
                        <Button
                            onPress = {this.createNewCaretakerRole}
                            title="+"
                        />
                    )}
                <CaretakerRolesContainer
                    activeRoles={this.state.activeRoles}
                />
            </View>
        </ScreenWithToolbar>;
    }
}
