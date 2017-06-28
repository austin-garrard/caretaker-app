import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CaretakerRolesContainer from '../../components/CaretakerRolesList/';

export default class CaretakerRolesMenu extends Component {
    static navigationOptions = {
        title: 'Caretaker Role Screen'
    };

    render() {
        return (
            <View style={styles.container}>
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