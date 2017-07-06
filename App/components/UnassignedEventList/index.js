import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import EventGateway from '../../data/EventGateway';
import { ActionButton } from 'react-native-material-ui';

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
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Events Still Looking for People</Text>
                <FlatList
                   data={this.props.events}
                   keyExtractor={(item) => item.id}
                   renderItem={({item}) => <Text style={styles.item}>{item.date}: {item.name} - {item.role}</Text>}
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
