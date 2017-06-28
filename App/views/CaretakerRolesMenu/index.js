import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CaretakerRolesContainer from '../../components/CaretakerRolesList/';
import renderif from '../../utils/renderif.js';

export default class CaretakerRolesMenu extends Component {
    static navigationOptions = {
        title: 'Caretaker Role Screen'
    };

    createNewCaretakerRole = () => alert('Insert Caretaker Role Creation Screen Here!');

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Caretaker Roles</Text>
                    <Button
                        onPress = {this.createNewCaretakerRole}
                        title="+"
                    />
                <CaretakerRolesContainer />
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