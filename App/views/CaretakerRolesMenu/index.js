import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CaretakerRolesContainer from '../../components/CaretakerRolesList/';
import UserGateway, { Permissions } from '../../data/UserGateway';
import renderif from '../../utils/renderif.js';

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
        return (
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
        );
    }
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