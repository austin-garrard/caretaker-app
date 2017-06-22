import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import EventGateway from '../../gateway/event.js';
import UserGateway from '../../gateway/user.js';

export default class AssignedEventListContainer extends Component {
    constructor() {
        super();
        this.state = {
            events: []
        };
        this.currentUser = '';
    }

    componentDidMount() {
        const events = EventGateway
            .getAll()
            .filter((event) => UserGateway.isSelf(event.volunteerId))

        this.setState({events: events});
    }

    render() {
        return <AssignedEventList events={this.state.events} />;
    }
}

export class AssignedEventList extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Assigned Upcoming Events</Text>
            <FlatList
               data={this.props.events}
               keyExtractor={(item) => item.id}
               renderItem={({item}) => <Text style={styles.item}>{item.date}: {item.name}</Text>}
            />
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
  item: {
    fontSize: 20,
    textAlign: 'left',
    margin: 13,
  },
});
