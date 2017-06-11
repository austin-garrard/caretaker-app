import React, { Component } from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import EventList from './App/components/EventList/';

export default class caretaker extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upcoming Events</Text>
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

AppRegistry.registerComponent('caretaker', () => caretaker);
