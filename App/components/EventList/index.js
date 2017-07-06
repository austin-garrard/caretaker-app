import React, {Component, PureComponent} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { ActionButton } from 'react-native-material-ui';
import {ContainerFor} from './container.js';
import EventModal from '../shared/EventModal/';

class MyListItem extends PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={[styles.button, styles.eventBox]}>
                  <View style={styles.eventDateWrap}>
                    <Text style={styles.eventDateDay}>27</Text>
                    <Text style={styles.eventDateDayName}>Mon</Text>
                  </View>
                  <View style={styles.eventDetailsWrap}>
                    <Text style={styles.eventName}>{this.props.name}</Text>
                    <Text style={styles.eventVolunteer}>{this.props.volunteer}</Text>
                  </View>
                </View>
            </TouchableOpacity>
        );
    }
}

class EventList extends Component {

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onPressItem={this.props.onPressItem}
            title={item.title}
            date={item.date}
            name={item.name}
            volunteer={item.volunteer}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <EventModal
                    event={this.props.selectedEvent}
                    visible={this.props.visibleModal}
                    onClose={this.props.onCloseModal}
                />
                <FlatList
                   style={styles.eventList}
                   data={this.props.events}
                   dataWhichCouldChange={this.props.events.map((event) => event.volunteer)}
                   renderItem={this._renderItem}
                   keyExtractor={(item) => item.id}
                />
                <ActionButton onPress={() => alert('hi')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
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
  },
  eventBox: {
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    marginBottom: 0
  },
  eventDateWrap: {
    width: 56,
    padding: 4
  },
  eventDateDay: {
    fontSize: 24
  },
  eventDetailsWrap: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#FF0000',
    borderRadius: 2,
    padding: 4
  },
  eventName: {
    fontWeight: 'bold'
  },
  eventVolunteer: {},
  eventList: {
    backgroundColor: '#FFF'
  }
});

export default ContainerFor(EventList);
