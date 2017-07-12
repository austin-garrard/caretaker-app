import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';

export default class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            screen: null
        }
    }

    componentDidMount() {

    }

    static navigationOptions = {
        title: 'User Profile Screen'
    };

    render() {
        return <ScreenWithToolbar title='Profile' navigation={this.props.navigation}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text>Insert User Profile Here</Text>
            </View>
        </ScreenWithToolbar>;
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
