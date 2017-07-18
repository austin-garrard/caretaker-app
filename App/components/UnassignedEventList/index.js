import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import EventGateway from '../../data/EventGateway';
import EventList from '../shared/EventList';

export default class UnassignedEventListContainer extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    const events = EventGateway
        .getAll()
        .filter((event) => event.volunteerId == 'TBD');
    this.setState({events: events});
  }

  getUnassigned() {
    var groupedEvents = this.state.events.filter(function(event){ return event.volunteerId === 'TBD' });
    return groupedEvents;
  }

  render() {
    return <UnassignedEventList events={this.getUnassigned()} />;
  }
}

export class UnassignedEventList extends Component {
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
