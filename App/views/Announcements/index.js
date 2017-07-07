import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import ContainerFor from './container.js';

const ListItem = (props) => (
    <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{new Date(props.date).toDateString()}</Text>
        <Text>{props.description}</Text>
    </View>
)

const Announcements = (props) => {

    const _renderItem = ({item}) => (
        <ListItem
            title={item.title}
            date={item.date}
            description={item.description}
        />
    )

    return (
        <View style={styles.container}>
            <FlatList
               data={props.announcements}
               renderItem={_renderItem}
               keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default ContainerFor(Announcements);

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
