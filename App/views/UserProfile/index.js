import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ContainerFor from './container.js';
import Checkbox from '../../components/material-ui/Checkbox.js';
import { NotificationTypes, NotificationTriggers } from '../../data/UserGateway';

const UserProfile = (props) => {

    _renderCheckbox = (type) => {
        const currentValue = props.notificationTypes[type].value;

        return <Checkbox
            label={props.notificationTypes[type].name}
            value={type}
            checked={currentValue}
            onCheck={props.toggle(type)}
        />
    }

    //todo remove this
    _renderNotificationTypes = () => {
        return Object.values(props.notificationTypes)
            .filter(type => type.value === true)
            .map(type => type.name)
            .join(', ')
    }

    return <View style={styles.container}>
        <Text style={styles.title}>User Profile</Text>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Info</Text>
            <Text>Name: {props.name}</Text>
            <Text>Email: {props.email}</Text>
            <Text>Phone: {props.phone}</Text>
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Settings</Text>
            <Text>Receive Notifications via: {_renderNotificationTypes()}</Text>
            <Text>Receive Notifications for: {props.notificationTriggers.join(', ')}</Text>
        </View>
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Receive Notifications via:</Text>
            {_renderCheckbox(NotificationTypes.PUSH)}
            {_renderCheckbox(NotificationTypes.EMAIL)}
            {_renderCheckbox(NotificationTypes.SMS)}
        </View>
    </View>
};

export default ContainerFor(UserProfile);

const styles = StyleSheet.create({
    button: {
        margin: 10,
        padding: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        margin: 15,
    },
    sectionContainer: {
        margin: 10,
        flex: 1
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    }
});
