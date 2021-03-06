import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import UserGateway, { Permissions } from '../../data/UserGateway';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';
import PatientDashboard from './PatientDashboard/';
import AdminDashboard from './AdminDashboard/';
import HelperDashboard from './HelperDashboard/';

export default class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            screen: null
        }
    }

    componentDidMount() {
        const permissions = UserGateway.getCurrentPermissions();
        this.setState({screen: screenFor[permissions]});
    }

    static navigationOptions = {
        title: 'Home Screen'
    };

    render() {
        return <ScreenWithToolbar title='Schedule' navigation={this.props.navigation}>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}>
              {this.state.screen}
            </View>
        </ScreenWithToolbar>;
    }
}

const screenFor = {
    [Permissions.FOCUS]: (<PatientDashboard />),
    [Permissions.ADMIN]: (<AdminDashboard />),
    [Permissions.HELPER]: (<HelperDashboard />)
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
