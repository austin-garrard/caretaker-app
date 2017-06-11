import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HelperDashboard extends Component {
  static navigationOptions = {
    title: 'Helper Screen'
  };

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Helper View</Text>
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