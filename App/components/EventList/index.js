import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class EventListContainer extends Component {

  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    // This will be an api call at some point
    let events = [
      {key: 1, date: 'July 1', name: 'Chemotherapy', volunteer: 'Jack'},
      {key: 2, date: 'July 3rd', name: 'Toxicity Check', volunteer: 'TBD'},
      {key: 3, date: 'July 7th', name: 'Weekend', volunteer: 'Sarah'}
    ];

    this.setState({events: events});
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
