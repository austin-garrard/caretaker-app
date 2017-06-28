import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Announcements extends Component {
    constructor() {
        super();
        this.state = {
            screen: null
        }
    }

    componentDidMount() {

    }

    static navigationOptions = {
        title: 'Announcements Screen'
    };

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text>Insert Announcements Here</Text>
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