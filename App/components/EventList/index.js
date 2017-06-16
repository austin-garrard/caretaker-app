import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import EventGateway from '../../gateway/event.js';
import EventModal from '../shared/EventModal.js';

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

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.item);
    };

    render() {
        item = this.props.item
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.button}>
                   <Text style={styles.item}>{item.date}: {item.name} - {item.volunteer}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export class EventList extends Component {
    state = {
        visibleModal: false,
        event: {key: 1, date: 'July 1', time: '13:00-14:00', location: '6818 Austin Center Blvd, Austin, TX 78731', name: 'Chemotherapy', volunteer: 'Jack', role: 'driver', description: ''},
    };

    _onPressItem = (eventItem) => {
        this.setState({ visibleModal: true, event: eventItem});
    };

    _onCloseModal = () => {
      let newState = this.state;
      newState.visibleModal = false;
      this.setState(newState);
    }

    _renderItem = ({item}) => (
        <MyListItem
          id={item.key}
          item={item}
          onPressItem={this._onPressItem}
          title={item.title}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <EventModal
                  event={this.state.event}
                  visible={this.state.visibleModal}
                  close={() => this._onCloseModal}
                />
                <Text style={styles.title}>Upcoming Events</Text>
                <FlatList
                   data={this.props.events}
                   extraData={this.state}
                   renderItem={this._renderItem}
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
  modalContent: {
    margin: 13,
  },
  modalTitle: {
    fontSize: 24,
    textAlign: 'center',
    margin: 15
  },
  modalInfo: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10
  }
});
