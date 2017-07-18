import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import EventGateway from '../../data/EventGateway';
import UserGateway from '../../data/UserGateway';
import EventList from '../shared/EventList';

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
        return <View style={styles.container}>
            <EventList events={this.props.events} />
        </View>;
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
