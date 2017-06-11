import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import EventGateway from '../../gateway/event.js'

export default class EventListContainer extends Component {
  constructor() {
    super();
    this.gateway = new EventGateway();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.setState({events: this.gateway.getAll()});
  }

  render() {
    return <EventList events={this.state.events} />;
  }
}

export class EventList extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Upcoming Events</Text>
            <FlatList
               data={this.props.events}
               renderItem={({item}) => <Text style={styles.item}>{item.date}: {item.name} - {item.volunteer}</Text>}
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
