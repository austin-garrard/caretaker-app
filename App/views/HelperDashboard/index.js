import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AssignedEventListContainer from '../../components/AssignedEventList/';
import UnassignedEventListContainer from '../../components/UnassignedEventList/';

export default class HelperDashboard extends Component {
  static navigationOptions = {
    title: 'Helper Screen'
  };

  render() {
    return (
        <View style={styles.container}>
            <AssignedEventListContainer />
            <UnassignedEventListContainer />
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