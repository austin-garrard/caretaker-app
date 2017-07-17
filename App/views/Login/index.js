import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import UserGateway from '../../data/UserGateway';

export default class Login extends Component {

    static navigationOptions = {
        title: 'Login'
    }

    constructor() {
        super();
        this.state = {
            email: null
        }
    }

    _onUpdateEmail = (text) => {
        this.setState({email: text})
    }

    _onLogin = () => {
        if(UserGateway.login(this.state.email)) {
            this.props.navigation.navigate('Home');
        } else {
            alert('Not an approved user.')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Dummy Login Page</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputSpacer}></View>
                    <TextInput
                        style={styles.input}
                        onChangeText={this._onUpdateEmail.bind(this)}
                        placeholder='Enter email'/>
                    <View style={styles.inputSpacer}></View>
                </View>
                <Button title="Login" onPress={this._onLogin.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        margin: 15,
    },
    inputContainer: {
        flexDirection: 'row'
    },
    inputSpacer: {
        flex: .2
    },
    input: {
        flex: .6
    }
});
