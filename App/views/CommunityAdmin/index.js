import React, {Component, PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button
} from 'react-native';
import ContainerFor from './container.js';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';

const ListItem = (props) => (
    <View style={styles.person}>
    <View style={styles.item}>
        <Text>{props.name}</Text>
        <Text>{props.email}</Text>
        <Text>{props.phone}</Text>
    </View>
    <View>
        <Text style={styles.roles}>{props.roles.join(', ')}</Text>
    </View>
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

    return <ScreenWithToolbar title='Admin' navigation={props.navigation}>
        <View style={styles.container}>
            {props.modal}
            <FlatList
               data={props.users}
               renderItem={_renderItem}
               keyExtractor={(item) => item.identifier}
            />
            <Button
                style={styles.button}
                title='Invite'
                onPress={props.onShowModal}
            />
        </View>
    </ScreenWithToolbar>;
}

export default ContainerFor(CommunityAdmin);

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10
  },
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 15,
  },
  person: {
    padding: 8,
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  roles: {
    flexDirection: 'row',
    textAlign: 'center',
    flex: 1,
    justifyContent: 'space-between',
  }
});
