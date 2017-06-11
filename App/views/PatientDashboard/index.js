import React, { Component } from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import EventList from '../../components/EventList/';

export default class PatientDashboard extends Component {
  render() {
    return (
        <View style={styles.container}>
            <EventList />
        </View>
    );
  }
}

const styles = StyleSheet.create({
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