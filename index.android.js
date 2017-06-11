import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PatientDashboard from './App/views/PatientDashboard/';
import AdminDashboard from './App/views/AdminDashboard/';
import HelperDashboard from './App/views/HelperDashboard/';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Patient Screen'
  };

  render() {
    const {navigate} = this.props.navigation
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <PatientDashboard />
            <View style={styles.button}>
                <Button title="Admin Screen" onPress={() => navigate('Admin')} />
                <Button title="Helper Screen" onPress={() => navigate('Helper')} />
            </View>
        </View>
    );
  }
}

const caretaker = StackNavigator({
    Home: { screen: HomeScreen },
    Admin: { screen: AdminDashboard },
    Helper: { screen: HelperDashboard }
});

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

AppRegistry.registerComponent('caretaker', () => caretaker);
