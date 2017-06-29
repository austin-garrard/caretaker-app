import React, {Component, PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import ContainerFor from './container.js';

const ListItem = (props) => (
    <View style={styles.item}>
        <Text>{props.name}</Text>
        <Text>{props.email}</Text>
        <Text>{props.phone}</Text>
        <Text>{props.roles.join(', ')}</Text>
    </View>
)


const CommunityAdmin = (props) => {
    _renderItem = ({item}) => (
        <ListItem
            name={item.name}
            email={item.identifier}
            phone={item.phone}
            roles={item.roles}
        />
    )

    return (
        <View style={styles.container}>
            <FlatList
               data={props.users}
               renderItem={_renderItem}
               keyExtractor={(item) => item.identifier}
            />
        </View>
    );
}

export default ContainerFor(CommunityAdmin);

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
  item: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  }
});
